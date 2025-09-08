import React, { useState } from "react";
import Infopreneur from '../assets/Vector.svg'
import Manager from '../assets/Manager.svg'
import Challenge from '../assets/chan.svg'
import Agence from '../assets/Agence.svg'
import container from '../assets/Container.svg'
import logo from '../assets/image 59.svg'

type Tab = {
    label: string;
    image: string;
    title: string;
    subtitle: string;
    checklist: string[];
    review: string;
    reviewer: string;
    role: string;
    company: string;
    reviewerImage: string;
    logo?: string;
};

const tabsData: Tab[] = [
    {
        label: "Infopreneur/Coach",
        image: Infopreneur,
        title: "Gagnez du temps, multipliez vos ventes",
        subtitle: "Gagnez du temps et optimisez votre business en ligne.",
        checklist: [
            "KPI en temps réel",
            "Suivi Follow-up optimisé",
            "Calcul automatique des commissions",
        ],
        review:
            "Kombineo est si simple à utiliser, facile à connecter, et les fonctionnalités vous feront gagner beaucoup de temps.",
        reviewer: "Fabrien Rotz",
        role: "CEO",
        company: "Darons du Biz",
        reviewerImage: logo,
        logo: logo,
    },
    {
        label: "Manager",
        image: Manager,
        title: "Maximisez votre portée",
        subtitle: "Augmentez vos conversions et atteignez vos clients idéaux.",
        checklist: ["Prise de décisions agiles", "Onboarding sales simplifié", "Prévisionnel et tendance des ventes"],
        review:
            "La solution parfaite pour suivre mes campagnes et booster mes résultats.",
        reviewer: "Sophie Durand",
        role: "CMO",
        company: "MarketPro",
        // reviewerImage: "/reviewer2.png",
        reviewerImage: logo,
        logo: "/logo2.png"
    },
    {
        label: "Challenge",
        image: Challenge,
        title: "Relevez tous vos défis",
        subtitle: "Conçu pour s'adapter à vos besoins business.",
        checklist: ["Absorbe du volume en instantané", "Système setting avancée", "Follow up chiurgicale sans flou"],
        review: "Un outil puissant qui s'adapte vraiment à mes besoins.",
        reviewer: "Marc Lopez",
        role: "Entrepreneur",
        company: "StartupX",
        // reviewerImage: "/reviewer3.png",
        reviewerImage: logo,
        logo: "/logo3.png",
    },
    {
        label: "Agence",
        image: Agence,
        title: "Relevez tous vos défis",
        subtitle: "Conçu pour s'adapter à vos besoins business.",
        checklist: ["Aide à la vente et à l’upsell", "Optimisation du CA clients", "Marketing suivi en temps réel"],
        review: "Un outil puissant qui s'adapte vraiment à mes besoins.",
        reviewer: "Marc Lopez",
        role: "Entrepreneur",
        company: "StartupX",
        // reviewerImage: "/reviewer3.png",
        reviewerImage: logo,
        logo: "/logo3.png",
    },
];

const TabCard: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTab = tabsData[activeIndex];

    return (
        <div className="bg-white rounded-2xl shadow-lg border-[1px] border-[#E4DFDC] p-6 max-w-4xl mx-auto mt-2 font-inter">
            {/* Tabs */}
            <div className="flex overflow-x-auto gap-6 mb-6 pb-2 scrollbar-hide">
                {tabsData.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`px-6 py-4 whitespace-nowrap rounded-lg text-sm font-medium transition flex justify-center gap-2 text-[#111111] border items-center ${idx === activeIndex
                            ? "bg-[linear-gradient(98.23deg,#035E71_-6.67%,#5DA9B9_45.08%,#035E71_97.28%)] text-white"
                            : "bg-gray-50 border-[#E4DFDC] border-[1px] text-gray-600 hover:bg-white"
                            }`}
                    >
                        <img src={tab.image} alt="" />
                        {tab.label}
                    </button>
                ))}
            </div>



            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:gap-6 md:gap-6 sm:gap-0 gap-0 w-full pl-5">
                {/* Left Side */}
                <div className="flex-1 space-y-4">
                    {/* <h2 className="text-2xl font-bold text-gray-900  text-center"></h2> */}
                    <h2 className="text-2xl font-bold text-gray-900 text-center whitespace-normal break-words">
                        {activeTab.title}
                    </h2>
                    <div className="flex lg:justify-start md:justify-center sm:justify-center justify-center items-center">
                        <button style={{ background: "radial-gradient(circle, #FFCF72, #E49600)", }} className="lg:mt-10 md:mt-10 sm:mt-5 mt-0 text-white lg:px-8 md:px-8 sm:px-5 px-1 py-3 font-semibold mb-12 shadow-md rounded-lg lg:space-x-5 md:space-x-5 sm:space-x-3 space-x-1 shadow-amber-300 hover:text-black">
                            Essai gratuit de 7 jours
                        </button>
                    </div>
                    {/* <p className="text-gray-700">{activeTab.subtitle}</p> */}

                </div>

                {/* Right Side */}
                <div className="flex-1 space-y-4">
                    <ul className="space-y-3">
                        {activeTab.checklist.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                                {/* <span className="w-5 h-5 bg-gradient-to-r from-[#5DA9B9] to-[#035E71] text-white flex items-center justify-center rounded-full text-sm">
                  ✓
                </span> */}
                                <img src={container} alt="" />
                                <span className="text-[#4C4C4C] font-medium lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px]">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Testimonial */}
                    <div className="lg:flex md:flex sm:flex block justify-center items-start gap-3 border-t border-[#F1F0EE] pt-4 mt-4">
                        <img
                            src={activeTab.reviewerImage}
                            alt={activeTab.reviewer}
                            className="w-16 h-auto rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <p className="text-gray-800 font-semibold text-start">{activeTab.reviewer}</p>
                            <p className="text-sm text-gray-500 text-start">
                                {activeTab.role} @ {activeTab.company}
                            </p>
                            <p className="text-sm italic text-gray-600 mt-1 text-start">
                                "{activeTab.review}"
                            </p>
                        </div>
                        {/* {activeTab.logo && (
                            <img
                                src={activeTab.logo}
                                alt="logo"
                                className="w-16 h-auto object-contain"
                            />
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard;
