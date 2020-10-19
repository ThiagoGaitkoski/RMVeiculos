$(function(){

    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 70000;
    var preco_atual = 0; 

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })

    $(document).mouseup(function(){
        isDrag = true;
        enableTextSelection();
    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disabledTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if (mouseX < 0){ 
                mouseX = 0;
            }

            if (mouseX > elBase.width()) {
                mouseX = elBase.width();
            }

            $('.pointer-barra').css('left', (mouseX - 13)+'px')
            currentValue = (mouseX / elBase.width()) * 100;
            $('.fill').css('width', currentValue+'%');

            //TODO: Ajustar formato preço
            preco_atual = (currentValue/100) * preco_maximo;
            $('.preco_pesquisa').html('R$'+preco_atual);
        }
    })

    function disabledTextSelection() {
        $("body").css("-webkit-user-select", "none");
        $("body").css("-moz-user-select", "none");
        $("body").css("-ms-user-select", "none");
        $("body").css("-o-user-select", "none");
        $("body").css("user-select", "none");
    }

})