module.exports = [
"[project]/src/data/siteData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRANCHES",
    ()=>BRANCHES,
    "CHILD",
    ()=>CHILD,
    "EMERGENCY",
    ()=>EMERGENCY,
    "FACILITIES",
    ()=>FACILITIES,
    "FAQS",
    ()=>FAQS,
    "HIGHLIGHTS",
    ()=>HIGHLIGHTS,
    "IMG",
    ()=>IMG,
    "INFRA",
    ()=>INFRA,
    "LINKS",
    ()=>LINKS,
    "MATERNITY",
    ()=>MATERNITY,
    "SERVICES",
    ()=>SERVICES,
    "SERVICES_DD",
    ()=>SERVICES_DD,
    "STATS",
    ()=>STATS,
    "WHY",
    ()=>WHY
]);
const IMG = {
    /* 1. HERO — emotional anchor: mother & newborn / NICU moment */ hero: "/assets/banner.png",
    advancedNICU: "/assets/Advanced-NICU.png",
    emergency: "/assets/emergency.png",
    maternityCare: "/assets/maternity-care.png",
    newbornCare: "/assets/newborn-care.png",
    expertSpecialists: "/assets/expert-specialists.png",
    criticalCare1: "/assets/critical-care1.png",
    criticalCare2: "/assets/critical-care2.png",
    criticalCare3: "/assets/critical-care3.png",
    criticalCare4: "/assets/critical-care4.png",
    expertSpecialists2: "/assets/expert-specialists2.png",
    emergency2: "/assets/emergency2.png",
    branch1: "/assets/branch1.png",
    branch2: "/assets/branch2.png",
    branch3: "/assets/branch3.png",
    branch4: "/assets/branch4.png",
    advancedNICU25: "/assets/Advanced-NICU25.png",
    /* 2. HERO TRUST STACK — 3 tiny circular photos (happy families / doctors) */ g1: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80",
    g3: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80",
    g4: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=700&q=80",
    /* 3. EMERGENCY GUIDE CARDS — newborn / child / pregnant mother */ newborn: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    pediatrics: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
    pregnancy: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&w=900&q=80",
    /* 4. CRITICAL CARE SERVICE CARDS — ER / NICU / PICU / ambulance */ nicu: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    ambulance: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=900&q=80",
    /* 5. MATERNITY + CHILD HEALTH SPLITS — real consultation photos */ maternity: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
    childDoc: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80"
};
const BRANCHES = [
    {
        name: "Rio — Madurai",
        short: "Madurai",
        img: IMG.branch1,
        grad: 0,
        address: "No. 00, Sample Road, K.K. Nagar, Madurai — 625020",
        phone: "tel:+917708318222",
        maps: "https://maps.app.goo.gl/9H1xwDxZo1NYsNpr9"
    },
    {
        name: "Rio — Southwing Madurai",
        short: "Southwing Madurai",
        img: IMG.branch2,
        grad: 1,
        address: "No. 00, Sample Street, Villapuram, Madurai — 625012",
        phone: "tel:+917418661222",
        maps: "https://maps.app.goo.gl/vWb9iFHrdpMk19gA6"
    },
    {
        name: "Rio — Dindigul",
        short: "Dindigul",
        img: IMG.branch3,
        grad: 2,
        address: "No. 00, Sample Salai, GTN Road, Dindigul — 624005",
        phone: "tel:+917845464333",
        maps: "https://maps.app.goo.gl/n4oeaCTqyG65o9PJ9"
    },
    {
        name: "Rio — Thanjavur",
        short: "Thanjavur",
        img: IMG.branch4,
        grad: 0,
        address: "No. 00, Sample Main Road, Medical College Rd, Thanjavur — 613007",
        phone: "tel:+918220542555",
        maps: "https://maps.app.goo.gl/CCzPXkhzDNju49dj6"
    }
];
const INFRA = [
    {
        cap: "Advanced NICU ward",
        img: IMG.criticalCare1,
        grad: 0,
        big: true
    },
    {
        cap: "Modular operation theatre",
        img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80",
        grad: 1
    },
    {
        cap: "Paediatric emergency ward",
        img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80",
        grad: 1
    },
    {
        cap: "Ambulance & neonatal transport",
        img: IMG.emergency2,
        grad: 0,
        big: true
    },
    {
        cap: "Vaccination centre",
        img: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=900&q=80",
        grad: 2
    },
    {
        cap: "In-house pharmacy",
        img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
        grad: 2
    }
];
const LINKS = {
    phone: "tel:+910000000000",
    maps: "https://maps.google.com/?q=Rio+Children's+Hospital+Madurai",
    instagram: "https://instagram.com/riochildrenshospital",
    youtube: "https://youtube.com/@riochildrenshospital"
};
const HIGHLIGHTS = [
    "24/7 Paediatric Emergency Care",
    "Advanced NICU & PICU Support",
    "Maternity & Obstetric Care",
    "Emergency Doctors Round the Clock",
    "Lab, Pharmacy & Ambulance Support"
];
const STATS = [
    {
        n: 6,
        suffix: " Lacs+",
        label: "Patient care"
    },
    {
        n: 100,
        suffix: "+",
        label: "Expert specialists"
    },
    {
        n: 1,
        suffix: " Lac+",
        label: "Families helped"
    },
    {
        n: 5000,
        suffix: "+",
        label: "High-risk pregnancies"
    },
    {
        n: 12,
        suffix: "+",
        label: "Years of experience"
    },
    {
        n: 4,
        suffix: "",
        label: "Branches in Tamil Nadu"
    }
];
const EMERGENCY = [
    {
        who: "For Newborns",
        img: IMG.newbornCare,
        grad: 0,
        items: [
            "Breathing difficulty",
            "Poor feeding or continuous crying",
            "Jaundice symptoms",
            "Premature baby care needs",
            "Low birth weight concerns",
            "Seizures or unusual body movements"
        ]
    },
    {
        who: "For Children",
        img: IMG.pediatrics,
        grad: 1,
        items: [
            "High fever",
            "Severe cough, wheezing or breathing difficulty",
            "Fits or seizures",
            "Dengue symptoms",
            "Vomiting, diarrhoea or dehydration",
            "Accidents, injuries, burns or falls",
            "Severe asthma or respiratory distress"
        ]
    },
    {
        who: "For Women & Pregnancy",
        img: IMG.pregnancy,
        grad: 2,
        items: [
            "Pregnancy-related pain or bleeding",
            "High-risk pregnancy concerns",
            "Reduced baby movements",
            "Labour pain or delivery support",
            "Gynaecological emergencies",
            "Postnatal mother & baby concerns"
        ]
    }
];
const WHY = [
    {
        t: "24/7 Emergency Support",
        d: "Our emergency team is available round the clock for newborns, children, pregnant women and mothers."
    },
    {
        t: "Advanced NICU Care",
        d: "Equipped for premature babies, critically ill newborns, jaundice care, ventilator support and specialised neonatal treatment.",
        dark: true
    },
    {
        t: "Paediatric Intensive Care",
        d: "PICU critical care for severe respiratory distress, asthma, shock, dehydration, dengue, fits, meningitis and cardiac problems."
    },
    {
        t: "Complete Women & Maternity Care",
        d: "Early pregnancy care to delivery, high-risk pregnancy support, obstetric emergencies and gynaecological care under one roof."
    },
    {
        t: "Support Services Under One Roof",
        d: "24-hour lab, pharmacy, imaging, vaccination, ambulance and home care support for faster, coordinated care."
    }
];
const SERVICES = [
    {
        t: "24/7 Paediatric Emergency Care",
        d: "Immediate care for fever, breathing difficulty, dehydration, accidents, seizures and infections.",
        img: IMG.criticalCare1,
        grad: 1
    },
    {
        t: "NICU — Neonatal Intensive Care",
        d: "Specialised care for premature babies, newborn complications, jaundice, breathing issues and low birth weight.",
        img: IMG.criticalCare2,
        grad: 0
    },
    {
        t: "PICU — Paediatric Intensive Care",
        d: "Continuous monitoring, respiratory support, emergency treatment and specialist-led critical care for children.",
        img: IMG.criticalCare3,
        grad: 2
    },
    {
        t: "Ambulance & Neonatal Transport",
        d: "Emergency transport for newborns and children with trained medical teams and critical care facilities.",
        img: IMG.criticalCare4,
        grad: 1
    }
];
const MATERNITY = [
    "Early pregnancy care",
    "Antenatal check-ups",
    "Obstetric care",
    "High-risk pregnancy support",
    "Normal delivery & C-section care",
    "Gynaec care",
    "Anomaly scan",
    "Doppler study",
    "Abdomen & pelvis scan",
    "Postnatal care for mother & baby"
];
const CHILD = [
    "General paediatrics",
    "Fever and infections",
    "Cold, cough, wheezing & asthma",
    "Vomiting and diarrhoea",
    "Nutritional deficiencies",
    "Skin infections",
    "Urinary tract infections",
    "Paediatric accidents & injuries",
    "Vaccination services",
    "Developmental & specialist care"
];
const FACILITIES = [
    "Advanced NICU",
    "Advanced PICU",
    "24/7 Paediatric Emergency",
    "24-Hour Laboratory",
    "Pharmacy",
    "X-Ray / CT / Ultrasound",
    "Vaccination Centre",
    "Human Milk Bank",
    "Teleconsultation",
    "Home Care & Home Vaccination",
    "Ambulance Services"
];
const SERVICES_DD = [
    "Paediatric Emergency",
    "NICU / Newborn Care",
    "PICU / Child Critical Care",
    "General Paediatrics",
    "Maternity Care",
    "Obstetric Care",
    "Gynaec Care",
    "Vaccination",
    "Home Care",
    "Teleconsultation",
    "Other"
];
const FAQS = [
    {
        q: "Is Rio available for paediatric emergencies 24/7?",
        a: "Yes. Rio provides 24/7 paediatric emergency care for children who need urgent medical attention."
    },
    {
        q: "Does Rio provide NICU care for newborn babies?",
        a: "Yes. Rio has advanced NICU facilities for premature babies, newborn complications, jaundice care, ventilator support and critical neonatal monitoring."
    },
    {
        q: "When should I bring my child to the emergency department?",
        a: "Visit immediately if your child has breathing difficulty, high fever, seizures, severe vomiting, dehydration, dengue symptoms, injury or unusual drowsiness."
    },
    {
        q: "Does Rio provide care for pregnant women?",
        a: "Yes. Rio provides maternity care, obstetric care, early pregnancy care, antenatal check-ups, scans, high-risk pregnancy support and delivery care."
    },
    {
        q: "Are lab and pharmacy services available?",
        a: "Yes. Rio has 24-hour laboratory support and pharmacy facilities to support emergency and routine care."
    },
    {
        q: "Can I book vaccination for my child?",
        a: "Yes. Rio provides vaccination services from birth to adolescence, along with reminders to help parents stay on schedule."
    }
];
}),
"[project]/src/components/common.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>Check,
    "Img",
    ()=>Img,
    "InstaIc",
    ()=>InstaIc,
    "PhoneIc",
    ()=>PhoneIc,
    "Pill",
    ()=>Pill,
    "PinIc",
    ()=>PinIc,
    "Reveal",
    ()=>Reveal,
    "YtIc",
    ()=>YtIc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Img({ src, alt = "", className = "", grad = 0 }) {
    const [ok, setOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `img-wrap g-${grad} ${className}`,
        children: ok ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            loading: "lazy",
            onError: ()=>setOk(false)
        }, void 0, false, {
            fileName: "[project]/src/components/common.jsx",
            lineNumber: 10,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "img-fb",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 21s-7-4.6-9.3-8.7C.8 8.9 2.6 5 6.2 5c2 0 3.4 1.1 4.3 2.4L12 9l1.5-1.6C14.4 6.1 15.8 5 17.8 5c3.6 0 5.4 3.9 3.5 7.3C19 16.4 12 21 12 21z"
                }, void 0, false, {
                    fileName: "[project]/src/components/common.jsx",
                    lineNumber: 14,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common.jsx",
                lineNumber: 13,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common.jsx",
            lineNumber: 12,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
function useReveal() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([e])=>e.isIntersecting && (setShown(true), io.disconnect()), {
            threshold: 0.12
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, []);
    return [
        ref,
        shown
    ];
}
function Reveal({ children, delay = 0, className = "" }) {
    const [ref, shown] = useReveal();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `rv ${shown ? "rv-in" : ""} ${className}`,
        style: {
            transitionDelay: `${delay}ms`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
const Pill = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "pill",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 51,
        columnNumber: 39
    }, ("TURBOPACK compile-time value", void 0));
const Check = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "ck",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12.5l4.5 4.5L19 7.5",
            fill: "none"
        }, void 0, false, {
            fileName: "[project]/src/components/common.jsx",
            lineNumber: 55,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const PhoneIc = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"
        }, void 0, false, {
            fileName: "[project]/src/components/common.jsx",
            lineNumber: 61,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const PinIc = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
        }, void 0, false, {
            fileName: "[project]/src/components/common.jsx",
            lineNumber: 67,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 66,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const InstaIc = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2zM17.3 5.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"
        }, void 0, false, {
            fileName: "[project]/src/components/common.jsx",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const YtIc = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8zM9.8 15.1V8.9L15.4 12l-5.6 3.1z"
        }, void 0, false, {
            fileName: "[project]/src/components/common.jsx",
            lineNumber: 79,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/common.jsx",
        lineNumber: 78,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/components/BookingSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BookingSection() {
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [branch, setBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [concern, setConcern] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleBookingSubmit = (e)=>{
        e.preventDefault();
        if (name && mobile && branch && service && concern) {
            setSent(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section",
        id: "book",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "contact",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pill"], {
                            children: "Appointments"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Book an appointment"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sec-note mt-14",
                            children: "Please fill in your details. Our team will call you back shortly."
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "contact-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "📞"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 34,
                                            columnNumber: 21
                                        }, this),
                                        " +91 77083 18222"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingSection.jsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "📍"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 35,
                                            columnNumber: 21
                                        }, this),
                                        " Madurai • Southwing Madurai • Dindigul • Thanjavur"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingSection.jsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "🕐"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 36,
                                            columnNumber: 21
                                        }, this),
                                        " Emergency, NICU & PICU — 24/7"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingSection.jsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMG"].advancedNICU25,
                            alt: "Advanced NICU care at Rio",
                            grad: 2,
                            className: "contact-img"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingSection.jsx",
                    lineNumber: 26,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 120,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Request a call back"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingSection.jsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this),
                            sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-done",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Thank you! Your request is noted — our team will call you back shortly. (Connect this form to your CRM or WhatsApp to receive submissions.)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 46,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingSection.jsx",
                                lineNumber: 44,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleBookingSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    placeholder: "Patient / Parent name",
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BookingSection.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 55,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    placeholder: "Mobile number",
                                                    type: "tel",
                                                    value: mobile,
                                                    onChange: (e)=>setMobile(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/BookingSection.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 63,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 54,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row form-row-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: branch,
                                                    onChange: (e)=>setBranch(e.target.value),
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            disabled: true,
                                                            children: "Location / branch preference"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingSection.jsx",
                                                            lineNumber: 76,
                                                            columnNumber: 27
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRANCHES"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: b.short,
                                                                children: b.short
                                                            }, b.short, false, {
                                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                                lineNumber: 77,
                                                                columnNumber: 48
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingSection.jsx",
                                                    lineNumber: 75,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 74,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: service,
                                                    onChange: (e)=>setService(e.target.value),
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            disabled: true,
                                                            children: "Service needed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingSection.jsx",
                                                            lineNumber: 82,
                                                            columnNumber: 27
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES_DD"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s,
                                                                children: s
                                                            }, s, false, {
                                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                                lineNumber: 83,
                                                                columnNumber: 51
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingSection.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 80,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 73,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: concern,
                                                onChange: (e)=>setConcern(e.target.value),
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: "Concern is for…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 90,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Child",
                                                        children: "Child"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 91,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Mother",
                                                        children: "Mother"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Newborn",
                                                        children: "Newborn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 89,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 88,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "lbl-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Message (optional)",
                                            rows: 3,
                                            value: message,
                                            onChange: (e)=>setMessage(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 98,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn btn-pink btn-full",
                                        children: [
                                            "Request a Call Back ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "arr",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 106,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingSection.jsx",
                                lineNumber: 53,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingSection.jsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingSection.jsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingSection.jsx",
            lineNumber: 25,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BookingSection.jsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
;
}),
"[project]/src/components/FaqSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FaqSection() {
    const [faqOpen, setFaqOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section section-tint",
        id: "faq",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec-head",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pill"], {
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FaqSection.jsx",
                            lineNumber: 14,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Frequently asked questions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FaqSection.jsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqSection.jsx",
                    lineNumber: 13,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FaqSection.jsx",
                lineNumber: 12,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-list",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQS"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: i * 60,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `faq ${faqOpen === i ? "faq-open" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFaqOpen(faqOpen === i ? -1 : i),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: f.q
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqSection.jsx",
                                            lineNumber: 23,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: faqOpen === i ? "−" : "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqSection.jsx",
                                            lineNumber: 24,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqSection.jsx",
                                    lineNumber: 22,
                                    columnNumber: 19
                                }, this),
                                faqOpen === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: f.a
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqSection.jsx",
                                    lineNumber: 26,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqSection.jsx",
                            lineNumber: 21,
                            columnNumber: 17
                        }, this)
                    }, f.q, false, {
                        fileName: "[project]/src/components/FaqSection.jsx",
                        lineNumber: 20,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FaqSection.jsx",
                lineNumber: 18,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FaqSection.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Header() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const f = ()=>setScrolled(window.scrollY > 16);
        f();
        window.addEventListener("scroll", f, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", f);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `nav ${scrolled ? "nav-solid" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "logo",
                href: "#top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "logo-mark",
                        children: "R"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "logo-text",
                        children: [
                            "Rio Children's Hospital",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "Women - Newborns - Children"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "nav-links",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#emergency",
                        children: "Emergency"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#services",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#maternity",
                        children: "Maternity"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#branches",
                        children: "Branches"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#faq",
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "btn btn-pink",
                href: "#book",
                children: "Book an appointment"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/HeroForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function HeroForm() {
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [branch, setBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (name && mobile && branch && service) {
            setDone(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hform",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hform-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Get a call back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip chip-static",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroForm.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            " Team responds quickly"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroForm.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-done",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Thank you! Our care team will call you back shortly. For emergencies, please call us directly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroForm.jsx",
                lineNumber: 29,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Patient / Parent name",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroForm.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Mobile number",
                            type: "tel",
                            value: mobile,
                            onChange: (e)=>setMobile(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroForm.jsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: branch,
                            onChange: (e)=>setBranch(e.target.value),
                            required: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    disabled: true,
                                    children: "Preferred branch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroForm.jsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRANCHES"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: b.short,
                                        children: b.short
                                    }, b.short, false, {
                                        fileName: "[project]/src/components/HeroForm.jsx",
                                        lineNumber: 58,
                                        columnNumber: 36
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroForm.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: service,
                            onChange: (e)=>setService(e.target.value),
                            required: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    disabled: true,
                                    children: "Service needed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroForm.jsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES_DD"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: s,
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/src/components/HeroForm.jsx",
                                        lineNumber: 64,
                                        columnNumber: 39
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroForm.jsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-pink btn-full",
                        children: [
                            "Request a Call Back ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "arr",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroForm.jsx",
                                lineNumber: 68,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hform-note",
                        children: [
                            "For emergencies, call ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LINKS"].phone,
                                children: "+91 00000 00000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroForm.jsx",
                                lineNumber: 71,
                                columnNumber: 35
                            }, this),
                            " — available 24/7."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroForm.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroForm.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroForm.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/StatsSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CountUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].default ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
function StatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "stats-band",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stats",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATS"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: i * 70,
                    className: "stat",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUp, {
                                end: s.n,
                                duration: 2,
                                separator: ",",
                                suffix: s.suffix,
                                enableScrollSpy: true,
                                scrollSpyOnce: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatsSection.jsx",
                                lineNumber: 16,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsSection.jsx",
                            lineNumber: 15,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: s.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/StatsSection.jsx",
                            lineNumber: 25,
                            columnNumber: 17
                        }, this)
                    ]
                }, s.label, true, {
                    fileName: "[project]/src/components/StatsSection.jsx",
                    lineNumber: 14,
                    columnNumber: 15
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/StatsSection.jsx",
            lineNumber: 12,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/StatsSection.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/node_modules/countup.js/dist/countUp.umd.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? e(exports) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(t) {
    "use strict";
    var e = function() {
        return e = Object.assign || function(t) {
            for(var e, i = 1, s = arguments.length; i < s; i++)for(var n in e = arguments[i])Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t;
        }, e.apply(this, arguments);
    }, i = function() {
        function t(t, i, s) {
            var n = this;
            this.endVal = i, this.options = s, this.version = "2.10.0", this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                autoAnimate: !1,
                autoAnimateDelay: 200,
                autoAnimateOnce: !1
            }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
                n.startTime || (n.startTime = t);
                var e = t - n.startTime;
                n.remaining = n.duration - e, n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(e, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(e, n.startVal, n.endVal - n.startVal, n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (e / n.duration);
                var i = n.countDown ? n.frameVal < n.endVal : n.frameVal > n.endVal;
                n.frameVal = i ? n.endVal : n.frameVal, n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces)), n.printValue(n.frameVal), e < n.duration ? n.rAF = requestAnimationFrame(n.count) : null !== n.finalEndVal ? n.update(n.finalEndVal) : n.options.onCompleteCallback && n.options.onCompleteCallback();
            }, this.formatNumber = function(t) {
                var e, i, s, a, o = t < 0 ? "-" : "";
                e = Math.abs(t).toFixed(n.options.decimalPlaces);
                var r = (e += "").split(".");
                if (i = r[0], s = r.length > 1 ? n.options.decimal + r[1] : "", n.options.useGrouping) {
                    a = "";
                    for(var l = 3, u = 0, h = 0, p = i.length; h < p; ++h)n.options.useIndianSeparators && 4 === h && (l = 2, u = 1), 0 !== h && u % l == 0 && (a = n.options.separator + a), u++, a = i[p - h - 1] + a;
                    i = a;
                }
                return n.options.numerals && n.options.numerals.length && (i = i.replace(/[0-9]/g, function(t) {
                    return n.options.numerals[+t];
                }), s = s.replace(/[0-9]/g, function(t) {
                    return n.options.numerals[+t];
                })), o + n.options.prefix + i + s + n.options.suffix;
            }, this.easeOutExpo = function(t, e, i, s) {
                return i * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + e;
            }, this.options = e(e({}, this.defaults), s), this.options.enableScrollSpy && (this.options.autoAnimate = !0), void 0 !== this.options.scrollSpyDelay && (this.options.autoAnimateDelay = this.options.scrollSpyDelay), this.options.scrollSpyOnce && (this.options.autoAnimateOnce = !0), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof t ? document.getElementById(t) : t, i = null == i ? this.parse(this.el.innerHTML) : i, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != ("TURBOPACK compile-time value", "undefined") && this.options.autoAnimate && (this.error || "undefined" == typeof IntersectionObserver ? this.error ? console.error(this.error, t) : console.error("IntersectionObserver is not supported by this browser") : this.setupObserver());
        }
        return t.prototype.setupObserver = function() {
            var e = this, i = t.observedElements.get(this.el);
            i && i.unobserve(), t.observedElements.set(this.el, this), this.observer = new IntersectionObserver(function(t) {
                for(var i = 0, s = t; i < s.length; i++){
                    var n = s[i];
                    n.isIntersecting && e.paused && !e.once ? (e.paused = !1, e.autoAnimateTimeout = setTimeout(function() {
                        return e.start();
                    }, e.options.autoAnimateDelay), e.options.autoAnimateOnce && (e.once = !0, e.observer.disconnect())) : n.isIntersecting || e.paused || (clearTimeout(e.autoAnimateTimeout), e.reset());
                }
            }, {
                threshold: 0
            }), this.observer.observe(this.el);
        }, t.prototype.unobserve = function() {
            var e;
            clearTimeout(this.autoAnimateTimeout), null === (e = this.observer) || void 0 === e || e.disconnect(), t.observedElements.delete(this.el);
        }, t.prototype.onDestroy = function() {
            clearTimeout(this.autoAnimateTimeout), cancelAnimationFrame(this.rAF), this.paused = !0, this.unobserve(), this.options.onCompleteCallback = null, this.options.onStartCallback = null;
        }, t.prototype.determineDirectionAndSmartEasing = function() {
            var t = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > t;
            var e = t - this.startVal;
            if (Math.abs(e) > this.options.smartEasingThreshold && this.options.useEasing) {
                this.finalEndVal = t;
                var i = this.countDown ? 1 : -1;
                this.endVal = t + i * this.options.smartEasingAmount, this.duration = this.duration / 2;
            } else this.endVal = t, this.finalEndVal = null;
            null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
        }, t.prototype.start = function(t) {
            this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
        }, t.prototype.pauseResume = function() {
            this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
        }, t.prototype.reset = function() {
            clearTimeout(this.autoAnimateTimeout), cancelAnimationFrame(this.rAF), this.paused = !0, this.once = !1, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
        }, t.prototype.update = function(t) {
            cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
        }, t.prototype.printValue = function(t) {
            var e;
            if (this.el) {
                var i = this.formattingFn(t);
                if (null === (e = this.options.plugin) || void 0 === e ? void 0 : e.render) this.options.plugin.render(this.el, i);
                else if ("INPUT" === this.el.tagName) this.el.value = i;
                else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = i : this.el.innerHTML = i;
            }
        }, t.prototype.ensureNumber = function(t) {
            return "number" == typeof t && !isNaN(t);
        }, t.prototype.validateValue = function(t) {
            var e = Number(t);
            return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
        }, t.prototype.resetDuration = function() {
            this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
        }, t.prototype.parse = function(t) {
            var e = function(t) {
                return t.replace(/([.,'  ])/g, "\\$1");
            }, i = e(this.options.separator), s = e(this.options.decimal), n = t.replace(new RegExp(i, "g"), "").replace(new RegExp(s, "g"), ".");
            return parseFloat(n);
        }, t.observedElements = new WeakMap, t;
    }();
    t.CountUp = i;
});
}),
"[project]/node_modules/react-countup/build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var countup_js = __turbopack_context__.r("[project]/node_modules/countup.js/dist/countUp.umd.js [app-ssr] (ecmascript)");
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/**
 * Silence SSR Warnings.
 * Borrowed from Formik v2.1.1, Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : React.useEffect;
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Create a stable reference to a callback which is updated after each render is committed.
 * Typed version borrowed from Formik v2.2.1. Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */ function useEventCallback(fn) {
    var ref = React.useRef(fn);
    // we copy a ref to the callback scoped to the current state/props on each render
    useIsomorphicLayoutEffect(function() {
        ref.current = fn;
    });
    return React.useCallback(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
}
var createCountUpInstance = function createCountUpInstance(el, props) {
    var decimal = props.decimal, decimals = props.decimals, duration = props.duration, easingFn = props.easingFn, end = props.end, formattingFn = props.formattingFn, numerals = props.numerals, prefix = props.prefix, separator = props.separator, start = props.start, suffix = props.suffix, useEasing = props.useEasing, useGrouping = props.useGrouping, useIndianSeparators = props.useIndianSeparators, enableScrollSpy = props.enableScrollSpy, scrollSpyDelay = props.scrollSpyDelay, scrollSpyOnce = props.scrollSpyOnce, plugin = props.plugin;
    return new countup_js.CountUp(el, end, {
        startVal: start,
        duration: duration,
        decimal: decimal,
        decimalPlaces: decimals,
        easingFn: easingFn,
        formattingFn: formattingFn,
        numerals: numerals,
        separator: separator,
        prefix: prefix,
        suffix: suffix,
        plugin: plugin,
        useEasing: useEasing,
        useIndianSeparators: useIndianSeparators,
        useGrouping: useGrouping,
        enableScrollSpy: enableScrollSpy,
        scrollSpyDelay: scrollSpyDelay,
        scrollSpyOnce: scrollSpyOnce
    });
};
var _excluded$1 = [
    "ref",
    "startOnMount",
    "enableReinitialize",
    "delay",
    "onEnd",
    "onStart",
    "onPauseResume",
    "onReset",
    "onUpdate"
];
var DEFAULTS = {
    decimal: '.',
    separator: ',',
    delay: null,
    prefix: '',
    suffix: '',
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: true,
    enableReinitialize: true,
    useEasing: true,
    useGrouping: true,
    useIndianSeparators: false
};
var useCountUp = function useCountUp(props) {
    var filteredProps = Object.fromEntries(Object.entries(props).filter(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
        return value !== undefined;
    }));
    var _useMemo = React.useMemo(function() {
        return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
    }, [
        props
    ]), ref = _useMemo.ref, startOnMount = _useMemo.startOnMount, enableReinitialize = _useMemo.enableReinitialize, delay = _useMemo.delay, onEnd = _useMemo.onEnd, onStart = _useMemo.onStart, onPauseResume = _useMemo.onPauseResume, onReset = _useMemo.onReset, onUpdate = _useMemo.onUpdate, instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
    var countUpRef = React.useRef();
    var timerRef = React.useRef();
    var isInitializedRef = React.useRef(false);
    var createInstance = useEventCallback(function() {
        return createCountUpInstance(typeof ref === 'string' ? ref : ref.current, instanceProps);
    });
    var getCountUp = useEventCallback(function(recreate) {
        var countUp = countUpRef.current;
        if (countUp && !recreate) {
            return countUp;
        }
        var newCountUp = createInstance();
        countUpRef.current = newCountUp;
        return newCountUp;
    });
    var start = useEventCallback(function() {
        var run = function run() {
            return getCountUp(true).start(function() {
                onEnd === null || onEnd === void 0 || onEnd({
                    pauseResume: pauseResume,
                    reset: reset,
                    start: restart,
                    update: update
                });
            });
        };
        if (delay && delay > 0) {
            timerRef.current = setTimeout(run, delay * 1000);
        } else {
            run();
        }
        onStart === null || onStart === void 0 || onStart({
            pauseResume: pauseResume,
            reset: reset,
            update: update
        });
    });
    var pauseResume = useEventCallback(function() {
        getCountUp().pauseResume();
        onPauseResume === null || onPauseResume === void 0 || onPauseResume({
            reset: reset,
            start: restart,
            update: update
        });
    });
    var reset = useEventCallback(function() {
        // Quick fix for https://github.com/glennreyes/react-countup/issues/736 - should be investigated
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (getCountUp().el) {
            timerRef.current && clearTimeout(timerRef.current);
            getCountUp().reset();
            onReset === null || onReset === void 0 || onReset({
                pauseResume: pauseResume,
                start: restart,
                update: update
            });
        }
    });
    var update = useEventCallback(function(newEnd) {
        getCountUp().update(newEnd);
        onUpdate === null || onUpdate === void 0 || onUpdate({
            pauseResume: pauseResume,
            reset: reset,
            start: restart
        });
    });
    var restart = useEventCallback(function() {
        reset();
        start();
    });
    var maybeInitialize = useEventCallback(function(shouldReset) {
        if (startOnMount) {
            if (shouldReset) {
                reset();
            }
            start();
        }
    });
    React.useEffect(function() {
        if (!isInitializedRef.current) {
            isInitializedRef.current = true;
            maybeInitialize();
        } else if (enableReinitialize) {
            maybeInitialize(true);
        }
    }, [
        enableReinitialize,
        isInitializedRef,
        maybeInitialize,
        delay,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.formattingFn
    ]);
    React.useEffect(function() {
        return function() {
            reset();
        };
    }, [
        reset
    ]);
    return {
        start: restart,
        pauseResume: pauseResume,
        reset: reset,
        update: update,
        getCountUp: getCountUp
    };
};
var _excluded = [
    "className",
    "redraw",
    "containerProps",
    "children",
    "style"
];
var CountUp = function CountUp(props) {
    var className = props.className, redraw = props.redraw, containerProps = props.containerProps, children = props.children, style = props.style, useCountUpProps = _objectWithoutProperties(props, _excluded);
    var containerRef = React.useRef(null);
    var isInitializedRef = React.useRef(false);
    var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
        ref: containerRef,
        startOnMount: typeof children !== 'function' || props.delay === 0,
        // component manually restarts
        enableReinitialize: false
    })), start = _useCountUp.start, reset = _useCountUp.reset, updateCountUp = _useCountUp.update, pauseResume = _useCountUp.pauseResume, getCountUp = _useCountUp.getCountUp;
    var restart = useEventCallback(function() {
        start();
    });
    var update = useEventCallback(function(end) {
        if (!props.preserveValue) {
            reset();
        }
        updateCountUp(end);
    });
    var initializeOnMount = useEventCallback(function() {
        if (typeof props.children === 'function') {
            // Warn when user didn't use containerRef at all
            if (!(containerRef.current instanceof Element)) {
                console.error("Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an Element, eg. <span ref={containerRef} />.");
                return;
            }
        }
        // unlike the hook, the CountUp component initializes on mount
        getCountUp();
    });
    React.useEffect(function() {
        initializeOnMount();
    }, [
        initializeOnMount
    ]);
    React.useEffect(function() {
        if (isInitializedRef.current) {
            update(props.end);
        }
    }, [
        props.end,
        update
    ]);
    var redrawDependencies = redraw && props;
    // if props.redraw, call this effect on every props change
    React.useEffect(function() {
        if (redraw && isInitializedRef.current) {
            restart();
        }
    }, [
        restart,
        redraw,
        redrawDependencies
    ]);
    // if not props.redraw, call this effect only when certain props are changed
    React.useEffect(function() {
        if (!redraw && isInitializedRef.current) {
            restart();
        }
    }, [
        restart,
        redraw,
        props.start,
        props.suffix,
        props.prefix,
        props.duration,
        props.separator,
        props.decimals,
        props.decimal,
        props.className,
        props.formattingFn
    ]);
    React.useEffect(function() {
        isInitializedRef.current = true;
    }, []);
    if (typeof children === 'function') {
        // TypeScript forces functional components to return JSX.Element | null.
        return children({
            countUpRef: containerRef,
            start: start,
            reset: reset,
            update: updateCountUp,
            pauseResume: pauseResume,
            getCountUp: getCountUp
        });
    }
    return /*#__PURE__*/ React.createElement("span", _extends({
        className: className,
        ref: containerRef,
        style: style
    }, containerProps), typeof props.start !== 'undefined' ? getCountUp().formattingFn(props.start) : '');
};
exports.default = CountUp;
exports.useCountUp = useCountUp;
}),
];

//# sourceMappingURL=_0tdjpd2._.js.map