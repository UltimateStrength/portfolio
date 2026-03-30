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

    contatos_titulo: "Entre em contato por aqui:",
    contatos_email_btn: "Copiar e-mail",
    contatos_email_subject: "Contato via Portfolio",

    feedback_titulo: "O que você achou? Dê sua opinião",
    feedback_nome: "Seu nome",
    feedback_contato: "E-mail ou rede social (opcional)",
    feedback_titulo_campo: "Assunto",
    feedback_mensagem: "Sua mensagem...",
    feedback_avaliacao: "Avaliação:",
    feedback_enviar: "Enviar",

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

    contatos_titulo: "Contact me here:",
    contatos_email_btn: "Send e-mail to clipboard",
    contatos_email_subject: "Contact via Portfolio",

    feedback_titulo: "What do you think? Share your opinion.",
    feedback_nome: "Your name",
    feedback_contato: "E-mail or social media (optional)",
    feedback_titulo_campo: "Subject",
    feedback_mensagem: "Your message...",
    feedback_avaliacao: "Rating:",
    feedback_enviar: "Submit",

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

  // handler que faltava — atualiza placeholders dos inputs/textareas
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
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