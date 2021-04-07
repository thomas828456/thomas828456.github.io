let params=new URLSearchParams(window.location.search);
let color;
let number=1;
//requête par Id//
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var response=JSON.parse(this.responseText);
        color=response.colors[0];
        console.log(color);
        let name=document.getElementById("name");
        name.innerText=response.name;
        let img=document.getElementById("img");
        img.innerHTML='<img class="imgL" src='+response.imageUrl+' alt="'+response.name+'"/>'
        var formatter=new Intl.NumberFormat("fr-FR",{style:"currency", currency:"EUR"}).format(response.price/100);
        let price=document.getElementById("price");
        price.innerText=formatter;
        let description=document.getElementById("description");
        description.innerText=response.description;
        let radio=document.getElementById("radio");
        for (let i=response.colors.length-1;i>-1;i--){
            radio.insertAdjacentHTML("afterbegin",'<input type="radio" name="color" value="'+response.colors[i]+'" id="'+response.colors[i]+'" checked/><label for="'+response.colors[i]+'">'+response.colors[i]+'</label><br/>');
        }        
    }
};
request.open("GET","http://localhost:3000/api/teddies/"+params.get("id"));
request.send();
//ajout au panier//
let colorEvent=document.getElementById("radio");
colorEvent.addEventListener("change",(event)=>{
    color=event.target.value;
});
let numberevent=document.getElementById("number");
numberevent.addEventListener("change",(event)=>{
    number=event.target.value;
});
let elt=document.getElementById("button");
elt.addEventListener("click",function () {
    localStorage.setItem(params.get("id")+"#"+color,number);
    window.alert("produit(s) ajouté au panier avec succès");
});