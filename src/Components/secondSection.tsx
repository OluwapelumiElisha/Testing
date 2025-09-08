import TestimonialCard from "./TestimonialCard"
import ProfileImage from '../assets/image 56.svg'
import firstCardLogo from '../assets/image 62.svg'
import secondCardLogo from '../assets/image 63.svg'
import { motion } from "framer-motion";
import Tabs from './tabs'
import ticket from '../assets/Group.svg'
import secondticket from '../assets/Vector.svg'
import line from '../assets/RM7SroEIrEIxZGjpGsUOazxF4.svg fill.svg'
import image from '../assets/Image → QoTZyI7CkM97mFm0elr4g0yNc.svg.svg'
import image2 from '../assets/8BXeBQObnslmzSi9htBC7WTLXM.svg fill.svg'
import { useEffect, useRef, useState } from "react";
import Enter2 from '../assets/Vector2.svg'
import app from '../assets/apps_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1.svg'
import pp from '../assets/image 65.svg'
import sideImage from '../assets/AI.svg'
import group from '../assets/Frame 2147224426.svg'
import bar from '../assets/Frame 2147224427.svg'
const features = [
  {
    title: "Cockpit IA",
    img: app,
    description:
      "Pas de complexité, pas d'étapes inutiles, juste une efficacité pure conçue pour des business high ticket.",
    author: "Tibtalks, Fondateur Magic consulting",
  },
  {
    title: "Setting appel",
    img: app,
    description:
      "Optimisez vos appels avec un système clair et efficace conçu pour les équipes performantes.",
    author: "Sophie, Head of Sales",
  },
  {
    title: "Appels Closing",
    img: app,
    description:
      "Concluez vos ventes avec des outils qui simplifient le processus de closing.",
    author: "Marc, Sales Expert",
  },
  {
    title: "KPI",
    img: app,
    description:
      "Suivez vos KPI en temps réel et ajustez vos stratégies en toute confiance.",
    author: "Léa, Analyst",
  },
  {
    title: "Commissions",
    img: app,
    description:
      "Gérez facilement les commissions et récompensez vos closers avec précision.",
    author: "Paul, Finance Manager",
  },
];
const cards = () => {
  // const [showBonjour, setShowBonjour] = useState(true);
  // const [active, setActive] = useState<"bonjour" | "adieu">("bonjour");
  const [active, setActive] = useState<"bonjour" | "adieu">("bonjour");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("adieu");
          } else {
            setActive("bonjour");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 50% of the div is visible
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const cardTop = [
    {
      image: ProfileImage,
      highlight: "3x",
      title: "plus de productivité",
      review:
        "Un plaisir de travailler avec Tom et des résultats exceptionnels pour une premiere collaboration.",
      name: "Yomi Denzel",
      role: "CEO",
      company: "Mindeo",
      tag: "Infopreneur",
      bgColor: "bg-gradient-to-r from-[#5DA9B9] via-[#035E71] to-[#035E71]",
      highlightColor: "#ffffff",
      titleColor: "#B9F3FFCC",
      reviewColor: "#ffffff",
      nameColor: "#ffffff",
      roleColor: "#FFFFFF80",
      tagTextColor: "#111111",
      tagBgColor: "#FFFFFF",
      companyColor: "#FFFFFFE5",
      title2: firstCardLogo,
      ticket: ticket
    },
    {
      image: ProfileImage,
      highlight: "3x",
      title: "plus de productivité",
      review:
        "Un plaisir de travailler avec Tom et des résultats exceptionnels pour une premiere collaboration.",
      name: "Yomi Denzel",
      role: "CEO",
      company: "Mindeo",
      tag: "Infopreneur",
      bgColor: "#FFFFFF",
      highlightColor: "#035E71",
      titleColor: "#0000004D",
      reviewColor: "#000000",
      nameColor: "#035E71",
      roleColor: "#247A8C80",
      tagTextColor: "#111111",
      tagBgColor: "bg-[linear-gradient(98.23deg,#035E71_-6.67%,#5DA9B9_45.08%,#035E71_97.28%)]",
      companyColor: "#035E71E5",
      title2: secondCardLogo,
      ticket: secondticket
    },
  ];

  const cardBelow = [
    {
      image: ProfileImage,
      highlight: "3x",
      title: "plus de productivité",
      review:
        "Un plaisir de travailler avec Tom et des résultats exceptionnels pour une premiere collaboration.",
      name: "Yomi Denzel",
      role: "CEO",
      company: "Mindeo",
      tag: "Infopreneur",
      bgColor: "#FFFFFF",
      highlightColor: "#035E71",
      titleColor: "#0000004D",
      reviewColor: "#000000",
      nameColor: "#035E71",
      roleColor: "#247A8C80",
      tagTextColor: "#111111",
      tagBgColor: "bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] to-[#035E71]",
      companyColor: "#035E71E5",
      title2: secondCardLogo,
      ticket: secondticket
    },
    {
      image: ProfileImage,
      highlight: "3x",
      title: "plus de productivité",
      review:
        "Un plaisir de travailler avec Tom et des résultats exceptionnels pour une premiere collaboration.",
      name: "Yomi Denzel",
      role: "CEO",
      company: "Mindeo",
      tag: "Infopreneur",
      bgColor: "bg-gradient-to-r from-[#5DA9B9] via-[#035E71] to-[#035E71]",
      highlightColor: "#ffffff",
      titleColor: "#B9F3FFCC",
      reviewColor: "#ffffff",
      nameColor: "#ffffff",
      roleColor: "#FFFFFF80",
      tagTextColor: "#111111",
      tagBgColor: "#FFFFFF",
      companyColor: "#FFFFFFE5",
      title2: firstCardLogo,
      ticket: ticket
    },

  ];

  const activeFeature = features[activeIndex];
  return (
    <div className="w-full bg-[#F7FEFF] -mt-40 pb-40">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className='max-w-7xl mx-auto px-4 lg:px-6 pt-40 pb-24'>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-geist font-semibold mb-6 text-center">
            <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
              24M€
            </span> <span></span>
            <span>déjà optimisés pour des <br /> entreprises comme la vôtre</span>
          </h1>

          {/* Scrolling Cards  */}
          <div className="mt-12">
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex space-x-10 !w-[200%] ml-14"
                variants={{}} // Added empty variants prop to satisfy type requirement
                animate={{ x: ["0%", "-50%"] }} // scroll left
                transition={{
                  duration: 25, // speed
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {/* Repeat cards twice for seamless scrolling */}
                {[...Array(1)].map((_, index) => (
                  <div key={index} className="flex space-x-10">
                    {cardTop.map((card, idx) => (
                      <TestimonialCard key={idx} {...card} />
                    ))}
                  </div>
                ))}


              </motion.div>
            </div>

            <div className="overflow-hidden w-full mt-6 ">
              <motion.div
                className="flex space-x-10 !w-[200%] mr-14"
                variants={{}}
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...Array(1)].map((_, index) => (
                  <div key={index} className="flex space-x-10">
                    {cardBelow.map((card, idx) => (
                      <TestimonialCard key={idx} {...card} />
                    ))}
                  </div>
                ))}


              </motion.div>
            </div>
          </div>

          {/* Scrolling Cards  */}

          {/* Tabs  */}
          <div className="mt-12">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-geist font-semibold mb-2 text-center">
              <span className="bg-gradient-to-r from-[#000000] via-[#7F7F7F]  via-[#6E6E6E] via-[#000000] via-[#000000] to-[#000000] bg-clip-text text-transparent">
                Conçu
              </span> <span className="text-[#000000]">pour les </span> <br />
              {/* <span>Entrepreneurs Ambitieux</span> */}
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                Entrepreneurs Ambitieux
              </span>

            </h1>

            <div className="flex justify-center items-center w-[90%] ">
              <img src={line} alt="" />
            </div>
            <Tabs></Tabs>
          </div>
        </div>

        {/* words  */}
        <div
          className="flex justify-center items-center flex-wrap w-[90%] m-auto"
        >
          {/* LEFT SIDE */}
          <div className="relative w-full sm:w-auto flex-1"
          
          >
            <h1 className="relative text-lg sm:text-2xl md:text-3xl lg:text-[30.77px] font-geist font-semibold mb-4 text-start">
              {active === "bonjour" ? (
                <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                  Dites bonjour à
                </span>
              ) : (
                <span className="text-[#6E6E6E]">Dites adieu à</span>
              )}
              <img
                src={image}
                alt="Decorative"
                className="absolute -top-8 sm:-top-16 md:-top-20 left-28 sm:left-36 md:left-44 w-20 sm:w-44 md:w-56"
              />
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">
            <ul className="font-semibold text-base sm:text-xl md:text-2xl lg:text-[30px] text-start space-y-2 sm:space-y-3">
              {active === "bonjour" ? (
                <div className="transition-all duration-700 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                  <li>Un cockpit centralisé</li>
                  <li>Un suivi des leads optimisés</li>
                  <li>Des KPI en temps réel</li>
                  <li>Des encaissements et commissions claires</li>
                </div>
              ) : (
                <div className="transition-all duration-700 text-[#6E6E6E]">
                  <li>Une dispersion des leads</li>
                  <li>Des relances oubliées</li>
                  <li>Des décisions à l’aveugle</li>
                  <li>Des tableaux de bord incomplets</li>
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* Pourquoi nos clients nous ont choisis  */}
        <div className="mt-16" ref={sectionRef}>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-geist font-semibold mb-3 text-center">
            <span className="bg-[linear-gradient(92.36deg,#000000_1.98%,#7F7F7F_37.95%,#000000_62.94%,#6E6E6E_72.43%,#000000_92.41%,#999999_105.9%)] bg-clip-text text-transparent">
              Pourquoi nos clients
            </span>
            <br />
            <span>nous ont choisis</span>
          </h1>
          <p className="text-center text-[#757575]">{"Et obtiennent en moyenne 20% de croissance après 30 jours de prise en main"}</p>
          <div className="flex justify-center items-center mt-10">
            <button className="bg-[linear-gradient(106.57deg,rgba(228,150,0,0.8)_14.6%,#CA8500_111.87%)] text-white lg:px-8 md:px-8 sm:px-5 px-1 py-3 font-semibold mb-12 shadow-md rounded-lg flex justify-center items-center lg:space-x-5 md:space-x-5 sm:space-x-3 space-x-1 shadow-amber-300">
              <span className='text-white text-[14px]  hover:text-black'>Essayez gratuitement</span>
              <img src={Enter2} alt="" className='w-[15px] h-[15px]' />
            </button>
          </div>

        </div>


      </div>
      <div className="w-[95%] bg-[#def5ff] rounded-2xl shadow-lg border-[2px] border-[#FFFFFF] m-auto mt-2 font-inter">
        {/* MAIN FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* LEFT SECTION (Tabs + Active Content) */}
          <div className="p-6 sm:p-10 flex flex-col lg:flex-row justify-start gap-6 w-full lg:w-[60%]">
            {/* LEFT SIDE - TABS */}
            <div className="text-[18px] font-Geist font-medium w-full lg:w-auto">
              <h3 className="text-[#000000] font-bold">Fonctionnalités</h3>
              <ul className="mt-2 text-[16px] space-y-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer transition-colors duration-300 ${activeIndex === index
                      ? "bg-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)] bg-clip-text text-transparent font-semibold"
                      : "text-[#000000]"
                      }`}
                  >
                    {feature.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE - DISPLAY ACTIVE FEATURE */}
            <div className="mt-8 lg:mt-12 max-w-full lg:max-w-md">
              <img
                src={activeFeature.img}
                alt={activeFeature.title}
                className=""
              />
              <h1 className="font-semibold text-[28px] sm:text-[36px] lg:text-[43px] bg-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)] bg-clip-text text-transparent mt-4">
                {activeFeature.title}
              </h1>
              <p className="italic font-inter text-[#757575] mt-8 sm:mt-12 text-[16px] sm:text-[18px] lg:text-[20px]">
                “{activeFeature.description}”
              </p>
              <div className="flex justify-start items-center mt-4 space-x-4">
                <img src={pp} alt="profile" className="w-10 h-10 rounded-full" />
                <p className="text-[#5BA7B7] font-inter font-normal text-[14px] sm:text-[16px]">
                  {activeFeature.author}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="mt-8 lg:mt-16 w-full lg:w-[40%] mb-4 flex justify-center lg:justify-end">
            <img
              src={sideImage}
              alt=""
              className="w-full max-w-[500px] lg:max-w-[913px] h-auto rounded-lg"
            />
          </div>
        </div>


        <div className="bg-[#F7FEFf] p-6 sm:p-10 rounded-bl-2xl rounded-br-2xl">

        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto mt-30">
        <div className="">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-geist font-semibold mb-3 text-center">
            <span className="bg-[linear-gradient(92.36deg,#000000_1.98%,#7F7F7F_37.95%,#000000_62.94%,#6E6E6E_72.43%,#000000_92.41%,#999999_105.9%)] bg-clip-text text-transparent">
              {"Kombineo s’adapte à votre"}
            </span>
            <br />
            <span>Tunnel de vente,</span><span className="bg-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)] bg-clip-text text-transparent">pas l’inverse.</span>
          </h1>
          <div>
          </div>
        </div>
      </div>
      <div className="w-[85%] m-auto flex flex-col lg:flex-row justify-between items-center gap-6 mt-8">
        <img
          src={group}
          alt="group"
          className="w-full max-w-[470px] h-auto"
        />
        <img
          src={bar}
          alt="bar"
          className="w-full max-w-[470px] h-auto"
        />
      </div>

    </div>

  )
}

export default cards
