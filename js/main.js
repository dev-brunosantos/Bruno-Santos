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
    tela3.style.display = "block"
    tela4.style.display = "none"
}
function contatos() {
    tela1.style.display = "none"
    tela2.style.display = "none"
    tela3.style.display = "none"
    tela4.style.display = "flex"
}
// ______________________________________________