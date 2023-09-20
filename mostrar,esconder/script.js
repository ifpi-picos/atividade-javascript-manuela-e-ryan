const butao = document.querySelector('button');
const divconteudo = document.querySelector('.conteudo');

butao.addEventListener('click' , () => {
    divconteudo.classList.toggle('oculta');
} );