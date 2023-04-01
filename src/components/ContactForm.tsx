import Button from "./Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col items-end">
      <div className="flex w-full flex-col">
        <label htmlFor="name">name</label>
        <input type="text" id="name" />
      </div>
      <div className="flex w-full flex-col">
        <label htmlFor="email">email</label>
        <input type="email" id="email" />
      </div>
      <div className="flex w-full flex-col">
        <label htmlFor="message">message</label>
        <textarea id="message" cols={30} rows={10} />
      </div>
      <Button text="send message" />
    </form>
  );
};

export default ContactForm;
