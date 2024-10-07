import { ContactInfo } from "../organisms/ContactInfo";
import { ContactForm } from "../molecules/ContactForm";
import { SectionTitle } from "../molecules/SectionTitle";

export const ContactTemplate = () => {
  return (
    <section
      id="contacts"
      className="py-20 px-4 md:px-8 lg:px-16 text-white bg-primary-700 flex flex-col items-center gap-8"
    >
      <SectionTitle
        headingText="Contact"
        highlightText="Me"
        paragraphText="Get in Touch"
      />

      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col md:flex-row bg-primary-200 rounded-lg shadow-lg overflow-hidden">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
