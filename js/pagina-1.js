const botaoHome = document.querySelector('.button-home');
// Evento de Hover no botao da sessao home
botaoHome.addEventListener('mouseover', () => {
  // Mudando o texto do HTML
  botaoHome.innerHTML = `Just Go Ahead`;
});

  // Evento de quando o mouse sai de cima do botao
botaoHome.addEventListener('mouseout', () => {
  // Mudando o texto do HTML para o original após 300 milisegundos
  setTimeout(() => {
    botaoHome.innerHTML = `Let's Go `;
  }, 300);
});