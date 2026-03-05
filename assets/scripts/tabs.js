const menuLinks = document.querySelectorAll('.sidebar-menu a');
const tabs = document.querySelectorAll('.tab');

const tabTitles = {
  inicio: "Profile",
  projetos: "Projects",
  contatos: "Contact",
  feedback: "Feedback"
};

function abrirTab(id) {
  // tabs
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  const tabAtiva = document.getElementById(id);
  if (tabAtiva) {
    tabAtiva.classList.add('active');
  }

  // menu
menuLinks.forEach(link => {
  link.classList.remove('active');

  if (link.dataset.tab === id) {
    link.classList.add('active');

    const lang = window.currentLang || "pt";
    const t = window.translations[lang];

    const sectionTitle = t[id] || id;
    const portfolioTitle = t.portfolio || "Portfólio";

    document.title = `${sectionTitle} | ${portfolioTitle}`;
  }
});
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    abrirTab(link.dataset.tab);
  });
});

// inicia com "inicio"
abrirTab('inicio');
