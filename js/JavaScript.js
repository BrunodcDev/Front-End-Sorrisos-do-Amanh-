
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente carregado!");
  
  // === FORMULÁRIO DE VOLUNTÁRIO (só na página cadastro.html) ===
  const form = document.getElementById("form-voluntario");
  const mensagemSucesso = document.getElementById("mensagem-sucesso");

  // Verifica se o formulário existe antes de adicionar o evento
  if (form && mensagemSucesso) {
    console.log("Formulário de voluntário encontrado!");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // impede o recarregamento
      console.log("Formulário enviado!");
      mensagemSucesso.style.display = "block"; // mostra a mensagem
      form.reset(); // limpa os campos
      setTimeout(() => {
        mensagemSucesso.style.display = "none";
      }, 4000); // oculta após 4s
    });
  } else {
    console.log("Formulário de voluntário não encontrado (não está na página atual)");
  }

  // === MENU MOBILE (para todas as páginas) ===
  const btnMenu = document.getElementById("btnMenu");
  const navUl = document.querySelector("nav ul");

  if (btnMenu && navUl) {
    console.log("Menu mobile encontrado!");
    
    btnMenu.addEventListener("click", function () {
      console.log("Botão menu clicado!");
      navUl.classList.toggle("ativo");
      
      // Feedback visual no botão
      if (navUl.classList.contains("ativo")) {
        btnMenu.textContent = "✕ Fechar";
      } else {
        btnMenu.textContent = "☰ Menu";
      }
    });
  } else {
    console.log("Elementos do menu mobile não encontrados");
  }

});