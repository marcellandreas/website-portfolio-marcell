import { SectionTitle } from "../molecules/SectionTitle";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const ContactTemplate = () => {
  return (
    <section
      id="contacts"
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white flex flex-col items-center"
    >
      <SectionTitle
        headingText="Let's"
        highlightText="Connect"
        paragraphText="Reach out to collaborate, discuss opportunities, or just say hi!"
      />

      <div className="mt-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card */}
        {[
          {
            icon: <FaWhatsapp className="w-6 h-6" />,
            title: "WhatsApp",
            text: "+62 821-4184-0186",
            href: "https://wa.me/6282141840186",
            bg: "from-green-500 to-green-600",
          },
          {
            icon: <FaLinkedin className="w-6 h-6" />,
            title: "LinkedIn",
            text: "linkedin.com/in/marcell-andreas",
            href: "https://linkedin.com/in/marcell-andreas",
            bg: "from-blue-500 to-blue-600",
          },
          {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "Email",
            text: "marcellandreas.123@gmail.com",
            href: "mailto:marcellandreas.123@gmail.com",
            bg: "from-red-500 to-red-600",
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group p-6 flex flex-col items-center text-center rounded-3xl bg-gradient-to-br ${item.bg} shadow-2xl transition-all duration-300 ease-in-out transform hover:rotate-[-1.5deg] hover:scale-105 skew-y-[-2deg]`}
            style={{
              clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
            }}
          >
            <div className="bg-white text-black rounded-full p-4 mb-4 shadow-md group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-1 tracking-wide">
              {item.title}
            </h3>
            <p className="text-sm opacity-80 break-words">{item.text}</p>
            <div className="absolute bottom-[-12px] h-4 w-4 bg-white rotate-45 group-hover:scale-110 transition-all duration-300 shadow-sm" />
          </a>
        ))}
      </div>
    </section>
  );
};
