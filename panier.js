let totalPriceFormatter;
let paquage=[];
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var response=JSON.parse(this.responseText);
        let total=0;
        for (let i=0;i<localStorage.length;i++){
            let id=localStorage.key(i).split("#")[0];
            let color=localStorage.key(i).split("#")[1];
            for (let j=0;j<response.length;j++) {
                if (id==response[j]._id){                    
                    let carte=document.getElementById("append");
                    let priceFormatter=new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(response[j].price/100);
                    carte.insertAdjacentHTML("afterend",'<div class="col-12 col-md-6"><a href=info.html?id='+id+'><div class="card border-primary"><div class="row"><div class="col-4"><img class="imgM" src='+response[j].imageUrl+' alt="'+response[j].name+'"></div><div class="col-8"><div class="card-body"><div class="row"><span id="frip">'+color+'</span><span>'+response[j].name+'</span></div><div class="row"><span id="frip3">'+localStorage.getItem(localStorage.key(i))+'</span><span>x</span><span id="frip2">'+priceFormatter+'</span></div></div></div></div></div></a></div>');
                    total=total+localStorage.getItem(localStorage.key(i))*response[j].price/100;
                    paquage.push(id);
                    //si le site pouvait gérer les quantités et les couleurs cela serait ajouter dans paquage ici
                }
            }
        }
        let totalPrice=document.getElementById("totalPrice");
        totalPriceFormatter= new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(total);
        totalPrice.innerText="Prix total de votre panier : "+totalPriceFormatter;        
    }
};
request.open("GET","http://localhost:3000/api/teddies/");
request.send();
//test de validation des champs
const lastName=document.getElementById("lastName");
const firstName=document.getElementById("firstName");
const address=document.getElementById("address");
const city=document.getElementById("city");
const email=document.getElementById("email");
function validity(target,tag) {
    if (!target.checkValidity()){
        window.alert("veuillez entrer "+tag+" valide");
    }
}
lastName.addEventListener("change",function() {
    validity(lastName,"un nom");
});
firstName.addEventListener("change",function() {
    validity(firstName,"un prénom");
});
address.addEventListener("change",function() {
    validity(address,"une adresse");
});
city.addEventListener("change",function() {
    validity(city,"une ville");
});
email.addEventListener("change",function() {
    validity(email,"un email");
});
//vider le panier//
const vider=document.getElementById("vider");
vider.addEventListener("click",function(){
    localStorage.clear();
    window.location.reload();
});
//commander//
const valider=document.getElementById("valider");
valider.addEventListener("click",function(){
    if (!lastName.value=='' && !firstName.value=='' && !address.value=='' && !city.value=='' && !email.value==''){
        if (lastName.checkValidity() && firstName.checkValidity() && address.checkValidity() && city.checkValidity() && email.checkValidity()){
            let contact={firstName:firstName.value,lastName:lastName.value,address:address.value,city:city.value,email:email.value};
            let envoi={contact:contact,products:paquage};
            var request=new XMLHttpRequest();
            request.onreadystatechange=function(){
                if (this.readyState==XMLHttpRequest.DONE && this.status==201){
                    var response=JSON.parse(this.responseText);
                    localStorage.clear();
                    localStorage.setItem("valider",totalPriceFormatter+"#"+response.orderId);
                    window.location.href="valider.html";
                }
            };
            request.open("POST","http://localhost:3000/api/teddies/order");
            request.setRequestHeader("Content-Type","application/json");
            request.send(JSON.stringify(envoi));
        }else {
            window.alert("veillez à ce que tous les champs du formulaire soient remplis correctement");
        }
    }else{
        window.alert("veuillez remplir tous les champs du formulaire de contact");
    }
})