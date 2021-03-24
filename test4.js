var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var response=JSON.parse(this.responseText);
        console.log(response);
    }
};
request.open("GET","localhost/3000/api/teddies");
request.send();