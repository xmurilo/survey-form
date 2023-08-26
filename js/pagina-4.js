// Next do botao da Sessao de Invetimento
const nextBotao = document.getElementById('botao-next');
// Select da Sessao invetimento
const select = document.getElementById('select');
// Input[CHECKBOX] da Sessao de Invetimento
const checkBoxList = document.querySelectorAll('input[type="checkBox"]');
 // Array onde vai ficar os Checkbox que foram selecionados
let checkBoxVerificados = [];
// Evento de click no botao Next da Sessao Invetimento
nextBotao.addEventListener('click', () => {
  // Iterando sobe a lista de checkbox e verificando um valor 
  //que nao é FALSO e fazendo PUSH do ID do checkbox que foi 
  //selecionado
  for (checkBox of checkBoxList) {
    if (checkBox.checked !== false) {
      checkBoxVerificados.push(checkBox.id);
    }
  }
  if (checkBoxVerificados.length > 0) {
    // Armazenando os valores no Local Storage
    localStorage.setItem('Decide_Invest', select.value);
    localStorage.setItem('Resources_Used', JSON.stringify(checkBoxVerificados));
   // Redirecionando para próxima página  
    window.location.href = 'pagina-5.html';
  } else {
    // Alerta caso o usuario tente selecionar nenhuma opção dos (CHECKBOX)
    alert('You must select the options');
  }
});
