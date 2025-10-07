import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const contactData = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    title: "Github",
    text: "marcellandreas",
    href: "https://github.com/marcellandreas",
    bg: "hover:bg-primary-100/10 border-primary-100",
  },
  {
    icon: <FaWhatsapp className="w-5 h-5" />,
    title: "WhatsApp",
    text: "+62 821-4184-0186",
    href: "https://wa.me/6282141840186",
    bg: "hover:bg-primary-100/10 border-primary-100",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    title: "LinkedIn",
    text: "linkedin.com/in/marcell-andreas",
    href: "https://linkedin.com/in/marcell-andreas",
    bg: "hover:bg-primary-100/10 border-primary-100",
  },
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    title: "Email",
    text: "marcellandreas.123@gmail.com",
    href: "mailto:marcellandreas.123@gmail.com",
    bg: "hover:bg-primary-100/10 border-primary-100",
  },
];
