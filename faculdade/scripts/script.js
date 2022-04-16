function mostar_texto(texto_id){
    var texto = document.getElementById(texto_id);
    if (texto.style.display == 'none'){
        texto.style.display = 'block';
    }else{
        texto.style.display = 'none';
    }
}
