





let carte=document.getElementById("main");
for (let i=0; i==db.length;i++){    
    carte.innerHTML="le code";
    function add_img(i);
    function add_name(i);
    function add_price(i);
    carte.classList.replace("carte","carte"+i);
}

let carte=document.getElementById("main");
for (let i=0; i==db.length;i++){
    carte.innerHTML="le code"
    function addimg

}


function add_img(img){    
    let carte_img=document.querySelector(".carte .carte__img")  
    var request = new XMLHttpRequest();
    request.open("GET","localhost:3000/api/teddies");
    request.send();
    request.onreadystatechange=function(){
        if (this.readyState==XMLHttpRequest.DONE && this.status==200){
            var response=JSON.parse(this.responseText);
            carte_img.innerHTML="<img src="+response.img.imageUrl+"/>";
        }
    }
}

function {

}