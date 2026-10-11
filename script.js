const toggleBtn = document.querySelector(".theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }
});

const telefone = "5541984028350";

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome_formContato").value;
  const mensagem = document.getElementById("texto_formContato").value;

  const texto = `[site] Olá! Meu nome é ${nome}.
Mensagem: ${mensagem}`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});