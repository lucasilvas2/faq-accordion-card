function aparecer(id_question, id_answer, id_arrow){
    var teste = document.getElementsByClassName('answer');
    var teste_arrow = document.getElementsByClassName('arrow');
    var teste_p = document.getElementsByClassName('p');
    for(let i = 0; i < 5 ; i++){
        teste[i].style.display = 'none';    
        teste_arrow[i].style.transform = 'none';
        teste_p[i].style.fontWeight = '400';
        teste_p[i].style.color = '#4a4b5e';
    }
    
    let element_answer = document.getElementById(id_answer);
    let element_question = document.getElementById(id_question);
    let element_arrow = document.getElementById(id_arrow);
    element_question.style.color = "#1d1e35";
    element_question.style.fontWeight = "700";

    element_arrow.style.transform = "scaleY(-1)";

    element_answer.style.display = "block";
    element_answer.style.marginTop = "10px";
}