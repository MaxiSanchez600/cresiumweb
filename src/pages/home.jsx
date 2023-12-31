/* eslint-disable no-unused-vars */
import { Fragment, useRef, useEffect, useState } from "react";
import hero_img from "../assets/images/hero_img.png";
import s from "../assets/images/s.png";
import novaz from "../assets/images/novaz.png";
import madomer from "../assets/images/MADOMER.png";
import sacerdoti from "../assets/images/sacerdoti.png";
import artifact from "../assets/images/artifact.png";
import indumentaria from "../assets/images/indumentaria.png";
import ctaimg from "../assets/images/cta.png";
import SolutionCard from "../components/solution-card";
import fund from "../assets/images/fund.png";
import doller from "../assets/images/doller.png";
import cash from "../assets/images/cash.png";
import growth from "../assets/images/growth.png";
import manage from "../assets/images/manage.png";
import card from "../assets/images/card.png";
import TextBubble from "../assets/images/TextBubble.png";
import payement from "../assets/images/payement.png";
import lackoftime from "../assets/images/lack_f_time.png";
import financialeducation from "../assets/images/financialeducation.png";
import wrench from "../assets/images/wrench.png";
import eyes from "../assets/images/eyes.png";
import testimonial_1 from "../assets/images/testimonial_1.png";
import testimonial_2 from "../assets/images/testimonial_2.png";
import { useTranslation } from "react-i18next";
import hero_img_mobile from "../assets/images/mobile_top.png";
import avatar from "../assets/images/smallLogo.png";
import {
  Header,
  Footer,
  Input,
  Text,
  Button,
  BrandImage,
  Title,
  TestimonialCard,
} from "../components";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Emailnewsletter from "../components/email-newsletter";
import { useInView } from "react-intersection-observer";
import "intersection-observer";
import MainSolutionCard from "../components/main-solution-cards";

