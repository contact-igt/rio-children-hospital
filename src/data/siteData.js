export const IMG = {
  /* 1. HERO — emotional anchor: mother & newborn / NICU moment */
  hero: "/assets/banner.png",
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


  /* 2. HERO TRUST STACK — 3 tiny circular photos (happy families / doctors) */
  g1: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80",
  g3: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80",
  g4: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=700&q=80",

  /* 3. EMERGENCY GUIDE CARDS — newborn / child / pregnant mother */
  newborn: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
  pediatrics: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
  pregnancy: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&w=900&q=80",

  /* 4. CRITICAL CARE SERVICE CARDS — ER / NICU / PICU / ambulance */
  nicu: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  ambulance: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=900&q=80",

  /* 5. MATERNITY + CHILD HEALTH SPLITS — real consultation photos */
  maternity: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
  childDoc: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80",
};

/* 6. BRANCH PHOTOS — exterior / entrance shot of each hospital building */
export const BRANCHES = [
  {
    name: "Rio — Madurai",
    short: "Madurai",
    img: IMG.branch1,
    grad: 0,
    address: "Tuticorin Ring Road, Masthanpati, Madurai – 625 020", // ★ replace
    phone: "tel:+917708318222",
    phoneNumber: "+91 77083 18222",
    maps: "https://maps.app.goo.gl/9H1xwDxZo1NYsNpr9",
  },
  {
    name: "Rio — Southwing Madurai",
    short: "Southwing Madurai",
    img: IMG.branch2,
    grad: 1,
    address: "41, Madakulam Main Rd, Pasumpon Nagar, Palangantham, Madurai, Tamil Nadu 625003", // ★ replace
    phone: "tel:+917418661222",
    phoneNumber: "+91 74186 61222",
    maps: "https://maps.app.goo.gl/vWb9iFHrdpMk19gA6",
  },
  {
    name: "Rio — Dindigul",
    short: "Dindigul",
    img: IMG.branch3,
    grad: 2,
    address: "10, Palani Rd, New Agraharam, Govindapuram, Dindigul, Tamil Nadu 624001", // ★ replace
    phone: "tel:+917845464333",
    phoneNumber: "+91 78454 64333",
    maps: "https://maps.app.goo.gl/n4oeaCTqyG65o9PJ9",
  },
  {
    name: "Rio — Thanjavur",
    short: "Thanjavur",
    img: IMG.branch4,
    grad: 0,
    address: "21/3082, 1st St, VOC Nagar, Parisutham Nagar, Thanjavur, Tamil Nadu 613007", // ★ replace
    phone: "tel:+918220542555",
    phoneNumber: "+91 82205 42555",
    maps: "https://maps.app.goo.gl/CCzPXkhzDNju49dj6",
  },
];

/* 7. INFRASTRUCTURE GALLERY — wards, OT, lab, imaging, pharmacy, ambulance bay */
export const INFRA = [
  { cap: "Advanced NICU ward", img: IMG.criticalCare1, grad: 0, big: true },
  { cap: "Modular operation theatre", img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80", grad: 1 },
  { cap: "Paediatric emergency ward", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80", grad: 1 },
  { cap: "Ambulance & neonatal transport", img: IMG.emergency2, grad: 0, big: true },
  { cap: "Vaccination centre", img: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=900&q=80", grad: 2 },
  { cap: "In-house pharmacy", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80", grad: 2 },
];

/* social / quick-action links — replace with Rio's real URLs */
export const LINKS = {
  phone: "tel:+917708318222",
  maps: "https://maps.google.com/?q=Rio+Children's+Hospital+Madurai",
  instagram: "https://instagram.com/riochildrenshospital",
  youtube: "https://youtube.com/@riochildrenshospital",
};

export const HIGHLIGHTS = [
  "24/7 Paediatric Emergency Care",
  "Advanced NICU & PICU Support",
  "Maternity & Obstetric Care",
  "Emergency Doctors Round the Clock",
  "Lab, Pharmacy & Ambulance Support",
];

export const STATS = [
  { n: 6, suffix: " Lacs+", label: "Patient care" },
  { n: 100, suffix: "+", label: "Expert specialists" },
  { n: 1, suffix: " Lac+", label: "Families helped" },
  { n: 5000, suffix: "+", label: "High-risk pregnancies" },
  { n: 12, suffix: "+", label: "Years of experience" },
  { n: 4, suffix: "", label: "Branches in Tamil Nadu" },
];

export const EMERGENCY = [
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
      "Seizures or unusual body movements",
    ],
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
      "Severe asthma or respiratory distress",
    ],
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
      "Postnatal mother & baby concerns",
    ],
  },
];

