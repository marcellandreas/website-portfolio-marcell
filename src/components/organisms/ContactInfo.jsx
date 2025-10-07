import { contactData } from "../../assets/data/ContactData.mock";

export const ContactInfo = () => {
  return (
    <aside className="flex-1 bg-primary-600 text-white flex flex-col gap-6 pl-4 py-4 md:p-12">
      <div className="flex items-center gap-4">
        <h2 className="font-semibold text-3xl md:text-4xl">Contact Info</h2>
        <div className="flex-grow border-t border-white h-1" />
      </div>
      {contactData.map((info, index) => (
        <div key={index} className="flex items-center gap-4 text-lg md:text-xl">
          <ion-icon name={info.logo} className="text-2xl" />
          <span>{info.text}</span>
        </div>
      ))}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex-grow border-t border-white h-1" />
      </div>
    </aside>
  );
};
