// Botao Next da Sessao Area de texto
const nextBotao = document.getElementById('botao-next');

// Text Area da Sessao de Area de Texto
const textArea = document.getElementById('text-area');

// Evento de click no botao Next da Sessao de Area de texto
nextBotao.addEventListener('click', () => {
  // Verificando se o valor do text area esta vazio
  if (textArea.value.trim() === '') {
    alert('You must fill in the text field');
  } else {
    //Armazenando comentario do usuario dentro do Local Storage
    localStorage.setItem('User_Comments', textArea.value)
  // Redirecionando para próxima página 
    window.location.href = 'pagina-6.html';
  }
});
