// Botao de next da Sessao Status
const nextBotao = document.getElementById('botao-next');
// Select da Sessao Status
const select = document.getElementById('select');
// input[Radio] name[MARKET]da Sessao Status
const radiosStatus = document.querySelectorAll("input[type='radio']");
// Evento de click no botao Next da Sessao Status
nextBotao.addEventListener('click', () => {
  for (radio of radiosStatus) {
    if (radio.checked !== false && select.value !== '') {
      // Armazenando os valores no Local Storage
      localStorage.setItem('Status_Account', select.value)
      localStorage.setItem('Market_Financial', radio.id)
       // Redirecionando para próxima página 
      return window.location.href = 'pagina-4.html';
    }
  }
  // Alerta caso o usuario nao selecione nenhuma opçao (SELECT e RADIO)
  return alert('You must select the options');
});
