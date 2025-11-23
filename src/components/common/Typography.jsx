const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `${
    level === 1
      ? "text-mobile-h1 md:text-desktop-h1"
      : level === 2
      ? "text-mobile-h2 md:text-desktop-h2"
      : level === 3
      ? "text-mobile-h3 md:text-desktop-h3"
      : level === 4
      ? "text-mobile-h4 md:text-desktop-h4"
      : level === 5
      ? "text-mobile-h5 md:text-desktop-h5"
      : "text-mobile-h6 md:text-desktop-h6"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const Heading = ({ text, highlight }) => (
  <h1 className="text-xl md:text-2xl font-semibold">
    {text} <span className="text-primary-100">{highlight}</span>
  </h1>
);

const ParagraphHeading = ({ text }) => (
  <p className="text-gray-400 mt-2 text-lg">{text}</p>
);

const Paragraph = ({ children, className }) => {
  return (
    <p className={`text-base md:text-xl leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

export { Title, Heading, Paragraph, ParagraphHeading };
