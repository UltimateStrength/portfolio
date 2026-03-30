(function () {
  let notaSelecionada = 0;
  const estrelas = document.querySelectorAll("#fb-estrelas span");
  const label = document.getElementById("fb-estrelas-label");

  // Interação das estrelas
  estrelas.forEach((star) => {
    star.addEventListener("mouseover", () => highlight(+star.dataset.valor));
    star.addEventListener("mouseout", () => highlight(notaSelecionada));
    star.addEventListener("click", () => {
      notaSelecionada = +star.dataset.valor;
      highlight(notaSelecionada);
    });
  });

  function highlight(n) {
    estrelas.forEach((s) => {
      s.classList.toggle("ativa", +s.dataset.valor <= n);
    });
    label.textContent = n ? `${n}/5` : "";
  }

  // Envio
  document.getElementById("fb-enviar").addEventListener("click", () => {
    const nome = document.getElementById("fb-nome").value.trim();
    const contato = document.getElementById("fb-contato").value.trim();
    const titulo = document.getElementById("fb-titulo").value.trim();
    const mensagem = document.getElementById("fb-mensagem").value.trim();
    const status = document.getElementById("fb-status");

    if (!nome || !mensagem) {
      status.textContent = "Preencha pelo menos nome e mensagem.";
      status.className = "fb-status erro";
      return;
    }

    const templateParams = {
      nome,
      contato: contato || "Não informado",
      titulo: titulo || "Sem assunto",
      mensagem,
      nota: notaSelecionada ? `${notaSelecionada}/5` : "Não avaliado",
    };

    document.getElementById("fb-enviar").disabled = true;

    emailjs
      .send("service_0lo93bh", "template_pjs71q3", templateParams)
      .then(() => {
        status.textContent = "Feedback enviado! Obrigado 🙌";
        status.className = "fb-status sucesso";
        // reset
        ["fb-nome", "fb-contato", "fb-titulo", "fb-mensagem"].forEach(
          (id) => (document.getElementById(id).value = "")
        );
        notaSelecionada = 0;
        highlight(0);
      })
      .catch((err) => {
        console.error(err);
        status.textContent = "Erro ao enviar. Tente novamente.";
        status.className = "fb-status erro";
      })
      .finally(() => {
        document.getElementById("fb-enviar").disabled = false;
      });
  });
})();