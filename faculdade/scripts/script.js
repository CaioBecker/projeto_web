function DropDown(Elemento){
    Elemento.classList.toggle("active");
}

function EasterEgg(){
    const ConfirmacaoDoEsterEgg = prompt('Digite o código:');

    if(ConfirmacaoDoEsterEgg == null || ConfirmacaoDoEsterEgg == '')
        alert('Credenciais Não Encontradas!');
    else if(ConfirmacaoDoEsterEgg == 'Open')
        window.open('./html/tetris.html');
    else
        alert('Tente Novamente! (Dica: Abrir, mas em outra Linguagem)');
}