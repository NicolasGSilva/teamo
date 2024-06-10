cadba
function verificarrespostas() {
    var form = document.getElementById("quizdeacesso");
    var answer1 = form.elements["q1"].value;
    var answer2 = form.elements["q2"].value;
    var answer3 = form.elements["q3"].value;
    var answer4 = form.elements["q4"].value;
    var answer5 = form.elements["q5"].value;

    if (answer1 === "c" && answer2 === "c" && answer3 === "d" && answer4 === "b" && answer5 === "a") {
        window.location.href = "presente.html";
    } else {
        window.location.href = "https://www.youtube.com/watch?v=2GXlAJPa-KM";
    }
}