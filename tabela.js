
$(function(){
    $.getJSON('noticias.json', function (data) {
        console.log('success');
        console.log(data.noticias);
        $.each(data.noticias, function (i, emp) {
            $('tbody').append('<tr id="aparece"><td id="imgtabela" ><img id="menor" src='+emp.image+'></td><td ><h1>' + emp.titulo + '</h1><p>' + emp.descricao + '</p><p id="data">'+emp.data+'</p></td>');
        });
    }).error(function () {
        console.log('error');
    });

});

/* Pesquisa
function barra() {
    let input = document.getElementById('barra').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('noticias.json');

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}
*/