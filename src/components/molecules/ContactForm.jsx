import { validateContactForm } from "../../utils/validation";
import { useForm } from "../../hooks/UseForm";
import { InputField, TextAreaField } from "../atoms/Form";

export const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const { formData, handleChange, isButtonDisabled } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateContactForm(formData);
    if (isValid) {
      alert("Feature not implemented yet.");
    }
  };

  return (
    <article className="flex-1 p-8">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          <InputField
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            label="Your Name"
            required
          />
          <InputField
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            label="Your Email"
            type="email"
            required
          />
        </div>
        <InputField
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Your Subject"
          label="Your Subject"
          required
        />
        <TextAreaField
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          label="Your Message"
          required
        />
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`bg-primary-100 text-primary-200 rounded-xl h-12 w-full md:w-auto text-xl font-semibold flex justify-center items-center gap-2 ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ion-icon name="chatbox-ellipses-outline"></ion-icon>
          Send
        </button>
      </form>
    </article>
  );
};
