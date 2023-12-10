/* eslint-disable no-undef */
import i18n from "i18next";

import { initReactI18next } from "react-i18next";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            start: "Start",
            solution: "Solution",
            us: "Us",
            start_now: "Start Now",
          },
          hero: {
            title:
              " <span style='color:#ef7c21'>Simplified finances </span> Maximized growth Everything in one place",
            description:
              "Start managing your company's finances like you've never managed them before.",
          },
          newsletter: {
            input: "Email",
            button: "Get started now - free of charge",
          },
          brand: {
            title: "Companies that trust us",
          },
          soltions: {
            title: "Cash flow management is the biggest challenge for SMEs.",
            subtitle: "We want to avoid it.",
            solution_1: {
              title: "Financing",
              description:
                "We offer financing solutions adapted to the needs of your company.",
            },
            solution_2: {
              title: "Funds flow management",
              description:
                "Intuitive tools for effective cash flow management, helping SMEs improve their financial performance.",
            },
            solution_3: {
              title: "Cash growth",
              description:
                "Short-term investment opportunities with immediate liquidity to maximize the growth of your capital.",
            },
            solution_4: {
              title: "<span style='color:#ef7c21'>Sustainable</span> Growth",
              description:
                "Take advantage of financing and investment solutions to boost the growth of your company",
            },
            solution_5: {
              title:
                "<span style='color:#ef7c21'>Simplified</span> Financial Management",
              description:
                "Access an easy-to-use platform that streamlines financial management",
            },
            solution_6: {
              title: "Greater <span style='color:#ef7c21'>Visibility</span>",
              description:
                "Get a clear view of your finances to make quality and impact decisions ",
            },
            solution_7: {
              title: "<span style='color:#ef7c21'>Continuous</span> support",
              description:
                "I received advice and financial support to ensure effective management. ",
            },
            solution_8: {
              title: "All in one <span style='color:#ef7c21'>place</span>",
              description:
                "Manage all your financial needs on a single platform.",
            },
          },
          cta: {
            title: "Take care of your business, we take care of your finances.",
            getstared: "Start Now",
          },
          whynecessery: {
            title:
              "Why Cresium is <span style='font-weight: 900'>necessary</span>",
            feature_1: {
              title: "Lack of <span style='color:#ef7c21'>time</span>",
              description:
                "SMEs are focused on business operations, leaving aside financial management",
            },
            feature_2: {
              title: "Financial <span style='color:#ef7c21'>education</span>",
              description:
                "Focus on your business, which is what you know how to do. We know how to manage finances.",
            },
            feature_3: {
              title:
                "<span style='color:#ef7c21'>Distrust</span> in investment instruments",
              description:
                "Investment instruments can be used for the benefit of the SME",
            },
            feature_4: {
              title:
                "<span style='color:#ef7c21'>Visibility</span> of financial resources ",
              description:
                "Limited visibility into resources leads to inefficient cash flow.",
            },
          },
          testimonios: {
            title: "Testimonials",
            subtitle:
              "We constantly listen to our clients. CRESIUM is born from your needs.",
            testimonials_1: {
              description:
                "“With Cresium we centralize all our money and we know exactly how much we have. This saves us a lot of time.",
              name: "Karen Krebs - COO",
              position: "RYA Indumentaria",
            },
            testimonials_2: {
              description:
                "““Before using Cresium we lost money every day and we didn't know it. Cresium protects the value of our money from the moment it enters until it leaves.”",
              name: "Sebastian Rimmele - CEO ",
              position: "Dignos",
            },
          },
          starttoday: {
            title: "You can start today!",
            subtitle: "Simple, agile and free of charge.",
            description:
              "Leave us your email and we will contact you as soon as possible.",
          },
          sitemap: {
            about:
              "Cresium is a Fintech that drives the growth of SMEs in Latin America",
            getintouch: "Get In Touch!",
            news: "Do you want to receive news?",
            already: "Already you mail!",
          },
          misc: {
            "know-more": "Know more",
            "see-more": "See more",
            "start-now": "Start now",
          },
        },
      },
      es: {
        translation: {
          nav: {
            start: "Inicio",
            solution: "Solución",
            us: "Nosotros",
            start_now: "Empezá ahora",
          },
          hero: {
            title:
              "Finanzas <span style='color:#ef7c21'>simplificadas\n Crecimiento</span> maximizado\n Todo en un solo lugar",
            description:
              "Comenzá a gestionar las finanzas de tu empresa como nunca las gestionaste antes.",
          },
          newsletter: {
            input: "Email",
            button: "Empezá ahora - sin costo",
          },
          brand: {
            title: "Empresas que confían en nosotros",
          },
          soltions: {
            title:
              "La gestión del flujo de efectivo es el mayor desafío de las PYMES.",
            subtitle: "Nosotros queremos evitarlo.",
            solution_1: {
              title: "Financiamiento",
              description:
                "Ofrecemos soluciones de financiamiento adaptadas a las necesidades de tu empresa.",
            },
            solution_2: {
              title: "Manejo del flujo de fondos",
              description:
                "Herramientas intuitivas para una gestión eficaz del flujo de fondos, ayudando a las PYMES a mejorar su rendimiento financiero.",
            },
            solution_3: {
              title: "Crecimiento de caja",
              description:
                "Oportunidades de inversión a corto plazo y con liquidez inmediata para maximizar el crecimiento de tu capital.",
            },
            solution_4: {
              title:
                "<span style='color:#ef7c21'>Crecimiento</span> Sostenible",
              description:
                "Aprovechá las soluciones de financiamiento e inversión para impulsar el crecimiento de tu empresa",
            },
            solution_5: {
              title:
                "<span style='color:#ef7c21'>Gestion</span> Financiera <br> simplificada",
              description:
                "Accedé a una plataforma fácil de usar que agiliza la gestión financiera",
            },
            solution_6: {
              title: "Mayor <span style='color:#ef7c21'>Visibilidad</span>",
              description:
                "Obtené una vista clara de tus finanzas para tomar decisiones de calidad e impacto ",
            },
            solution_7: {
              title: "<span style='color:#ef7c21'>Soporte</span> Continuo",
              description:
                "Recibí asesoramiento y soporte financiero para garantizar una gestión eficaz. ",
            },
            solution_8: {
              title: "Todo en un <span style='color:#ef7c21'>solo lugar</span>",
              description:
                "Administrá todas tus necesidades financieras en una sola plataforma.",
            },
          },
          cta: {
            title:
              "Ocúpate de tu negocio, nosotros nos ocupamos de tus <span style='font-weight: 900'>finanzas</span>",
            getstared: "Empezá ahora",
          },
          whynecessery: {
            title:
              "Por qué Cresium es <span style='font-weight: 900'>necesario</span>",
            feature_1: {
              title: "Falta de <span style='color:#ef7c21'>tiempo</span>",
              description:
                "Las PYMES están enfocadas en la operatoria del negocio, dejando de lado la gestión financiera",
            },
            feature_2: {
              title: "<span style='color:#ef7c21'>Educación</span> financiera",
              description:
                "Concentrate en tu negocio que es lo que sabes hacer. Nosotros sabemos gestionar las finanzas.",
            },
            feature_3: {
              title:
                "<span style='color:#ef7c21'>Desconfianza</span> en los instrumentos de inversión",
              description:
                "Los instrumentos de inversión pueden ser utilizados para el beneficio de la PYME",
            },
            feature_4: {
              title:
                "<span style='color:#ef7c21'>Visibilidad</span> de los recursos financieros ",
              description:
                "La visibilidad limitada de los recursos genera un flujo de caja ineficiente.",
            },
          },
          testimonios: {
            title: "Testimonios",
            subtitle:
              "Escuchamos constantemente a nuestros clientes. CRESIUM nace a partir de tus necesidades.",
            testimonials_1: {
              description:
                "“Con Cresium centralizamos todo nuestro plata y sabemos exactamente cuanta tenemos. Esto nos ahorra mucho tiempo.",
              name: "Karen Krebs - COO",
              position: "RYA Indumentaria",
            },
            testimonials_2: {
              description:
                "““Antes de usar Cresium perdíamos plata todos los días y no lo sabíamos. Cresium resguarda el valor de nuestro dinero desde que entra hasta que sale.”",
              name: "Sebastian Rimmele - CEO ",
              position: "Dignos",
            },
          },
          starttoday: {
            title: "Podés empezar hoy!",
            subtitle: "Simple, ágil y sin costo.",
            description:
              "Déjanos tu mail y nos pondremos en contacto contigo lo antes posible.",
          },
          sitemap: {
            about:
              "Cresium es una Fintech que impulsa el crecimiento de las PYMES en Latinoamérica",
            getintouch: "Ponete en contacto!",
            news: "Querés recibir noticias?",
            already: "Deja tu mail!",
          },
          misc: {
            "know-more": "Know more",
            "see-more": "See more",
            "start-now": "Empezá ahora",
          },
        },
      },
    },
    lng: "es",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
