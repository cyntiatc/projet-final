const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let resultat
let choixOrdinateur 

//Evenement 'Click sur les buttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener  ('click',(e)=>{
    //récuperation de l'ID du button cliqué
    choixUtilisateur = e.target.id;
    //on ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    generer_choix_ordinateur()
    verification()

}))


//Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1 //générer des nombres compris entre 1 et 3

   if(random == 1){//si random = à 1 :
        choixOrdinateur = 'pierre'

    } 
   if(random == 2){//si random = à 1 :
        choixOrdinateur = 'papier'

    } 
   if(random == 3){//si random = à 1 :
        choixOrdinateur = 'ciseaux'

    }
    //on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">` 


}

//Fonction pour verifier si le joueur a gagné ou pas
function verification(){
    if(choixUtilisateur == choixOrdinateur){
        resultat = "Egalité";
    }
    //Les cas ou le joueur perd
    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        resultat = "Perdu !";
    }
    //Les cas ou le joueur gagne
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "Gagné !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
        resultat = "Gagné !";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
        resultat = "Gagné !";
    }
    contenantResultat.innerHTML = resultat;
}
