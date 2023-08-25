// Botao Next da Sessao Area de texto
const nextBotao = document.getElementById('botao-next');
// Text Area da Sessao de Area de Texto
const textArea = document.getElementById('text-area');
// Evento de click para validar o text area
nextBotao.addEventListener('click', () => {
  if (textArea.value.trim() === '') {
    alert('You must fill in the text field');
  } else {
    window.location.href = 'pagina-6.html';
  }
});
