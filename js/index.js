// Botao da next da Sessao Status
const nextBotao = document.getElementById('botao-next');
// Select da Sessao Status
const select = document.getElementById('select-status');
// input[Radio] name[MARKET]da Sessao Status
const radiosStatus = document.querySelectorAll("input[type='radio'][name='market']");
// Evento de click no botao Next da Sessao Status
nextBotao.addEventListener('click', () => {
  for (radio of radiosStatus) {
    if (radio.checked !== false && selectStatus.value !== '') {
      return (window.location.href = './pagina-4.html');
    }
  }
  return alert('You must selact both options');
});
