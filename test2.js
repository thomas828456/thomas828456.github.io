var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var response=JSON.parse(this.responseText);
        function db(response);
        let carte=document.getElementById("main");
        carte.innerHTML="<span>"+response.0.name+"</span>"
    }
};
request.open("GET","localhost/3000/api/teddies");
request.send();

class Teddy{
    constructor(colors,_id,name,price,imageUrl,description){
        this.colors=colors;
        this._id=_id;
        this.name=name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.description=description;
    }
}

function db(db){
    for (let i=0,i==db.legnth;i++){
        const teddy + i=new Teddy(db.+i+.colors,db.+i+._id);
    }
}

let carte=document.getElementById("main");
for (let i=0; i==db.length;i++){    
    carte.innerHTML="le code";
    let carte_img=document.querySelector(".carte .carte__img")
    carte_img.innerHTML="<img src="+teddy+i.imageUrl+"/>";
    let carte_name=document.querySelector(".carte .carte__name")
    carte_name.innerHTML="<img src="+teddy+i.name+"/>";
    let carte_price=document.querySelector(".carte .carte__price")
    carte_price.innerHTML="<img src="+teddy+i.price+"/>";
    carte.classList.replace("carte","carte"+i);
}