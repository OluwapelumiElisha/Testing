import React from "react";
import minus from '../assets/minus.svg'
import plus from '../assets/Plus.svg'

interface FaqItem {
    question: string;
    answer: string;
    defaultOpen?: boolean;
}

const faqs: FaqItem[] = [
    {
        question: "What Is The Scent/Smell Of The Product?",
        answer:
            "Our serum has a light, clean scent that fades quickly after application.",
    },
    {
        question: "How And When Should I Apply The Invigorating Vitamin C Serum?",
        answer:
            "Apply once daily on clean, dry skin before moisturizer and SPF.",
    },
    {
        question:
            "Is It Safe To Use The Vitamin C Serum While Pregnant Or Breast Feeding?",
        answer:
            "Always consult your healthcare provider. Our formula avoids known pregnancy irritants, but individual guidance is best.",
    },
    {
        question:
            "When Will I Start Seeing Results After Using The Invigorating Vitamin C Serum?",
        answer:
            "Most users notice brighter-looking skin within 2–4 weeks of consistent use.",
    },
    {
        question: "Is It Safe To Use This Serum On Sensitive Skin?",
        answer:
            "Yes, begin 2–3 times a week and build up. Patch test first to ensure compatibility.",
    },
    {
        question:
            "Can The Invigorating Vitamin C Serum Be Used With A Retinol Or Retinoid?",
        answer:
            "Yes, but with caution. Vitamin C (ascorbic acid) and retinoids can both be part of an effective routine, but using them together at the same time—especially on sensitive skin—may cause irritation. Space usage (AM vs PM) or alternate days.",
        defaultOpen: true,
    },
];


const AccordionItem: React.FC<{
    item: FaqItem;
    index: number;
    openIndex: number | null;
    setOpenIndex: (i: number | null) => void;
}> = ({ item, index, openIndex, setOpenIndex }) => {
    const open = openIndex === index;
    const contentId = `faq-content-${index}`;
    const headerId = `faq-header-${index}`;

    return (
        <div
            className={[
                "rounded-xl border shadow-sm overflow-hidden",
                open
                    ? "bg-[linear-gradient(to_right,#035E71,#5DA9B9,#035E71)] text-white border-[0.62px] border-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)]"
                    : "bg-white text-slate-800 border-slate-200",
            ].join(" ")}
        >
            <button
                id={headerId}
                aria-controls={contentId}
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                className={[
                    "w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    open ? "focus-visible:ring-white/50" : "focus-visible:ring-teal-600/40",
                ].join(" ")}
            >
                <span className={`flex-1 font-medium text-sm sm:text-md leading-snug  ${open ? 'text-white' : 'text-[]'}`}>
                    {item.question}
                </span>
                <div className="flex items-center gap-3">
                    {
                        open ?  <img src={minus} alt="" className="w-7 h-7" /> : <img src={plus} alt="" className="w-7 h-7" />
                    }
                </div>
            </button>

            {/* Content with smooth height animation; respects reduced-motion */}
            <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    "motion-reduce:transition-none",
                ].join(" ")}
            >
                <div className="min-h-0">
                    <div className="px-4 sm:px-5 pb-4 -mt-1">
                        <p className={[
                            "text-sm sm:text-[15px]",
                            open ? "text-white/95" : "text-slate-600",
                        ].join(" ")}>
                            {item.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LeftBadge: React.FC = () => (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#045F72] text-white px-6 py-1 text-xs font-medium shadow-sm border-[1px] border-[#0A8BA6]">
        FAQ
    </div>
);

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(() => {
        const def = faqs.findIndex((f) => f.defaultOpen);
        return def >= 0 ? def : null;
    });

    return (
        <section className="py-10 sm:py-14 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-52">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-5">
                        <LeftBadge />
                        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight text-[#111111]">
                            Des <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"> Questions ? </span>  Une Offre <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"> Claire </span>  Et
                            Des Résultats <span className="text-teal-700"> Concrets</span>
                        </h2>
                        <p className="mt-3 text-sm text-[#4C4C4C] max-w-prose">
                            Une interface flexible et transparente pour booster votre productivité
                            et la collaboration de votre équipe à chaque étape.
                        </p>
                        <button style={{
                            background: "linear-gradient(to right, #035E71, #5DA9B9, #035E71)",
                        }} className="mt-5 inline-flex items-center justify-center rounded-lg text-white px-4 py-2.5 text-sm font-medium shadow hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400/40">
                            Booker une démo
                        </button>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 space-y-3">
                        {faqs.map((item, idx) => (
                            <AccordionItem
                                key={item.question}
                                item={item}
                                index={idx}
                                openIndex={openIndex}
                                setOpenIndex={setOpenIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
