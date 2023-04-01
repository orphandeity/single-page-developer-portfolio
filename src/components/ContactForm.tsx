import Button from "./Button";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

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
          .email("Invalid email address")
          .required("Please provide your email address"),
        message: Yup.string().min(15, "Must be at least 15 characters"),
      })}
      onSubmit={(values) => {
        console.table(values);
      }}
    >
      <Form className="flex flex-col items-end">
        <div className="flex w-full flex-col border-b border-b-white px-6 py-4">
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className="border-none bg-transparent placeholder:uppercase placeholder:text-_gray"
          />
          <ErrorMessage name="name" />
        </div>
        <div className="flex w-full flex-col border-b border-b-white px-6 py-4">
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="border-none bg-transparent placeholder:uppercase placeholder:text-_gray"
          />
          <ErrorMessage name="email" />
        </div>
        <div className="flex w-full flex-col border-b border-b-white px-6 py-4">
          <Field
            name="message"
            id="message"
            as="textarea"
            placeholder="message"
            className="border-none bg-transparent placeholder:uppercase placeholder:text-_gray"
          />
          <ErrorMessage name="message" />
        </div>
        <Button type="submit" text="send message" />
      </Form>
    </Formik>
  );
};

export default ContactForm;
