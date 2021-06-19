import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CREATE_PRODUCT } from "../../../graphql/mutations";
import Button from "../../UI/Button";
import Alert from "../../UI/Alert";
import ProductForm from "./Form";

const initialValues = {
  name: "",
  description: "",
  category: "",
  quantity: "",
  price: "",
  image: {},
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(10).required(),
  description: Yup.string().min(25).required(),
  category: Yup.string().required().min(3),
  quantity: Yup.number().required().min(0),
  price: Yup.number().required(),
  image: Yup.mixed(),
});

function ProductFormCreate() {
  const { shopId } = useParams();
  const [alert, setAlert] = useState({ message: "", variant: "" });
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const handleSubmit = async (values, errors) => {
    try {
      if (!values.image?.type) {
        delete values.image;
      }

      const { data } = await createProduct({
        variables: { shopId: shopId, ...values },
      });

      if (data) {
        errors.resetForm();
        setAlert({
          message: "Product Created successfully!",
          variant: "success",
        });
      }
    } catch (err) {
      if (err.graphQLErrors[0]) {
        const { graphQLErrors } = err;
        const { extensions, message } = graphQLErrors[0];

        setAlert({ message: message, variant: "danger" });

        console.log({ ...err });

        if (extensions) {
          const { error: validationError } = extensions;
          validationError && errors.setErrors(validationError);
        }
      }
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="text-center mb-10">
            <h1 className="font-bold text-lg text-dark capitalize">
              Create Product
            </h1>
          </div>

          {alert.message && (
            <Alert
              message={alert.message}
              variant={alert.variant}
              closeAlert={() => setAlert({})}
            />
          )}

          <div className="mt-2">
            {/* Save Changes && Cacel */}
            <ProductForm />

            <div className="flex items-center w-full pt-3">
              <Button
                type="submit"
                className="!flex bg-info hover:bg-info-dark text-white"
              >
                Create
              </Button>
              <Link to={`/seller/shop/${shopId}/edit`} className="ml-auto">
                <Button
                  type="button"
                  className="!flex border-2 border-info hover:bg-info-light text-info"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ProductFormCreate;
