$(document).ready(function(){
   
    // selectionner un eklement via son id 
   // let para = document.getElementById("para");
let titre1 = $("#titre1");
console.log(titre1);
    // selectionner un element via une classe 
let para = $(".para");
console.log(para);


   // selectionner via le nom d'une balise 

let balises = $("h2");
console.log(balises);



   // selectionner le bloc dont l'id = para    



   // changer la couleur du paragraphe qui est dans l'article dont la class="article2"


   // afficher la couleur du paragraphe qui est dans l'article dont la class="article2"

; 


   /*
    changer le style du paragraphe qui est dans le block dont l'id=  "article1"
        
      - background-color: blue ; 
      - font-size : 25px ; 
      - color : white
   */



  /*
   afficher les sources des deux images, 
    - la 1ere se trouve dans le bloc dont l'id = "article1"
    - la 2eme se trouve dans le bloc dont la classe ="article2"
   */

 
 //  changer la source des deux images 

 // créer un  li et ajouter le li à la fin du parent ul qui se trouve dans la section 
let li = $("<li>text au debut</li>");

 // ajouter un element au debut du parent ul 
let parent = $(".section1 ul");
parent.prepend(li);

 // utiliser before et after pour ajouter un li au debut et la fin du ul qui 
 // se trouve dans la section
let li2 = $("<li>items from beginning</li>");
parent.before(li2);
let li3 = $("<li>items end</li>");
parent.after(li3);
 // utilisation du addClass()
 let section3 = $(".section3");
 section3.addClass("lastPara")
 // ecouter le click du button dont la classe="btn" et rétirer la classe =".lastPara"
let btn = $(".btn")
btn.on("click",function(){
section3.removeClass("lastPara")
   });



 // 2eme methode dom avec Raoul 
let form = $("#form")
form.on("submit",function(event){
event.preventDefault();
let username = $("#username");
// console.log(username.val().length);
let password = $("#password");
// console.log(password.val());


let formGroup= $(".form-group"); 
console.log(formGroup)

if(username.val().length === 0 )
{
   let usernameMessage= $("<span> le username doit avoir au moins 5 caratères</span>");
   usernameMessage.css('display','block')
   formGroup[0].append(usernameMessage[0])
}
let formGroup2= $(".form-group2"); 
console.log(formGroup2)
if(password.val().length === 0)
{
   let password= $("<span2> le password doit avoir au moins 5 caratères</span2>");
   formGroup2[0].append(password[0])
   password.css('display','block')
}



})





















});