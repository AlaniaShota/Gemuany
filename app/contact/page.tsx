"use client";

import imageContactPage from "@/public/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r (1) 1 (1).png";
import { visibleExit } from "../animation";
import Banner from "../component/banner/Banner";
import { contactDescription, contactTitle } from "../component/constanta";
import ContactBanner from "./component/ContactBanner";
import OrderBanner from "./component/OrderBanner";

export default function Contact() {
  const styleContactTitle = "text-whiteSecond text-5xl font-bold";
  const styleContactAbout = "text-whiteSecond text-2xl font-light opacity-45";
  const srcAbout = '/about'

  return (
    <>
      <Banner
        animation={visibleExit}
        img={imageContactPage}
        title={contactTitle}
        description={contactDescription}
        styleTextTitle={styleContactTitle}
        styleTextAbout={styleContactAbout}
      />
      <ContactBanner />
      <OrderBanner src={srcAbout}/>
    </>
  );
}
