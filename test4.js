var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var response=JSON.parse(this.responseText);
        let carte=document.getElementById("main");
        let carte2=document.getElementById("spani");
        carte2.innerText="response.name";
    }
};
request.open("GET","localhost/3000/api/teddies");
request.send();