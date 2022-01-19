function aparecer(id_question, id_answer, id_arrow){
    let element_answer = document.getElementById(id_answer);
    let element_question = document.getElementById(id_question);
    let element_arrow = document.getElementById(id_arrow);
    element_question.style.color = "#1d1e35";
    element_question.style.fontWeight = "700";

    element_arrow.style.transform = "scaleY(-1)";

    element_answer.style.display = "block";
    element_answer.style.marginTop = "10px";
}