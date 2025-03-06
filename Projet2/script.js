var addToDoButton = document.getElementById("addToDo");
var toDocontainer = document.getElementById("toDocontainer");
var inputField = document.getElementById("inputField");
addToDoButton.onclick = function(){
    //verifier si l'input n'est pas vide 
    if(inputField.value != ""){
        //Verifier si l'input n'est pas vide, créer un paragraphe
        var paragraph = document.createElement('p') 
    }
    //valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value ;
    
    //stylisé le paragraphe
    paragraph.classList.add('paragraphe_style') 

    //insérer le paragraphe dans l'élément toDocontainer
    toDocontainer.appendChild(paragraph);
    
    //vidé l'input quand le paragraph est ajouté
    inputField.value = "";

    //barré le paragraphe quand on clique dessus
    paragraph.addEventListener('click',function(){
      paragraph.classList.add('paragraph_click');
    })

    //supprimer la tâche quand on double click sur la tâche
    paragraph.addEventListener('dblclick',function(){
        toDocontainer.removeChild(paragraph);
    })
}
