let text=document.getElementById("text");
let a=localStorage.getItem("valider").split("#")[0];
let b=localStorage.getItem("valider").split("#")[1];
text.innerText="votre commande d'un montant de : "+a+", porte le numéro : "+b;