const texts = {
  ar: {
    header: "أهلاً، أنا رغد العاصمي",
    navHome: "الصفحة الرئيسية",
    navResume: "السيرة الذاتية",
    navProjects: "المشاريع",
    navContact: "الاتصال",
    sectionTitle: "مرحباً بك في موقعي الشخصي!",
    sectionContent: "أنا رغد، مبرمجة ومهتمة بتطوير الويب.",
    footer: "&copy; 2024 موقعي الشخصي. جميع الحقوق محفوظة.",
  },
  en: {
    header: "Hello, I am Rahgad",
    navHome: "Home",
    navResume: "Resume",
    navProjects: "Projects",
    navContact: "Contact",
    sectionTitle: "Welcome to my personal website!",
    sectionContent: "I am Raghad, a developer interested in web development.",
    footer: "&copy; 2024 My Personal Website. All rights reserved.",
  },
};

function switchLanguage(lang) {
  const data = texts[lang];
  document.getElementById("header").innerText = data.header;
  document.getElementById("navHome").innerText = data.navHome;
  document.getElementById("navResume").innerText = data.navResume;
  document.getElementById("navProjects").innerText = data.navProjects;
  document.getElementById("navContact").innerText = data.navContact;
  document.getElementById("sectionTitle").innerText = data.sectionTitle;
  document.getElementById("sectionContent").innerText = data.sectionContent;
  document.getElementById("footer").innerHTML = data.footer;
}
