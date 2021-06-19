import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useQuery } from "@apollo/client";

import Select from "../UI/Select";
import InputSearch from "../UI/Input/Search";
import { LIST_CATEGORIES } from "../../graphql/queries";
import Button from "../UI/Button";

const initialValues = {
  search: "",
  category: "all",
};

function ProductSearch({ handleFilter }) {
  const [categories, setCategories] = useState([]);
  const { data, loading, refetch } = useQuery(LIST_CATEGORIES);

  useEffect(() => {
    refetch();

    if (data && data.listCategories && !loading) {
      setCategories(["all", ...data.listCategories]);
    }
  }, [data, loading, refetch]);

  const handleSubmit = (values) => {
    handleFilter({ ...values });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex md:items-center flex-col md:flex-row py-3 lg:space-x-4 md:space-x-2 space-y-2 md:space-y-0 z-50">
          <Field
            name="search"
            component={InputSearch}
            placeholder="Search..."
          />

          {/* Category */}
          <div className="flex items-center space-x-4 md:space-x-2">
            <div className="w-72 z-50">
              <Field name="category" component={Select} items={categories} />
            </div>

            <Button
              tupe="submit"
              className="relative mt-1 !leading-7 bg-info text-white hover:bg-info-dark"
            >
              Search
            </Button>
          </div>

          {/*<input type="submit" value="" className="hidden" />*/}
        </Form>
      </Formik>
    </div>
  );
}

export default ProductSearch;