export default function Home() {
  const { t } = useTranslation();

  const scrollerRef1 = useRef(null);
  const scrollerRef2 = useRef(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationCompleted) {
          moveScrollersToCenter();
          setAnimationCompleted(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(scrollerRef2.current);

    return () => {
      observer.disconnect();
    };
  }, [animationCompleted]);

  const moveScrollersToCenter = () => {
    const scroller1 = scrollerRef1.current;
    const scroller2 = scrollerRef2.current;

    if (scroller1 && scroller2) {
      scrollToCenterSmoothly(scroller1, 2.9);
      scrollToCenterSmoothly(scroller2, 5);
    }
  };

  const scrollToCenterSmoothly = (container, width) => {
    const targetPosition = container.scrollWidth / width;
    const duration = 1000; // Ajusta la duración según sea necesario
    const startTime = performance.now();
    const initialScroll = container.scrollLeft;

    const animateScroll = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      container.scrollLeft =
        initialScroll + (targetPosition - initialScroll) * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  return (
    <Fragment>
      <Header />
      <FloatingWhatsApp
        phoneNumber="+5491131945502"
        accountName="Cresium"
        chatMessage="Listos para potenciar tus finanzas!"
        statusMessage="Suele responder al instante"
        placeholder="Escribi tu mensaje..."
        avatar={avatar}
      />
      <main>
        {/* Hero */}
        <img src={hero_img_mobile} alt="" className="sm:hidden block" />
        <div
          id="hero"
          className="grid sm:pb-32 pb-6 2xl:w-[60%]  w-[90%] mx-auto items-end	 grid-cols-12 gap-2"
        >
          <div className="sm:col-span-6 pb-10 col-span-12 sm:order-1 order-2">
            <div className="lg:py-7 py-7">
              <h3
                dangerouslySetInnerHTML={{ __html: t("hero.title1") }}
                className="lg:text-5xl text-3xl animate_fadeInUp font-NeueHaasDisplayBold"
              ></h3>
              <h2
                dangerouslySetInnerHTML={{ __html: t("hero.title2") }}
                className="lg:text-5xl text-3xl animate_fadeInUp font-NeueHaasDisplayBold"
              ></h2>
              <h2
                dangerouslySetInnerHTML={{ __html: t("hero.title3") }}
                className="lg:text-5xl text-3xl animate_fadeInUp font-NeueHaasDisplayBold"
              ></h2>
            </div>
            <div className="sm:block hidden">
              <Text
                width={"80%"}
                align="left"
                size="xl"
                text={t("hero.description")}
              />
            </div>
            <div className="sm:hidden block">
              <Text
                width={"100%"}
                align="left"
                size="base"
                text={t("hero.description")}
              />
            </div>

            <Emailnewsletter title="newsletter.button" />
          </div>
          <div className="sm:col-span-6 sm:block hidden col-span-12 sm:order-2 order-1">
            <img
              src={hero_img}
              alt=""
              className="w-full sm:block hidden hover:scale-100 transition duration-300 cursor-default ease-out hover:ease-in drop-shadow-sm hover:drop-shadow-xl"
            />
            <img
              src={hero_img_mobile}
              alt=""
              className="w-full sm:hidden block hover:scale-100 transition duration-300 cursor-default ease-out hover:ease-in drop-shadow-sm hover:drop-shadow-xl"
            />
          </div>
        </div>
        {/* Brand */}
        <div id="brands" className="bg-[#FAF8F5] py-8">
          <div className=" 2xl:w-[60%]  w-[90%] mx-auto ">
            <Text
              align={"center"}
              color="#797B89"
              text={t("brand.title")}
              size={"base"}
            />
            <div className="grid sm:grid-cols-6 grid-cols-3  sm:py-1  items-center">
              <BrandImage src={s} />
              <BrandImage src={artifact} />
              <BrandImage src={sacerdoti} />
              <BrandImage src={indumentaria} />
              <BrandImage src={novaz} />
              <BrandImage src={madomer} />
            </div>
          </div>
        </div>
        {/* Solutions */}
        <div id="solutions">
          <div className="bg-gradient-to-r from-[#fad7bb] to-[#f8cdbb]">
            <div className="lg:gap-10 gap-5 pb-10 2xl:w-[60%] w-[90%] mx-auto">
              <div ref={scrollerRef1} className="scroll-container">
                <div className="min-w-[1100px]">
                  <MainSolutionCard />
                </div>
              </div>
            </div>

            <div className="lg:gap-10 gap-5  lg:pb-32 pb-10 2xl:w-[60%]  w-[90%] mx-auto">
              <div className=" sm:w-[80%] mx-auto ">
                <Title title={t("soltions.title")} />
              </div>

              <h4 className="sm:text-4xl text-2xl py-4 font-NeueHaasDisplayThin font-[500] text-center">
                {t("soltions.subtitle")}
              </h4>
              <div ref={scrollerRef2} className="scroll-container">
                <div className="sm:min-w-[1000px] min-w-[1800px]">
                  <div className="grid lg:gap-12 md:gap-2 gap-8 sm:grid-cols-3 grid-cols-5 py-5">
                    <SolutionCard
                      imgpositon="middle"
                      title={t("soltions.solution_4.title")}
                      shadow={false}
                      src={growth}
                      bgacive={true}
                      width={"70%"}
                      imgWidth="20"
                      description={t("soltions.solution_4.description")}
                    />
                    <SolutionCard
                      imgpositon="middle"
                      title={t("soltions.solution_5.title")}
                      shadow={false}
                      src={manage}
                      bgacive={true}
                      width={"70%"}
                      imgWidth="20"
                      description={t("soltions.solution_5.description")}
                    />
                    <SolutionCard
                      imgpositon="middle"
                      shadow={false}
                      src={card}
                      bgacive={true}
                      width={"70%"}
                      imgWidth="20"
                      title={t("soltions.solution_6.title")}
                      description={t("soltions.solution_6.description")}
                    />
                    <div className="sm:hidden">
                      <SolutionCard
                        imgpositon="middle"
                        title={t("soltions.solution_7.title")}
                        shadow={false}
                        src={TextBubble}
                        bgacive={true}
                        width={"70%"}
                        description={t("soltions.solution_7.description")}
                      />
                    </div>
                    <div className="sm:hidden">
                      <SolutionCard
                        imgpositon="middle"
                        title={t("soltions.solution_8.title")}
                        shadow={false}
                        bgacive={true}
                        width={"70%"}
                        imgWidth="20"
                        src={payement}
                        description={t("soltions.solution_8.description")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" lg:gap-8 sm:grid hidden  md:gap-2 gap-6 sm:gap-12 lg:py-10 sm:py-4 sm:grid-cols-12 grid-cols-1">
                <div className="sm:col-span-2 "></div>
                <div className="sm:col-span-4  ">
                  <SolutionCard
                    imgpositon="middle"
                    title={t("soltions.solution_7.title")}
                    shadow={false}
                    src={TextBubble}
                    bgacive={true}
                    width={"70%"}
                    imgWidth="20"
                    description={t("soltions.solution_7.description")}
                  />
                </div>
                <div className="sm:col-span-4  ">
                  <SolutionCard
                    imgpositon="middle"
                    title={t("soltions.solution_8.title")}
                    shadow={false}
                    bgacive={true}
                    width={"70%"}
                    imgWidth="20"
                    src={payement}
                    description={t("soltions.solution_8.description")}
                  />
                </div>
                <div className="sm:col-span-2  "></div>
              </div>
            </div>
          </div>
        </div>
        {/* call to action */}
        <div className=" lg:w-[70%] 2xl:w-[60%] w-[90%] py-20 mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
            <div>
              <img src={ctaimg} />
            </div>
            <div className="bg-gradient-to-r from-[#fad7bb] to-[#f8cdbb] rounded-[30px] lg:p-10 p-5 sm:pb-auto pb-24">
              <h2
                dangerouslySetInnerHTML={{ __html: t("cta.title") }}
                className="text-[#1B1C20] lg:text-4xl text-xl animate_fadeInUp sm:w-[90%] font-NeueHaasDisplayRoman text-left py-5"
              />

              <button className="bg-gradient-to-r xl:text-lg sm:text-sm text-[14px] hover:from-[#c5430f] hover:to-[#c5430f] hover:shadow-md hover:scale-105  transition duration-200 ease-out hover:ease-in  from-[#EE7C1F] to-[#E8581F] rounded-[13.27px] sm:px-6 px-4 sm:py-2 py-[0.9rem] text-white font-NeueHaasDisplayBold">
                {t("cta.getstared")}
              </button>
            </div>
          </div>
        </div>
        {/* why necessery */}
        <div className=" xl:w-[50%] sm:w-[80%] gap-4 w-[90%] mx-auto">
          <h4
            dangerouslySetInnerHTML={{ __html: t("whynecessery.title") }}
            className="sm:text-5xl text-4xl py-2 font-NeueHaasDisplayThin text-center"
          >
            {/* <span className="font-NeueHaasDisplayBold">necesario</span> */}
          </h4>

          <div className="grid gap-y-5 md:grid-cols-2 grid-cols-1 lg:py-20 py-10">
            <div>
              <SolutionCard
                title={t("whynecessery.feature_1.title")}
                src={lackoftime}
                imgpositon="top"
                description={t("whynecessery.feature_1.description")}
                width="70%"
              />
            </div>
            <div>
              <SolutionCard
                title={t("whynecessery.feature_2.title")}
                src={financialeducation}
                imgpositon="top"
                description={t("whynecessery.feature_2.description")}
                width="70%"
              />
            </div>
            <div>
              <SolutionCard
                title={t("whynecessery.feature_3.title")}
                src={wrench}
                imgpositon="top"
                description={t("whynecessery.feature_3.description")}
                width="70%"
              />
            </div>
            <div>
              <SolutionCard
                title={t("whynecessery.feature_4.title")}
                src={eyes}
                imgpositon="top"
                description={t("whynecessery.feature_4.description")}
                width="70%"
              />
            </div>
          </div>
        </div>
        {/* testimonials */}
        <div className="bg-gradient-to-b from-[#fad7bb] to-[#fdf1e7] lg:py-24 sm:py-10 pt-10  ">
          <div className=" 2xl:w-[60%] sm:w-[80%] w-[90%] mx-auto">
            <h2 className="text-[#1B1C20] text-4xl  animate_fadeInUp sm:w-[90%] mx-auto font-NeueHaasDisplayBold text-center">
              {t("testimonios.title")}
            </h2>
            <Text align="center" text={t("testimonios.subtitle")} />
            <div className="grid gap-10 sm:grid-cols-2 grid-cols-1 lg:py-20 py-10">
              <TestimonialCard
                title={t("testimonios.testimonials_1.name")}
                position={t("testimonios.testimonials_1.position")}
                src={testimonial_1}
                description={t("testimonios.testimonials_1.description")}
              />
              <TestimonialCard
                title={t("testimonios.testimonials_2.name")}
                position={t("testimonios.testimonials_2.position")}
                src={testimonial_2}
                description={t("testimonios.testimonials_2.description")}
              />
            </div>
          </div>
          <div className="sm:w-[80%] w-[90%] mx-auto py-10">
            <h4 className="sm:text-[48px]   text-4xl py-3  text-center">
              {t("starttoday.title")}
            </h4>
            <h4 className="sm:text-[34px]  text-2xl py-2 NeueHaasDisplayThin  text-center">
              {t("starttoday.subtitle")}
            </h4>
            <div className="sm:block hidden">
              <Text
                align="center"
                width={"40%"}
                mx="auto"
                text={t("starttoday.description")}
              />
            </div>
            <div className="sm:hidden block">
              <Text
                align="center"
                width={"90%"}
                mx="auto"
                text={t("starttoday.description")}
              />
            </div>
            <div className="sm:w-[40%] py-10 mx-auto">
              <Emailnewsletter title="newsletter.button2" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
