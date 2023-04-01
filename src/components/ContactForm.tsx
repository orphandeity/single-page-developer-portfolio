import { Formik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import clsx from "clsx";
import { AlertCircle } from "lucide-react";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(25, "Must be 25 characters or less")
          .required("Please provide your name"),
        email: Yup.string()
          .email("Sorry, invalid format here")
          .required("Please provide your email address"),
        message: Yup.string()
          .min(15, "Must be at least 15 characters")
          .max(255, "Must be less than 255 characters")
          .required("Please provide a short message"),
      })}
      onSubmit={(values) => {
        console.table(values);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="flex h-[327px] w-[445px] flex-col items-end justify-between"
        >
          <div className="flex w-full flex-col">
            <div className="flex items-center">
              <input
                type="text"
                id="name"
                placeholder="name"
                {...formik.getFieldProps("name")}
                className="flex-1 border-none bg-transparent uppercase placeholder:uppercase placeholder:text-_gray"
              />
              {formik.touched.name && formik.errors.name ? (
                <AlertCircle className="text-_error" />
              ) : null}
            </div>
            <hr
              className={clsx([
                formik.touched.name && formik.errors.name && "border-_error",
                formik.touched.name && !formik.errors.name && "border-_green",
              ])}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="pt-1 text-right text-xs text-_error">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-col">
            <div className="flex items-center">
              <input
                type="email"
                id="email"
                placeholder="email"
                {...formik.getFieldProps("email")}
                className="flex-1 border-none bg-transparent uppercase placeholder:uppercase placeholder:text-_gray"
              />
              {formik.touched.email && formik.errors.email ? (
                <AlertCircle className="text-_error" />
              ) : null}
            </div>
            <hr
              className={clsx([
                formik.touched.email && formik.errors.email && "border-_error",
                formik.touched.email && !formik.errors.email && "border-green",
              ])}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="pt-1 text-right text-xs text-_error">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-col">
            <div className="flex items-center">
              <textarea
                id="message"
                placeholder="message"
                {...formik.getFieldProps("message")}
                className="flex-1 border-none bg-transparent uppercase placeholder:uppercase placeholder:text-_gray"
              />
              {formik.touched.message && formik.errors.message ? (
                <AlertCircle className="text-_error" />
              ) : null}
            </div>
            <hr
              className={clsx([
                formik.touched.message &&
                  formik.errors.message &&
                  "border-_error",
                formik.touched.message &&
                  !formik.errors.message &&
                  "border-_green",
              ])}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="pt-1 text-right text-xs text-_error">
                {formik.errors.message}
              </div>
            ) : null}
          </div>
          <Button type="submit" text="send message" />
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
