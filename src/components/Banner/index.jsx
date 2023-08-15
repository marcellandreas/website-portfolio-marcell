const Banner = () => {
  //   const handleDownload = () => {
  //     const link = document.createElement("a");
  //     link.href = "../assets/CV_Marcell.pdf";
  //     link.download = "cv_marcell.pdf";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };
  const contacts = [
    {
      logo: "logo-github",
      link: "https://github.com/marcellandreas",
    },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/marcell-andreas-samadhani-duha/",
    },
  ];
  return (
    <section className=" h-screen min-w-full bg-primary-300 relative">
      <div className="w-[480px] h-[480px] rounded-full border-8 shadow-sm border-primary-100 absolute circle" />
      <aside className="text-white relative z-50 flex flex-col px-4 md:pl-16 justify-center h-screen w-full  md:w-[540px] gap-3 ">
        <h1 className="text-primary-100 text-2xl md:text-3xl lg:text-4xl  ">
          Marcell Andreas S. Duha
        </h1>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Front-end Developer
          </h1>
          <p className="text-primary-500 text-md md:text-base lg:text-lg">
            Front-end developer focused on creating Web. I really like different
            projects that solve real problems.
          </p>
          <div className="mt-5 flex gap-10">
            <button className="w-1/2 md:w-[200px] rounded-xl text-md font-bold h-[52px] border-2 border-primary-100 ">
              <a
                href="/assets/CV_Marcell.pdf"
                target="_blank"
                className="flex justify-center items-center gap-4"
              >
                <ion-icon
                  name="cloud-download-outline"
                  className="icon"
                ></ion-icon>
                Download CV
              </a>
            </button>

            <button className="w-1/2 md:w-[200px] rounded-xl text-md font-bold text-primary-200 h-[52px] bg-primary-100 flex justify-center items-center gap-4">
              <a
                href="/assets/CV_Marcell.pdf"
                target="_blank"
                className="flex justify-center items-center gap-4"
              >
                <ion-icon
                  name="arrow-down-circle-outline"
                  className="icon"
                ></ion-icon>
                Portfolio
              </a>
            </button>
          </div>
        </div>
        {/* icons */}
        <div className="w-full flex gap-4 mt-5">
          {contacts.map((data, i) => {
            return (
              <a
                key={i}
                href={data.link}
                target="_blank"
                className="w-12 h-12 bg-primary-300 flex justify-center items-center rounded-full"
              >
                <ion-icon size="large" name={data.logo}></ion-icon>
              </a>
            );
          })}
        </div>
      </aside>
      <div className="a  absolute top-0 h-screen w-[60%] trapezoid"></div>
    </section>
  );
};

export default Banner;
