function DropDown(Elemento){
    Elemento.classList.toggle("active");
}

function EasterEgg(){
    const ConfirmacaoDoEsterEgg = prompt('Digite o código:');

    if(ConfirmacaoDoEsterEgg == null || ConfirmacaoDoEsterEgg == '')
        alert('Credenciais Não Encontradas!');
    else if(ConfirmacaoDoEsterEgg == 'Open')
        window.open('https://js13kgames.com/games/underrun/index.html');
    else
        alert('Tente Novamente! (Dica: JavaScript é Deus Na Web)');
}