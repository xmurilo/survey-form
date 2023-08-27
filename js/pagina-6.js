// Evento de click no botao submit da Sessao de Fomulario
const buttonSubmit = document.getElementById('botao-submit');
buttonSubmit.addEventListener('click', () => {
  // Armazenando os valores do input na variavel
  const nomeCompleto = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const idade = document.getElementById('idade').value;
  // Armazenando os valores no Local Storage
  localStorage.setItem('Full_Name', nomeCompleto);
  localStorage.setItem('Email', email);
  localStorage.setItem('Age', idade);
});
function trocarPagina() {
  // Redirecionando para Pagina-7
  window.location.replace('pagina-7.html');
}
