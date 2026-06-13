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
"[project]/src/utils/formSubmission.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GOOGLE_SHEET_URL",
    ()=>GOOGLE_SHEET_URL,
    "bookingValidationSchema",
    ()=>bookingValidationSchema,
    "buildLeadPayload",
    ()=>buildLeadPayload,
    "getUTM",
    ()=>getUTM,
    "leadValidationSchema",
    ()=>leadValidationSchema,
    "submitToGoogleSheet",
    ()=>submitToGoogleSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-ssr] (ecmascript)");
;
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxobI0C2E-HTczBbbsyWSKNq5U5mXJn6WTBGjHOn48ppKaDTqtKzo7vyHGqpP0OEdmiDg/exec";
const leadValidationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().trim().required("Name is required").matches(/^[a-zA-Z ]*$/, "Enter a valid name"),
    mobile: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().trim().required("Mobile number is required").matches(/^[0-9]{10}$/, "Enter a valid 10 digit mobile number"),
    branch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required("Please select a branch"),
    service: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required("Please select a service"),
    concern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"](),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]()
});
const bookingValidationSchema = leadValidationSchema.shape({
    concern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required("Please select who the concern is for")
});
function getUTM(key) {
    if ("TURBOPACK compile-time truthy", 1) return "";
    //TURBOPACK unreachable
    ;
}
function buildLeadPayload(values, formName) {
    return {
        name: values.name || "",
        mobile: values.mobile ? `+91${values.mobile}` : "",
        branch: values.branch || "",
        service: values.service || "",
        concern: values.concern || "",
        message: values.message || "",
        form_name: formName,
        page_name: "rio-childrens-hospital",
        submission_status: "lead",
        submitted_at: new Date().toISOString(),
        utm_source: getUTM("utm_source"),
        utm_medium: getUTM("utm_medium"),
        utm_campaign: getUTM("utm_campaign"),
        utm_term: getUTM("utm_term"),
        utm_content: getUTM("utm_content")
    };
}
async function submitToGoogleSheet(payload, retries = 3, delay = 1500) {
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, value])=>{
        params.append(key, value ?? "");
    });
    try {
        const res = await fetch(GOOGLE_SHEET_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params.toString()
        });
        if (!res.ok) {
            throw new Error("Google Sheet responded with non-OK status");
        }
        return true;
    } catch (error) {
        if (retries <= 1) {
            throw error;
        }
        await new Promise((resolve)=>setTimeout(resolve, delay));
        return submitToGoogleSheet(payload, retries - 1, delay);
    }
}
}),
"[project]/src/components/BookingSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formSubmission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formSubmission.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function BookingSection() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormik"])({
        initialValues: {
            name: "",
            mobile: "",
            branch: "",
            service: "",
            concern: "",
            message: ""
        },
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formSubmission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bookingValidationSchema"],
        onSubmit: async (values, helpers)=>{
            helpers.setStatus(null);
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formSubmission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitToGoogleSheet"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formSubmission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLeadPayload"])(values, "appointment_form"));
                router.push("/thank-you");
            } catch  {
                helpers.setStatus("Something went wrong. Please try again.");
            } finally{
                helpers.setSubmitting(false);
            }
        }
    });
    const getError = (field)=>formik.touched[field] && formik.errors[field] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: "field-error",
            children: formik.errors[field]
        }, void 0, false, {
            fileName: "[project]/src/components/BookingSection.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, this) : null;
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
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Book an appointment"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sec-note mt-14",
                            children: "Please fill in your details. Our team will call you back shortly."
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "contact-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        " +91 77083 18222"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingSection.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "Pin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        " Madurai - Southwing Madurai - Dindigul - Thanjavur"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingSection.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "24/7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        "Emergency, NICU & PICU - 24/7"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingSection.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Img"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMG"].advancedNICU25,
                            alt: "Advanced NICU care at Rio",
                            grad: 2,
                            className: "contact-img"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingSection.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingSection.jsx",
                    lineNumber: 46,
                    columnNumber: 9
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
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: formik.handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        placeholder: "Patient / Parent name",
                                                        ...formik.getFieldProps("name")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    getError("name")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        placeholder: "Mobile number",
                                                        type: "tel",
                                                        ...formik.getFieldProps("mobile")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    getError("mobile")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        ...formik.getFieldProps("branch"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                disabled: true,
                                                                children: "Location / branch preference"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                                lineNumber: 94,
                                                                columnNumber: 21
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRANCHES"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: b.short,
                                                                    children: b.short
                                                                }, b.short, false, {
                                                                    fileName: "[project]/src/components/BookingSection.jsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this),
                                                    getError("branch")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        ...formik.getFieldProps("service"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                disabled: true,
                                                                children: "Service needed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES_DD"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: s,
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/src/components/BookingSection.jsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BookingSection.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    getError("service")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row form-row-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    ...formik.getFieldProps("concern"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            disabled: true,
                                                            children: "Concern is for..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingSection.jsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Child",
                                                            children: "Child"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingSection.jsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Mother",
                                                            children: "Mother"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingSection.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Newborn",
                                                            children: "Newborn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingSection.jsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingSection.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this),
                                                getError("concern")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "lbl-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Message (optional)",
                                            rows: 3,
                                            ...formik.getFieldProps("message")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingSection.jsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    formik.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "form-error",
                                        children: formik.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 139,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn btn-pink btn-full",
                                        disabled: formik.isSubmitting,
                                        children: [
                                            formik.isSubmitting ? "Submitting..." : "Request a Call Back",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "arr",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingSection.jsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingSection.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingSection.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingSection.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingSection.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingSection.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BookingSection.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
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
];

//# sourceMappingURL=src_1ixldfw._.js.map