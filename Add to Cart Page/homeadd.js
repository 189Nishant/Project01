
var cartArr=JSON.parse(localStorage.getItem("CartItems"));



cartArr.map(function(data1){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",data1.img);
    var h3= document.createElement("h3");
    h3.innerText=data1.name;
    var p= document.createElement("p")
    p.innerText=data1.name2;
    var p2= document.createElement("p");
    p2.innerText='$ ' +data1.price;
    var p3= document.createElement("p");
    p3.innerText=data1.storecount;
    div.append(img,h3,p,p2,p3);
    document.querySelector("#secounddiv").append(div);
});

var total = cartArr.reduce(function (acc,cv){
    return acc+Number(cv.price)
},0);
document.querySelector("h2").textContent=`Total amount is $ ${total}`;
console.log(total);

function mybuttonpay(){
    window.location.href="./../PaymentPage/index1.html"
}