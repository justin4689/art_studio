// ============================
// MENU TOGGLE
// ============================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("lang__btn")) return;
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

// ============================
// SCROLL REVEAL
// ============================
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".header__content h2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".header__btn", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".header__socials li", { ...scrollRevealOption, delay: 2500, interval: 500 });

ScrollReveal().reveal(".section__subheader", { ...scrollRevealOption });
ScrollReveal().reveal(".section__header", { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal(".services__card", { ...scrollRevealOption, delay: 300, interval: 200 });

ScrollReveal().reveal(".about__image", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__description", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".about__stat", { ...scrollRevealOption, delay: 500, interval: 200 });
ScrollReveal().reveal(".about__content .btn", { ...scrollRevealOption, delay: 700 });

ScrollReveal().reveal(".classes__card", { ...scrollRevealOption, delay: 200, interval: 200 });

ScrollReveal().reveal(".banner__image", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".banner__content p", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".banner__content .btn", { ...scrollRevealOption, delay: 500 });

ScrollReveal().reveal(".contact__info__item", { ...scrollRevealOption, origin: "left", interval: 150 });
ScrollReveal().reveal(".contact__form input", { ...scrollRevealOption, origin: "right", interval: 100 });
ScrollReveal().reveal(".contact__form textarea", { ...scrollRevealOption, origin: "right", delay: 300 });
ScrollReveal().reveal(".contact__form .btn", { ...scrollRevealOption, delay: 500 });

// ============================
// TRANSLATIONS
// ============================
const translations = {
  en: {
    "nav.home": "HOME",
    "nav.service": "SERVICE",
    "nav.portfolio": "PORTFOLIO",
    "nav.contact": "CONTACT US",
    "header.badge": "JOIN OUR CLUB",
    "header.title": "Yoga For Your Healthy Life",
    "header.desc": "Join our club and discover the true benefits of yoga. Enhance flexibility, reduce stress, and embrace a healthier, balanced lifestyle with guided sessions made for everyone.",
    "header.btn": "BOOK NOW",
    "services.subheader": "WHAT WE OFFER",
    "services.header": "Our Yoga Services",
    "services.hatha.title": "Hatha Yoga",
    "services.hatha.desc": "Balance your body and mind with classic Hatha poses, breathing techniques, and deep stretching sessions for all levels.",
    "services.meditation.title": "Meditation",
    "services.meditation.desc": "Find inner peace with guided meditation practices designed to reduce stress, improve focus, and restore mental clarity.",
    "services.vinyasa.title": "Vinyasa Flow",
    "services.vinyasa.desc": "Energize your practice with dynamic sequences that link breath to movement in a powerful, flowing yoga style.",
    "services.yin.title": "Yin Yoga",
    "services.yin.desc": "Release deep tension with slow-paced, floor-based poses held for longer durations to increase flexibility and relaxation.",
    "about.subheader": "ABOUT US",
    "about.header": "Why Practice Yoga With Us?",
    "about.desc": "At our studio, we believe yoga is for everyone. Whether you're a complete beginner or a seasoned practitioner, our certified instructors guide you through every step of your journey toward a healthier, more balanced life.",
    "about.stat1": "Years of Experience",
    "about.stat2": "Happy Members",
    "about.stat3": "Expert Instructors",
    "about.btn": "LEARN MORE",
    "classes.subheader": "OUR CLASSES",
    "classes.header": "Find The Right Class For You",
    "classes.outdoor.title": "Outdoor Yoga",
    "classes.outdoor.schedule": "Mon, Wed, Fri · 8:00 AM",
    "classes.outdoor.price": "$25 / session",
    "classes.group.title": "Group Sessions",
    "classes.group.schedule": "Tue, Thu · 10:00 AM",
    "classes.group.price": "$20 / session",
    "classes.advanced.title": "Advanced Flow",
    "classes.advanced.schedule": "Sat, Sun · 7:00 AM",
    "classes.advanced.price": "$30 / session",
    "banner.subheader": "INNER PEACE",
    "banner.header": "Begin Your Meditation Journey",
    "banner.desc": "Let go of the noise and discover the stillness within. Our meditation classes help you breathe, slow down, and reconnect with yourself through guided sessions and mindful movement.",
    "banner.btn": "START TODAY",
    "contact.subheader": "CONTACT US",
    "contact.header": "Get In Touch",
    "contact.location.title": "Location",
    "contact.location.value": "123 Wellness Ave, New York, NY 10001",
    "contact.phone.title": "Phone",
    "contact.email.title": "Email",
    "contact.hours.title": "Hours",
    "contact.hours.value": "Mon – Fri: 6AM – 8PM | Sat–Sun: 7AM – 5PM",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.btn": "SEND MESSAGE",
    "footer.desc": "Join our yoga community and transform your life through mindful movement, breathwork, and inner peace.",
    "footer.links.title": "Quick Links",
    "footer.links.home": "Home",
    "footer.links.services": "Services",
    "footer.links.classes": "Classes",
    "footer.links.contact": "Contact",
    "footer.classes.title": "Classes",
    "footer.schedule.title": "Schedule",
    "footer.schedule.1": "Mon – Fri: 6AM – 8PM",
    "footer.schedule.2": "Saturday: 7AM – 6PM",
    "footer.schedule.3": "Sunday: 8AM – 4PM",
    "footer.copyright": "© 2025 Yoga Club. All Rights Reserved.",
  },

  fr: {
    "nav.home": "ACCUEIL",
    "nav.service": "SERVICES",
    "nav.portfolio": "COURS",
    "nav.contact": "CONTACTEZ-NOUS",
    "header.badge": "REJOIGNEZ NOTRE CLUB",
    "header.title": "Le Yoga Pour une Vie Saine",
    "header.desc": "Rejoignez notre club et découvrez les véritables bienfaits du yoga. Améliorez votre flexibilité, réduisez le stress et adoptez un mode de vie plus sain et équilibré avec des séances guidées pour tous.",
    "header.btn": "RÉSERVER",
    "services.subheader": "NOS OFFRES",
    "services.header": "Nos Services Yoga",
    "services.hatha.title": "Hatha Yoga",
    "services.hatha.desc": "Équilibrez votre corps et votre esprit avec les postures classiques du Hatha, les techniques de respiration et des séances d’étirement profond pour tous les niveaux.",
    "services.meditation.title": "Méditation",
    "services.meditation.desc": "Trouvez la paix intérieure avec des pratiques de méditation guidées conçues pour réduire le stress, améliorer la concentration et restaurer la clarté mentale.",
    "services.vinyasa.title": "Vinyasa Flow",
    "services.vinyasa.desc": "Dynamisez votre pratique avec des séquences dynamiques qui relient le souffle au mouvement dans un style de yoga puissant et fluide.",
    "services.yin.title": "Yin Yoga",
    "services.yin.desc": "Relâchez les tensions profondes avec des postures lentes au sol maintenues plus longtemps pour augmenter la flexibilité et favoriser la relaxation.",
    "about.subheader": "À PROPOS",
    "about.header": "Pourquoi Pratiquer le Yoga Avec Nous ?",
    "about.desc": "Dans notre studio, nous croyons que le yoga est pour tout le monde. Que vous soyez débutant ou pratiquant expérimenté, nos instructeurs certifiés vous guident à chaque étape de votre parcours vers une vie plus saine et équilibrée.",
    "about.stat1": "Ans d’Expérience",
    "about.stat2": "Membres Satisfaits",
    "about.stat3": "Instructeurs Experts",
    "about.btn": "EN SAVOIR PLUS",
    "classes.subheader": "NOS COURS",
    "classes.header": "Trouvez le Cours Qui Vous Convient",
    "classes.outdoor.title": "Yoga en Plein Air",
    "classes.outdoor.schedule": "Lun, Mer, Ven · 8h00",
    "classes.outdoor.price": "25 $ / séance",
    "classes.group.title": "Séances en Groupe",
    "classes.group.schedule": "Mar, Jeu · 10h00",
    "classes.group.price": "20 $ / séance",
    "classes.advanced.title": "Flow Avancé",
    "classes.advanced.schedule": "Sam, Dim · 7h00",
    "classes.advanced.price": "30 $ / séance",
    "banner.subheader": "PAIX INTÉRIEURE",
    "banner.header": "Commencez Votre Voyage de Méditation",
    "banner.desc": "Laissez aller le bruit et découvrez le silence intérieur. Nos cours de méditation vous aident à respirer, ralentir et vous reconnecter à vous-même à travers des séances guidées et des mouvements conscients.",
    "banner.btn": "COMMENCER AUJOURD’HUI",
    "contact.subheader": "CONTACTEZ-NOUS",
    "contact.header": "Entrez en Contact",
    "contact.location.title": "Adresse",
    "contact.location.value": "123 Avenue du Bien-être, New York, NY 10001",
    "contact.phone.title": "Téléphone",
    "contact.email.title": "E-mail",
    "contact.hours.title": "Horaires",
    "contact.hours.value": "Lun – Ven : 6h – 20h | Sam–Dim : 7h – 17h",
    "contact.form.name": "Votre Nom",
    "contact.form.email": "Votre E-mail",
    "contact.form.message": "Votre Message",
    "contact.form.btn": "ENVOYER",
    "footer.desc": "Rejoignez notre communauté yoga et transformez votre vie grâce au mouvement conscient, au travail respiratoire et à la paix intérieure.",
    "footer.links.title": "Liens Rapides",
    "footer.links.home": "Accueil",
    "footer.links.services": "Services",
    "footer.links.classes": "Cours",
    "footer.links.contact": "Contact",
    "footer.classes.title": "Cours",
    "footer.schedule.title": "Horaires",
    "footer.schedule.1": "Lun – Ven : 6h – 20h",
    "footer.schedule.2": "Samedi : 7h – 18h",
    "footer.schedule.3": "Dimanche : 8h – 16h",
    "footer.copyright": "© 2025 Yoga Club. Tous droits réservés.",
  },

  es: {
    "nav.home": "INICIO",
    "nav.service": "SERVICIOS",
    "nav.portfolio": "CLASES",
    "nav.contact": "CONTÁCTANOS",
    "header.badge": "ÚkETE A NUESTRO CLUB",
    "header.title": "Yoga Para una Vida Saludable",
    "header.desc": "Únete a nuestro club y descubre los verdaderos beneficios del yoga. Mejora tu flexibilidad, reduce el estrés y adopta un estilo de vida más saludable y equilibrado con sesiones guiadas para todos.",
    "header.btn": "RESERVAR AHORA",
    "services.subheader": "LO QUE OFRECEMOS",
    "services.header": "Nuestros Servicios de Yoga",
    "services.hatha.title": "Hatha Yoga",
    "services.hatha.desc": "Equilibra tu cuerpo y mente con posturas clásicas de Hatha, técnicas de respiración y sesiones de estiramiento profundo para todos los niveles.",
    "services.meditation.title": "Meditación",
    "services.meditation.desc": "Encuentra la paz interior con prácticas de meditación guiada diseñadas para reducir el estrés, mejorar la concentración y restaurar la claridad mental.",
    "services.vinyasa.title": "Vinyasa Flow",
    "services.vinyasa.desc": "Energiza tu práctica con secuencias dinámicas que vinculan la respiración con el movimiento en un poderoso y fluido estilo de yoga.",
    "services.yin.title": "Yin Yoga",
    "services.yin.desc": "Libera la tensión profunda con posturas lentas en el suelo mantenidas por períodos más largos para aumentar la flexibilidad y promover la relajación.",
    "about.subheader": "SOBRE NOSOTROS",
    "about.header": "¿Por Qué Practicar Yoga Con Nosotros?",
    "about.desc": "En nuestro estudio, creemos que el yoga es para todos. Seas un principiante o un practicante experimentado, nuestros instructores certificados te guían en cada paso de tu camino hacia una vida más saludable y equilibrada.",
    "about.stat1": "Años de Experiencia",
    "about.stat2": "Miembros Felices",
    "about.stat3": "Instructores Expertos",
    "about.btn": "SABER MÁS",
    "classes.subheader": "NUESTRAS CLASES",
    "classes.header": "Encuentra la Clase Adecuada Para Ti",
    "classes.outdoor.title": "Yoga al Aire Libre",
    "classes.outdoor.schedule": "Lun, Mié, Vie · 8:00 AM",
    "classes.outdoor.price": "$25 / sesión",
    "classes.group.title": "Sesiones Grupales",
    "classes.group.schedule": "Mar, Jue · 10:00 AM",
    "classes.group.price": "$20 / sesión",
    "classes.advanced.title": "Flow Avanzado",
    "classes.advanced.schedule": "Sáb, Dom · 7:00 AM",
    "classes.advanced.price": "$30 / sesión",
    "banner.subheader": "PAZ INTERIOR",
    "banner.header": "Comienza Tu Viaje de Meditación",
    "banner.desc": "Deja ir el ruido y descubre la quietud interior. Nuestras clases de meditación te ayudan a respirar, reducir el ritmo y reconectarte contigo mismo a través de sesiones guiadas y movimiento consciente.",
    "banner.btn": "EMPEZAR HOY",
    "contact.subheader": "CONTÁCTANOS",
    "contact.header": "Ponte en Contacto",
    "contact.location.title": "Ubicación",
    "contact.location.value": "123 Wellness Ave, Nueva York, NY 10001",
    "contact.phone.title": "Teléfono",
    "contact.email.title": "Correo Electrónico",
    "contact.hours.title": "Horario",
    "contact.hours.value": "Lun – Vie: 6AM – 8PM | Sáb–Dom: 7AM – 5PM",
    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Tu Correo",
    "contact.form.message": "Tu Mensaje",
    "contact.form.btn": "ENVIAR MENSAJE",
    "footer.desc": "Unéte a nuestra comunidad de yoga y transforma tu vida a través del movimiento consciente, el trabajo de respiración y la paz interior.",
    "footer.links.title": "Enlaces Rápidos",
    "footer.links.home": "Inicio",
    "footer.links.services": "Servicios",
    "footer.links.classes": "Clases",
    "footer.links.contact": "Contacto",
    "footer.classes.title": "Clases",
    "footer.schedule.title": "Horario",
    "footer.schedule.1": "Lun – Vie: 6AM – 8PM",
    "footer.schedule.2": "Sábado: 7AM – 6PM",
    "footer.schedule.3": "Domingo: 8AM – 4PM",
    "footer.copyright": "© 2025 Yoga Club. Todos los derechos reservados.",
  },

  de: {
    "nav.home": "STARTSEITE",
    "nav.service": "ANGEBOTE",
    "nav.portfolio": "KURSE",
    "nav.contact": "KONTAKT",
    "header.badge": "TRITT UNSEREM CLUB BEI",
    "header.title": "Yoga Für ein Gesundes Leben",
    "header.desc": "Tritt unserem Club bei und entdecke die wahren Vorteile von Yoga. Verbessere deine Flexibilität, reduziere Stress und lebe ein gesünderes, ausgeglichenes Leben mit geführten Stunden für alle.",
    "header.btn": "JETZT BUCHEN",
    "services.subheader": "UNSER ANGEBOT",
    "services.header": "Unsere Yoga-Angebote",
    "services.hatha.title": "Hatha Yoga",
    "services.hatha.desc": "Bringe Körper und Geist mit klassischen Hatha-Positionen, Atemtechniken und intensiven Dehübungen für alle Niveaus ins Gleichgewicht.",
    "services.meditation.title": "Meditation",
    "services.meditation.desc": "Finde inneren Frieden mit geführten Meditationspraktiken, die Stress reduzieren, die Konzentration verbessern und geistige Klarheit wiederherstellen.",
    "services.vinyasa.title": "Vinyasa Flow",
    "services.vinyasa.desc": "Belebe deine Praxis mit dynamischen Sequenzen, die Atmung und Bewegung in einem kraftvollen, fließenden Yoga-Stil verbinden.",
    "services.yin.title": "Yin Yoga",
    "services.yin.desc": "Löse tiefe Verspannungen mit langsamen, bodennahen Positionen, die länger gehalten werden, um Flexibilität und Entspannung zu fördern.",
    "about.subheader": "ÜBER UNS",
    "about.header": "Warum Yoga Mit Uns Praktizieren?",
    "about.desc": "In unserem Studio glauben wir, dass Yoga für jeden geeignet ist. Ob Anfänger oder erfahrener Praktizierender – unsere zertifizierten Lehrer begleiten dich auf jedem Schritt deiner Reise zu einem gesünderen, ausgeglichenen Leben.",
    "about.stat1": "Jahre Erfahrung",
    "about.stat2": "Zufriedene Mitglieder",
    "about.stat3": "Experten-Trainer",
    "about.btn": "MEHR ERFAHREN",
    "classes.subheader": "UNSERE KURSE",
    "classes.header": "Finde den Richtigen Kurs Für Dich",
    "classes.outdoor.title": "Outdoor Yoga",
    "classes.outdoor.schedule": "Mo, Mi, Fr · 8:00 Uhr",
    "classes.outdoor.price": "25 $ / Stunde",
    "classes.group.title": "Gruppeneinheiten",
    "classes.group.schedule": "Di, Do · 10:00 Uhr",
    "classes.group.price": "20 $ / Stunde",
    "classes.advanced.title": "Fortgeschrittener Flow",
    "classes.advanced.schedule": "Sa, So · 7:00 Uhr",
    "classes.advanced.price": "30 $ / Stunde",
    "banner.subheader": "INNERER FRIEDEN",
    "banner.header": "Beginne Deine Meditationsreise",
    "banner.desc": "Lass den Lärm hinter dir und entdecke die Stille in dir. Unsere Meditationskurse helfen dir, zu atmen, zu entschleunigen und dich durch geführte Sitzungen und achtsame Bewegung wieder mit dir selbst zu verbinden.",
    "banner.btn": "HEUTE STARTEN",
    "contact.subheader": "KONTAKT",
    "contact.header": "Nimm Kontakt Auf",
    "contact.location.title": "Adresse",
    "contact.location.value": "123 Wellness Ave, New York, NY 10001",
    "contact.phone.title": "Telefon",
    "contact.email.title": "E-Mail",
    "contact.hours.title": "Öffnungszeiten",
    "contact.hours.value": "Mo – Fr: 6–20 Uhr | Sa–So: 7–17 Uhr",
    "contact.form.name": "Dein Name",
    "contact.form.email": "Deine E-Mail",
    "contact.form.message": "Deine Nachricht",
    "contact.form.btn": "NACHRICHT SENDEN",
    "footer.desc": "Tritt unserer Yoga-Gemeinschaft bei und verändere dein Leben durch achtsame Bewegung, Atemarbeit und inneren Frieden.",
    "footer.links.title": "Schnelllinks",
    "footer.links.home": "Startseite",
    "footer.links.services": "Angebote",
    "footer.links.classes": "Kurse",
    "footer.links.contact": "Kontakt",
    "footer.classes.title": "Kurse",
    "footer.schedule.title": "Öffnungszeiten",
    "footer.schedule.1": "Mo – Fr: 6–20 Uhr",
    "footer.schedule.2": "Samstag: 7–18 Uhr",
    "footer.schedule.3": "Sonntag: 8–16 Uhr",
    "footer.copyright": "© 2025 Yoga Club. Alle Rechte vorbehalten.",
  },
};

// ============================
// COUNTRY → LANGUAGE MAP
// ============================
const countryToLang = {
  // French-speaking countries
  FR: "fr", BE: "fr", LU: "fr", MC: "fr",
  SN: "fr", ML: "fr", CI: "fr", CM: "fr", MG: "fr",
  BF: "fr", NE: "fr", TG: "fr", BJ: "fr", GN: "fr",
  CD: "fr", CG: "fr", GA: "fr", HT: "fr",
  DZ: "fr", MA: "fr", TN: "fr",
  // Spanish-speaking countries
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es",
  PE: "es", VE: "es", EC: "es", GT: "es", CU: "es",
  BO: "es", DO: "es", HN: "es", PY: "es", SV: "es",
  NI: "es", CR: "es", PA: "es", UY: "es", GQ: "es",
  // German-speaking countries
  DE: "de", AT: "de", LI: "de", CH: "de",
};

// ============================
// SET LANGUAGE
// ============================
function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem("preferredLang", lang);
}

// ============================
// DETECT LANGUAGE BY COUNTRY
// ============================
async function detectLanguage() {
  const saved = localStorage.getItem("preferredLang");
  if (saved && translations[saved]) {
    setLanguage(saved);
    return;
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
    clearTimeout(timer);
    const data = await res.json();
    const lang = countryToLang[data.country_code] || "en";
    setLanguage(lang);
  } catch {
    const browser = navigator.language.slice(0, 2).toLowerCase();
    setLanguage(["fr", "es", "de"].includes(browser) ? browser : "en");
  }
}

// ============================
// LANGUAGE SWITCHER BUTTONS
// ============================
document.querySelectorAll(".lang__btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

detectLanguage();
