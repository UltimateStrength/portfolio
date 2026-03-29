window.translations = {
  pt: {
    menu_inicio: "PERFIL",
    menu_projetos: "PROJETOS",
    menu_contatos: "CONTATO",
    menu_feedback: "FEEDBACK",

    inicio: "Perfil",
    projetos: "Projetos",
    contatos: "Contato",
    feedback: "Feedback",
    portfolio: "Portfólio",

    projeto_1_desc:
      "Realizei um trabalho como tradutor em PVZ: Its Still Versus Time trazendo o jogo para o português brasileiro.",

    em_producao_1: "Entre em contato por aqui:",
    em_producao_2: "TO FAZENDO AINDA 2",

    typed: [
      "Entusiasta de Software",
      "Tradutor",
      "Desenvolvedor de Jogos",
      "Entusiasta de Hardware",
    ]
  },

  en: {
    menu_inicio: "PROFILE",
    menu_projetos: "PROJECTS",
    menu_contatos: "CONTACT",
    menu_feedback: "FEEDBACK",

    inicio: "Profile",
    projetos: "Projects",
    contatos: "Contact",
    feedback: "Feedback",
    portfolio: "Portfolio",

    projeto_1_desc:
      "I worked as a translator on PVZ: It's Still Versus Time, bringing the game to Brazilian Portuguese.",

    em_producao_1: "Contact me here:",
    em_producao_2: "WORK IN PROGRESS 2",

    typed: [
      "Software Enthusiast",
      "Translator",
      "Game Developer",
      "Hardware Enthusiast",
    ]
  }
};

window.currentLang = Storage.get("language", "pt");

function applyLanguage(lang) {
window.currentLang = lang;
Storage.set("language", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (typeof updateTypedText === "function") {
    updateTypedText(translations[lang].typed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-btn");

  applyLanguage(window.currentLang);

  buttons.forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.lang === window.currentLang
    );

    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      applyLanguage(lang);

      buttons.forEach(b =>
        b.classList.toggle("active", b === btn)
      );
    });
  });
});

