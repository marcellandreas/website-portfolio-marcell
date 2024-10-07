import { Paragraph } from "../atoms/Typography";

export const SectionContent = ({ children }) => {
  return (
    <Paragraph
      className="w-full md:w-3/4 lg:w-2/3 text-justify md:text-center transition-transform duration-500 ease-in-out hover:-translate-y-1 first-letter:text-4xl first-letter:font-bold first-letter:pl-4"
      data-aos="fade-up"
    >
      {children}
    </Paragraph>
  );
};
