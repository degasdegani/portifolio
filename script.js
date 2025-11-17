// ========================================
// MENU MOBILE E NAVEGAÇÃO
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links a");

  // Toggle menu mobile
  // Abre e fecha o menu ao clicar no botão hamburger
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Fechar menu ao clicar em um link
  // Melhora a experiência do usuário em mobile
  navLinkItems.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  // ========================================
  // BOTÃO VOLTAR AO TOPO
  // ========================================
  const backToTop = document.querySelector(".back-to-top");

  // Mostra o botão quando o usuário faz scroll para baixo
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  // Volta ao topo com animação suave
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ========================================
  // EFEITOS DE SCROLL E ANIMAÇÕES
  // ========================================
  // Intersection Observer para animar elementos conforme aparecem na tela
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      // Quando o elemento entra na viewport, adiciona animação
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar elementos para animar conforme forem visualizados
  // Seleciona cards e elementos que devem ter animação de entrada
  document
    .querySelectorAll(
      ".course-card, .experience-card, .formation-item, .contact-item"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
});
