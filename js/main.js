// CONFIGURAÇÕES DO MENU PRINCIPAL PARA PEQUENAS TELAS
const menuPrincipal = document.querySelector('nav');

function abrirMenu() {
    menuPrincipal.style.display = "flex"
}
function fecharMenu() {
    menuPrincipal.style.display = "none"
}
// ___________________________________________________

// CONFIGURAÇÕES DO CONTEÚDO PRINCIPAL PARA PEQUENAS TELAS

let tela1 = document.getElementById('inicio');
let tela2 = document.getElementById('sobre');
let tela3 = document.getElementById('projetos');
let tela4 = document.getElementById('contatos');

function inicio() {
    tela1.style.display = "flex"
    tela2.style.display = "none"
    tela3.style.display = "none"
    tela4.style.display = "none"
}
function sobre() {
    tela1.style.display = "none"
    tela2.style.display = "flex"
    tela3.style.display = "none"
    tela4.style.display = "none"
}
function projetos() {
    tela1.style.display = "none"
    tela2.style.display = "none"
    tela3.style.display = "flex"
    tela4.style.display = "none"
}
function contatos() {
    tela1.style.display = "none"
    tela2.style.display = "none"
    tela3.style.display = "none"
    tela4.style.display = "flex"
}
// _____________________________________________

var botao = document.getElementById('btn');
var btn = document.querySelector('.botao');
var txt = botao.value;

botao.addEventListener('click', ()=> {
    
    let mais = document.querySelectorAll('.projetos')

    if (mais[1].classList.contains('menos')) {
        mais[1].classList.add('mais')
        mais[1].classList.remove('menos')
        btn.innerHTML="Mostrar Menos"
    }
    else {
        mais[1].classList.add('menos')
        mais[1].classList.remove('mais')
        btn.innerHTML="Mais Projetos"
    }

})
