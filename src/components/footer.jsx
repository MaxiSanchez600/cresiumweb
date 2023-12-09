/* eslint-disable react/prop-types */
import email from "../assets/images/email.png";
import location_on from "../assets/images/location_on.png";
import call from "../assets/images/call.png";
import Instagram from "../assets/images/Instagram.png";
import linkedin from "../assets/images/linkenin.png";
import twiter from "../assets/images/twitter.png";
import Newsletter from "./newsletter";
import { useTranslation } from "react-i18next";

function Infoitem({ title, src, link }) {
  return (
    <a
      href={link}
      target="blank"
      className="flex gap-3 hover:scale-105 transition duration-200  ease-out hover:ease-indrop-shadow-sm leading-10 items-center text-[#77808B] text-sm"
    >
      <img src={src} className="w-6	" />
      {title}
    </a>
  );
}

function SocialLink({ src, link }) {
  return (
    <a
      href={link}
      className="flex gap-3 hover:scale-105 transition duration-200  ease-out hover:ease-indrop-shadow-sm leading-10 items-center text-[#77808B] text-sm	"
    >
      <img src={src} className="w-10	" />
    </a>
  );
}

function Social() {
  return (
    <ul className="flex space-x-6">
      <SocialLink src={Instagram} link="#" />
      <SocialLink src={twiter} link="#" />
      <SocialLink src={linkedin} link="#" />
    </ul>
  );
}

export default function Footer() {
  const {t } = useTranslation();

  return (
    <footer className="2xl:w-[60%] w-[90%] sm:py-20 py-4 mx-auto bg-white">
      <div className="grid gap-y-8  lg:grid-cols-4 sm:grid-cols-3 grid-cols-1">
        <div className="mt-12">
          <p className="text-[#77808B]  sm:w-[60%] font-NeueHaasDisplayThin">
            {t('sitemap.about')}
            
          </p>
        </div>
        <div>
          <h4 className="text-[#EF7C21] font-bold sm:mb-4 ">{t('sitemap.getintouch')}</h4>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <Infoitem
              title="Buenos Aires, Argentina"
              src={location_on}
              link="https://maps.app.goo.gl/iYBd131trgz78aL29"
            />
            <Infoitem
              title="cresium.fintech@gmail.com"
              src={email}
              link="mailto:cresium.fintech@gmail.com"
            />
            <Infoitem
              title="+54 9 11 6191-0692"
              src={call}
              link="tel:+549116191-0692"
            />
          </ul>
        </div>
        <div>
          <Social />
        </div>
        <div>
          <h4 className="text-[#EF7C21] font-bold sm:mb-4 ">
            {t('sitemap.news')}
          </h4>
          <Newsletter />
        </div>
      </div>
      <p className="text-[#283646] lg:mt-auto lg:mb-auto mt-10 mb-3 sm:text-left text-center text-[14px]  font-[400]">
        Copyright Cresium Fintech
      </p>
    </footer>
  );
}
