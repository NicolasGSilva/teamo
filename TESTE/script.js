function checkAnswers() {
    var form = document.getElementById("quizForm");
    var answer1 = form.elements["q1"].value;
    var answer2 = form.elements["q2"].value;
    var answer3 = form.elements["q3"].value;

    if (answer1 === "b" && answer2 === "c" && answer3 === "c") {
        // Todas as respostas estão corretas, então abra o site
        window.location.href = "site.html"; // Substitua "site.html" pelo nome do arquivo do seu site
    } else {
        // Se houver uma resposta incorreta, redirecione para o vídeo do YouTube
        window.location.href = "https://www.youtube.com/watch?v=2GXlAJPa-KM"; // Substitua o link pelo vídeo que você deseja
    }
}