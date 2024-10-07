import { DividerAtom } from "../atoms/DividerAtom";
import { Heading, ParagraphHeading } from "../atoms/Typography";

export const SectionTitle = ({ headingText, highlightText, paragraphText }) => {
  return (
    <div className="text-center flex flex-col items-center gap-1 relative z-10">
      <Heading text={headingText} highlight={highlightText} />
      <ParagraphHeading text={paragraphText} />
      <DividerAtom />
    </div>
  );
};
