function DropDown(Elemento){
    Elemento.classList.toggle("active");
}

function EasterEgg(){
    const ConfirmacaoDoEsterEgg = prompt('Digite o código:');

    if(ConfirmacaoDoEsterEgg == null || ConfirmacaoDoEsterEgg == '')
        alert('Credenciais Não Encontradas!');
    else if(ConfirmacaoDoEsterEgg == 'tetris')
        window.open('./js/tetris.html');
    else
        alert('Tente Novamente! (Dica: Digite O Nome Do Jogo)');
}