export const WHY = [
  {
    t: "24/7 Emergency Support",
    d: "Our emergency team is available round the clock for newborns, children, pregnant women and mothers.",
  },
  {
    t: "Advanced NICU Care",
    d: "Equipped for premature babies, critically ill newborns, jaundice care, ventilator support and specialised neonatal treatment.",
    dark: true,
  },
  {
    t: "Paediatric Intensive Care",
    d: "PICU critical care for severe respiratory distress, asthma, shock, dehydration, dengue, fits, meningitis and cardiac problems.",
  },
  {
    t: "Complete Women & Maternity Care",
    d: "Early pregnancy care to delivery, high-risk pregnancy support, obstetric emergencies and gynaecological care under one roof.",
  },
  {
    t: "Support Services Under One Roof",
    d: "24-hour lab, pharmacy, imaging, vaccination, ambulance and home care support for faster, coordinated care.",
  },
];

export const SERVICES = [
  {
    t: "24/7 Paediatric Emergency Care",
    d: "Immediate care for fever, breathing difficulty, dehydration, accidents, seizures and infections.",
    img: IMG.criticalCare1,
    grad: 1,
  },
  {
    t: "NICU — Neonatal Intensive Care",
    d: "Specialised care for premature babies, newborn complications, jaundice, breathing issues and low birth weight.",
    img: IMG.criticalCare2,
    grad: 0,
  },
  {
    t: "PICU — Paediatric Intensive Care",
    d: "Continuous monitoring, respiratory support, emergency treatment and specialist-led critical care for children.",
    img: IMG.criticalCare3,
    grad: 2,
  },
  {
    t: "Ambulance & Neonatal Transport",
    d: "Emergency transport for newborns and children with trained medical teams and critical care facilities.",
    img: IMG.criticalCare4,
    grad: 1,
  },
];

export const MATERNITY = [
  "Early pregnancy care",
  "Antenatal check-ups",
  "Obstetric care",
  "High-risk pregnancy support",
  "Normal delivery & C-section care",
  "Gynaec care",
  "Anomaly scan",
  "Doppler study",
  "Abdomen & pelvis scan",
  "Postnatal care for mother & baby",
];

export const CHILD = [
  "General paediatrics",
  "Fever and infections",
  "Cold, cough, wheezing & asthma",
  "Vomiting and diarrhoea",
  "Nutritional deficiencies",
  "Skin infections",
  "Urinary tract infections",
  "Paediatric accidents & injuries",
  "Vaccination services",
  "Developmental & specialist care",
];

export const FACILITIES = [
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
  "Ambulance Services",
];

export const SERVICES_DD = [
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
  "Other",
];

export const FAQS = [
  {
    q: "Is Rio available for paediatric emergencies 24/7?",
    a: "Yes. Rio provides 24/7 paediatric emergency care for children who need urgent medical attention.",
  },
  {
    q: "Does Rio provide NICU care for newborn babies?",
    a: "Yes. Rio has advanced NICU facilities for premature babies, newborn complications, jaundice care, ventilator support and critical neonatal monitoring.",
  },
  {
    q: "When should I bring my child to the emergency department?",
    a: "Visit immediately if your child has breathing difficulty, high fever, seizures, severe vomiting, dehydration, dengue symptoms, injury or unusual drowsiness.",
  },
  {
    q: "Does Rio provide care for pregnant women?",
    a: "Yes. Rio provides maternity care, obstetric care, early pregnancy care, antenatal check-ups, scans, high-risk pregnancy support and delivery care.",
  },
  {
    q: "Are lab and pharmacy services available?",
    a: "Yes. Rio has 24-hour laboratory support and pharmacy facilities to support emergency and routine care.",
  },
  {
    q: "Can I book vaccination for my child?",
    a: "Yes. Rio provides vaccination services from birth to adolescence, along with reminders to help parents stay on schedule.",
  },
];
