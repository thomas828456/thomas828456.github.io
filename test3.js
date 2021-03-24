var request=new XMLHttpRequest();
request.open("POST","localhost/3000/api/teddies/order");
request.setRequestHeader("content-Type","application/json");
request.send(JSON.stringify(contact));
request.send(JSON.stringify(panier));
request.send(JSON.stringify(order_id));