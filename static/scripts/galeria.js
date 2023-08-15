document.getElementById("botaoAbrir").addEventListener("click", function() {
    var janelaFotos = document.getElementById("janelaFotos");
    var botaoAbrir = document.getElementById("botaoAbrir");

    if (janelaFotos.style.display === "none") {
        janelaFotos.style.display = "block";
        botaoAbrir.innerHTML = "Fechar";
    } else {
        janelaFotos.style.display = "none";
        botaoAbrir.innerHTML = "Dia 1";
    }
});