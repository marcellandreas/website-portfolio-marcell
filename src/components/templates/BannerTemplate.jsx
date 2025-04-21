import { contacts_banner } from "../../assets/data";
import img from "../../assets/images/marcell.png";
import "../../assets/style/Banner.css";
import { Title } from "../atoms/Typography";

export const BannerTemplate = () => {
  return (
    <div id="home" className="relative">
      <section className="relative w-full h-auto md:h-screen overflow-hidden flex flex-col bg-gradient-to-br from-primary-400 via-primary-300 to-primary-200">
        {/* Dekorasi & Foto (Desktop) */}

        <div className="hidden md:block absolute h-screen w-full lg:w-[410px] z-10 profile rounded-full overflow-hidden shadow-xl ring-4 ring-primary-100/30">
          <img
            src={img}
            loading="lazy"
            alt="profile"
            className="w-full h-full object-cover animate-fadeInUp"
          />
        </div>

        {/* Konten (Desktop) */}
        <aside className="hidden md:flex text-white z-20 absolute w-full md:w-1/2 h-screen flex-col gap-5 justify-end pb-4 pl-4 animate-fadeInUp">
          <Title level={3} className="text-primary-100">
            Marcell Andreas S. Duha
          </Title>
          <div className="flex flex-col gap-2 md:gap-4">
            <Title level={4} className="text-white">
              Front-End Web Developer
            </Title>
            <p className="text-primary-500 text-md md:text-base lg:text-lg pr-24">
              I am committed to continuously developing my web development
              skills and aspire to apply them with creativity and
              professionalism in the workplace.
            </p>
            <ButtonDownloadResume
              href="/assets/FE-CV-Marcell-ENG.pdf"
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
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-300 flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              >
                <ion-icon size="large" name={data.logo}></ion-icon>
              </a>
            ))}
          </div>
        </aside>

        {/* Trapesium */}
        <div className="absolute top-0 z-10 trapezoid hidden md:block"></div>

        {/* Tampilan Mobile */}
        <div className="md:hidden z-10 relative bg-gradient-to-br from-primary-400 via-primary-300 to-primary-200 px-6 py-12 animate-fadeInUp">
          <div className="relative flex justify-between items-center gap-6">
            {/* Profile Image */}
            <div className="flex rounded-xl shadow-lg bg-primary-700/80 p-2">
              <img
                src={img}
                loading="lazy"
                alt="profile"
                className="w-40 h-40 rounded-xl border-4 border-primary-100 object-cover"
              />
            </div>

            {/* Nama & Role */}
            <div className="text-white">
              <Title level={3} className="text-primary-100">
                Marcell Andreas S. Duha
              </Title>
              <p className="text-primary-500 text-sm">
                Front-End Web Developer
              </p>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="mt-6 text-white text-center">
            <p className="text-primary-500 text-md   md:text-base lg:text-lg ">
              I am committed to continuously developing my web development
              skills and aspire to apply them with creativity and
              professionalism in the workplace.
            </p>
          </div>

          {/* Tombol Download CV */}
          <div className="mt-6 w-full flex justify-center">
            <ButtonDownloadResume
              href="/assets/FE-CV-Marcell-ENG.pdf"
              icon="cloud-download-outline"
            >
              Download CV
            </ButtonDownloadResume>
          </div>

          {/* Sosial Media */}
          <div className="flex justify-center gap-6 mt-6">
            {contacts_banner.map((data, i) => (
              <a
                key={i}
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-300 flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              >
                <ion-icon size="large" name={data.logo}></ion-icon>
              </a>
            ))}
          </div>
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
      rel="noopener noreferrer"
      className="w-1/2 md:w-[200px] h-[52px] px-4 rounded-xl text-md font-bold border-2 border-primary-100 text-white hover:bg-primary-100 hover:text-primary-700 transition-all duration-300 flex justify-center items-center gap-2 md:gap-4"
    >
      <ion-icon name={icon} className="text-lg" />
      <p className="text-sm">{children}</p>
    </a>
  );
};
