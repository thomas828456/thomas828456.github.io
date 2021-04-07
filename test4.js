var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    console.log("yo");
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var response=JSON.parse(this.responseText);
        let carte=document.getElementById("spani");
        carte.innerHTML=response[1].name;
        console.log(response[1].name);
    }
};
request.open("GET","http://localhost:3000/api/teddies");
request.send();
let dab=document.getElementById("dab");
dab.innerHTML="<span>yo</span>";
let dab2=document.getElementById("dab");
dab2.insertAdjacentHTML("afterend"," blabla");
let dab3=document.getElementById("dab");
dab3.insertAdjacentHTML("afterend"," salut");
console.log(dab2);