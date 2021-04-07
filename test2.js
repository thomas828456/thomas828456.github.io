if (i=0){
    radio.insertAdjacentHTML("afterbegin",'<input type="radio" name="color" value="'+response.colors[i]+'" id="'+response.colors[i]+'" checked/><label for="'+response.colors[i]+'">'+response.colors[i]+'</label><br/>');
}else{
    radio.insertAdjacentHTML("afterbegin",'<input type="radio" name="color" value="'+response.colors[i]+'" id="'+response.colors[i]+'"/><label for="'+response.colors[i]+'">'+response.colors[i]+'</label><br/>');
}


