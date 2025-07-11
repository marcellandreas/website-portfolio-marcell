import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { BannerTemplate } from "../routers/index";

export const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="bg-primary-200 text-white flex flex-col gap-2">
      <BannerTemplate />
    </section>
  );
};
