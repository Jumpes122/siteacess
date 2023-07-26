// script.js
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput").value;
    const validEmail = "suppportjumps@gmail.com"; // Coloque aqui o e-mail correto

    if (emailInput === validEmail) {
        document.getElementById("content").style.display = "block";
        // Redirecionar para o site após acertar o e-mail
        window.location.href = "https://github.com/explore"; // Coloque o link do site desejado
    } else {
        alert("E-mail incorreto! Acesso negado.");
    }
});
