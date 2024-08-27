import { contacts_banner } from "../../assets/data";
import img from "../../assets/images/marcell.png";

const Banner = () => {
  return (
    <section className="h-screen w-full bg-primary-300 relative overflow-hidden border-b-2">
      <div className="w-[420px] h-[420px] md:w-[480px] md:h-[480px] absolute rounded-full border-8 shadow-sm border-primary-100 circle animate-pulse hover:transition-opacity" />
      <aside className="text-white  relative z-20 flex flex-col  justify-end pb-5 pl-4 pr-6  lg:pl-10 lg:pb-7 animate-pulse  h-screen w-full md:w-[540px] gap-3 ">
        <h1 className="text-primary-100 text-2xl md:text-3xl lg:text-4xl">
          Marcell Andreas S. Duha
        </h1>
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            Front-end Developer
          </h1>
          <p className="text-primary-500 text-md md:text-base lg:text-lg">
            Front-end developer focused on creating Web. I really like different
            projects that solve real problems.
          </p>
          <div className="mt-0 md:mt-5 flex gap-10">
            <a
              href="/assets/resume-marcell-andreas-samadhani-duha.pdf"
              target="_blank"
              className="w-1/2 md:w-[200px] rounded-xl text-md font-bold h-[52px] border-2 border-primary-100 flex justify-center items-center gap-4"
            >
              <button className="flex justify-center items-center gap-2 md:gap-4">
                <ion-icon name="cloud-download-outline" className="icon" />
                <p className="  text-sm">Download CV</p>
              </button>
            </a>

            {/* <a
              href="/assets/portfolio.pdf"
              target="_blank"
              className="w-1/2 md:w-[200px] rounded-xl text-md font-bold text-primary-200 h-[52px] bg-primary-100 flex justify-center items-center gap-4"
            >
              <button className="flex justify-center items-center gap-2 md:gap-4">
                <ion-icon
                  name="arrow-down-circle-outline"
                  className="icon"
                ></ion-icon>
                <p className="  text-sm">Portfolio</p>
              </button>
            </a> */}
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          {contacts_banner.map((data, i) => (
            <a
              key={i}
              href={data.link}
              target="_blank"
              className="w-12 h-12 bg-primary-300 flex justify-center items-center rounded-full"
            >
              <ion-icon size="large" name={data.logo}></ion-icon>
            </a>
          ))}
        </div>
      </aside>
      <div className="block absolute h-screen top-0 left-20 w-full lg:w-[410px]  z-10 profile ">
        <img src={img} alt="profile" className="" />
      </div>
      <div className=" absolute top-0 z-10 h-screen w-[60%] trapezoid"></div>
    </section>
  );
};

export default Banner;
