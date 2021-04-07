var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var response=JSON.parse(this.responseText);
        for (let i=response.length-1;i>-1;i--){
            let carte=document.getElementById("append");
            let priceFormatter=new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(response[i].price/100)
            carte.insertAdjacentHTML("afterbegin",'<div class="col-12 col-md-6 col-xl-4"><a href=info.html?id='+response[i]._id+'><div class="card border-primary"><div class="row"><div class="col-4"><img class="imgM" src='+response[i].imageUrl+' alt="'+response[i].name+'"></div><div class="col-8"><div class="card-body"><h5 class="card-title">'+response[i].name+'</h5><h6 class="card-subtitle">'+priceFormatter+'</h6></div></div></div></div></a></div>');
        }
    }
};
request.open("GET","http://localhost:3000/api/teddies");
request.send();