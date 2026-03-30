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

    projeto_ultichat_desc: "UltiChat é um mensageiro em tempo real onde qualquer pessoa, de qualquer lugar, pode entrar e conversar. Construído com Node.js, Express e WebSockets, hospedado no Render.",
    projeto_ftf_desc: "Após a eleição do grêmio estudantil no colégio, me propus a desenvolver o site oficial da chapa For the Future, com páginas de propostas, novidades e informações sobre a equipe.",
    projeto_kc_desc: "Desenvolvido como trabalho de empreendedorismo, o Knowledge Core é uma plataforma de cursos online com sistema de login, catálogo de cursos e identidade visual própria.",
    projeto_larissa_desc: "Site de encomendas para uma confeitaria, com cardápio interativo, carrinho de compras e integração com WhatsApp. Projeto não finalizado: a cliente desistiu, mas a estrutura está completa.",
    projeto_wariobot_desc: "Bot de música para servidores Discord, desenvolvido em Node.js. Toca músicas por comando, gerencia fila de reprodução e roda 24/7 hospedado em nuvem.",

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

    projeto_ultichat_desc: "UltiChat is a real-time messenger where anyone, from anywhere, can join and chat. Built with Node.js, Express and WebSockets, hosted on Render.",
    projeto_ftf_desc: "After the student council election at school, I volunteered to build the official website for the For the Future campaign, featuring proposal pages, news updates and team info.",
    projeto_kc_desc: "Built as an entrepreneurship class project, Knowledge Core is an online course platform with a login system, course catalog and its own visual identity.",
    projeto_larissa_desc: "Ordering website for a confectionery business, featuring an interactive menu, shopping cart and WhatsApp checkout integration. Unfinished: the client backed out, but the full structure is in place.",
    projeto_wariobot_desc: "Music bot for Discord servers, built in Node.js. Plays songs on command, manages a playback queue and runs 24/7 hosted in the cloud.",

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