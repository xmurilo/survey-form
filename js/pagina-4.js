// Next do botao da Sessao de Invetimento
const nextBotao = document.getElementById('botao-next');
// Select da Sessao invetimento
const select = document.getElementById('select')
// Input[CHECKBOX] da Sessao de Invetimento
const checkBoxList = document.querySelectorAll('input[type="checkBox"]');

// Evento no botao Nexta na Sessao de Invetimento
nextBotao.addEventListener('click', () => {
  for(checkBox of checkBoxList) {
    if(checkBox.checked !== false && select.value !== ''){
      return window.location.href = 'pagina-5.html'
    }
  }
  return alert('You must selact both options')
});
