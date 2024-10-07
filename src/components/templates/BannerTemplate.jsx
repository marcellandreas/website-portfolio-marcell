import { contacts_banner } from "../../assets/data";
import img from "../../assets/images/marcell.png";
import "../../assets/style/Banner.css";
import { Title } from "../atoms/Typography";

export const BannerTemplate = () => {
  return (
    <div id="home" className="relative">
      <section className="relative bg-primary-300 w-full h-auto md:h-screen overflow-hidden flex flex-col gap-2">
        {/* Trapesium dan Profile untuk Desktop */}
        <div className="hidden md:block w-[420px] h-[420px] md:w-[480px] md:h-[480px] absolute rounded-full border-8 shadow-sm border-primary-100 circle animate-pulse" />
        <div className="hidden md:block absolute h-screen w-full lg:w-[410px] z-10 profile">
          <img
            src={img}
            loading="lazy"
            alt="profile"
            className="w-full h-full"
          />
        </div>

        {/* Teks untuk Desktop */}
        <aside className="hidden md:flex text-white z-20 absolute w-full md:w-1/2 h-screen flex-col gap-5 justify-end pb-4 pl-4">
          <Title level={3} className="text-primary-100">
            Marcell Andreas S. Duha
          </Title>
          <div className="flex flex-col gap-2 md:gap-4">
            <Title level={4}>Software Developer</Title>
            <p className="text-primary-500 text-md md:text-base lg:text-lg pr-24">
              Software developer focused on building impactful applications.
            </p>
            <ButtonDownloadResume
              href="/assets/resume-marcell-andreas-samadhani-duha.pdf"
              icon="cloud-download-outline"
            >
              Download CV
            </ButtonDownloadResume>
          </div>
          <div className="hidden md:flex gap-4 mt-5">
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

        <div className="absolute top-0 z-10 trapezoid hidden md:block"></div>

        {/* Untuk Mobile: Tampilan Sederhana */}
        <div className="md:hidden z-10 relative bg-[#202020] h-auto px-6 pb-[5vh] pt-[15vh]">
          {/* Bagian profil dengan foto dan informasi dasar */}
          <div className="flex justify-between items-center gap-5">
            <div className="flex rounded-xl">
              <img
                src={img}
                loading="lazy"
                alt="profile"
                className="w-40 h-40 rounded-xl border-4 border-primary-100"
              />
            </div>
            <div>
              <Title level={4} className="text-primary-100">
                Marcell Andreas
              </Title>
              <p className="text-primary-500 text-sm">Software Developer</p>
            </div>
          </div>

          {/* Bagian deskripsi dan tombol download CV */}
          <aside className="text-white mt-6 flex flex-col gap-4 justify-center items-center">
            <p className="text-primary-500 text-sm text-center">
              Focused on building impactful applications with innovative
              technology.
            </p>

            {/* Tombol Download CV dan ikon kontak */}
            <div className="flex flex-col gap-4 w-full items-center">
              <ButtonDownloadResume
                href="/assets/resume-marcell-andreas-samadhani-duha.pdf"
                icon="cloud-download-outline"
              >
                Download CV
              </ButtonDownloadResume>

              {/* Ikon media sosial */}
              <div className="flex gap-4">
                {contacts_banner.map((data, i) => (
                  <a
                    key={i}
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-300 flex justify-center items-center rounded-full transition-transform hover:scale-110 hover:shadow-lg"
                  >
                    <ion-icon size="large" name={data.logo}></ion-icon>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

const ButtonDownloadResume = ({ href, icon, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-1/2 md:w-[200px] rounded-xl text-md font-bold h-[52px] border-2 border-primary-100 flex justify-center items-center gap-4"
    >
      <button className="flex justify-center items-center gap-2 md:gap-4">
        <ion-icon name={icon} className="icon" />
        <p className="text-sm">{children}</p>
      </button>
    </a>
  );
};
