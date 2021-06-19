import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import InputField from "../../UI/Input/Field";
import Button from "../../UI/Button";

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password Is A Required Field").min(8),
  newPassword: Yup.string().required("New Password Is A Required Field").min(8),
  confirmPassword: Yup.string()
    .required("Confirm Password Is A Required Field")
    .oneOf([Yup.ref("newPassword"), null], "Password doesn't match"),
});

const handleSubmit = (values) => {
  console.log(values);
};

function ProfileFormPassword() {
  return (
    <div className="py-3">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="mb-10 mt-10 lg:px-8">
            <h1 className="font-bold text-lg text-dark capitalize">
              password changes
            </h1>
          </div>

          <div className="lg:px-8">
            {/* Old Password */}
            <Field
              component={InputField}
              label="Old Password"
              type="password"
              placeholder="********"
              name="oldPassword"
              logo={
                <svg className="w-5 h-5 text-dark-light" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                  />
                </svg>
              }
            />

            {/* New Password */}
            <Field
              component={InputField}
              label="New Password"
              type="password"
              placeholder="********"
              name="newPassword"
              logo={
                <svg className="w-5 h-5 text-dark-light" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                  />
                </svg>
              }
            />

            {/* Confirm Password */}
            <Field
              component={InputField}
              label="confirmPassword"
              type="password"
              placeholder="********"
              name="confirmPassword"
              logo={
                <svg className="w-5 h-5 text-dark-light" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                  />
                </svg>
              }
            />

            {/* Save Password */}
            <div className="w-full mb-5 mt-2">
              <Button
                type="submit"
                className="!flex bg-info hover:bg-info-dark text-white ml-auto"
              >
                save password
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ProfileFormPassword;
