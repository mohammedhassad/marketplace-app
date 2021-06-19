import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useLazyQuery } from '@apollo/client';
import { LOGIN_USER } from '../../../graphql/queries';

import InputField from '../../UI/Input/Field';
import Button from '../../UI/Button';
import { authenticate } from '../auth-helpers';
import Alert from '../../UI/Alert';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});

function AuthFormLogin() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ message: '', variant: '' });
  const [variables, setVariables] = useState({});
  const [loginUser, { loading, error, data }] = useLazyQuery(LOGIN_USER, {
    variables: variables,
  });

  useEffect(() => {
    if (data && data.login && !loading) {
      const { login } = data;
      authenticate(login, () => {
        navigate('/');
      });
    }
  }, [data, loading, navigate]);

  const handleSubmit = (values, errors) => {
    setVariables({ ...values });
    loginUser();

    if (error && !loading) {
      if (error.graphQLErrors[0]) {
        const { graphQLErrors } = error;
        const { extensions, message } = graphQLErrors[0];

        setAlert({ message: message, variant: 'danger' });

        if (extensions) {
          const { error: validationError } = extensions;
          validationError && errors.setErrors(validationError);
        }
      }
    }
  };

  return (
    <>
      {alert.message && (
        <Alert
          message={alert.message}
          variant={alert.variant}
          closeAlert={() => setAlert({})}
        />
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="py-5">
          {/* Email Address */}
          <Field
            component={InputField}
            label={'Email address'}
            name="email"
            type="email"
            placeholder={'jhonsmith@example.com'}
            logo={
              <svg className="w-5 h-5 text-dark-light" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                />
              </svg>
            }
          />

          {/* Password */}
          <Field
            component={InputField}
            label={'Password'}
            type="password"
            placeholder={'********'}
            name={'password'}
            logo={
              <svg className="w-5 h-5 text-dark-light" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                />
              </svg>
            }
          />

          {/* Remember me  & forget password*/}
          <div className="flex -mx-3 mb-10 items-center">
            <div className="w-1/2 px-3 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox rounded text-info mr-2 focus:ring-offset-0 focus:ring-0 "
              />
              <label
                htmlFor=""
                className="text-sm leading-wide font-bold checked:bg-info"
              >
                Remember Me
              </label>
            </div>

            <div className="w-1/2 px-3 text-right">
              <Link
                to="/forgot-password"
                className="relative text-sm cursor-pointer text-info transition duration-200 hover:text-info-dark hover:underline"
              >
                <span>Forgot Password?</span>
              </Link>
            </div>
          </div>

          <div className="flex -mx-3">
            <div className="w-full px-3">
              <Button
                type="submit"
                className="bg-info hover:bg-info-dak w-full text-white !leading-7"
              >
                login
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default AuthFormLogin;
