
$(document).ready( function(){

    let titre1 = $(".titre1"); 
    console.log(titre1);

    let titre2 = $("#titre2"); 
    console.log(titre2);


    let para = $("#article1 p"); 
    console.log(para.text()); 

    let menu = $("nav ul"); 
    console.log(menu.html()); 

   para.text("nouveau contenu du paragraphe dans le premier article"); 

   titre1.html("<h1>nouveau titre</h1>"); 

let image = $(".block1 img") ; 
 console.log(image.attr("src")); 

 image.attr("src", "http://madamemaroc.ma/wp-content/uploads/2020/02/yuzu.jpg"); 


 // comment fonctionne un objet en javascript 

//  let personne = {
//      "nom" : "alice", 
//      "prenom" : "zeynab", 
//      "age"  : 20
//  } ; 

//  console.log(personne.nom); 
//  console.log(personne.prenom); 

 // comment changer le style d'un element html 

 titre1.css("backgroundColor", "#4054b2"); 
 
 titre1.css({ fontSize:"20px", color:"#fff"}); 


 let liste = $(".liste") ; 
  
 liste.append("<p>c'est u nouveau paragraphe que je viens d'ajouter</p>"); 

 let paraTest = $(".suppression"); 
  paraTest.remove() ; 



  let btn = $(".block1 button") ; 
   btn.click( function() {
      
        $(".block1 img").attr("src", "https://media-cdn.tripadvisor.com/media/photo-s/13/d7/28/fe/le-jasmine.jpg"); 

   })



   let form = $("form").submit( function(event){

    event.preventDefault(); 
     
    let username = $("#username").val() ; 
    let password = $("#password").val(); 
    console.log(username) ; 
    console.log(password) ; 


   })



    

})