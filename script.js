function avancar(id_page_none,id_pag_avancar){


    $(document).ready(function(){
        $('.modal').modal();
      })

    document.getElementById(id_page_none).style.display = 'none'

    document.getElementById(id_pag_avancar).style.display = 'block'
    document.getElementById(id_pag_avancar).style.display = 'flex'
}

function voltar(id_page_none,id_pag_voltar){
    document.getElementById(id_page_none).style.display = 'none'

    document.getElementById(id_pag_voltar).style.display = 'block'
    document.getElementById(id_pag_voltar).style.display = 'flex'
}

function abrirModal(opcao){

    if(opcao === 'opcao-1'){    
        console.log('aVAI ABRIR MODAL 1')
    }
}

$(document).ready(function(){
    $('.modal').modal();
  });