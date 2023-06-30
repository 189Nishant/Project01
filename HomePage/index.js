var data = [
    {img:"https://cdn.modesens.com/banner/20211014-NET-A-PORTER-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-MR-PORTER-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-FARFETCH-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-MATCHESFASHION-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-LUISAVIAROMA-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-SHOPBOP-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-FWRD-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-24S-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-SSENSE-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-NORDSTROM-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-HARVEY-NICHOLS-logo.png"},
    {img:"https://cdn.modesens.com/banner/20211014-SAKS-FIFTH-AVENUE-logo.png"},
];


data.map(function(elem,index,array) {
var img = document.createElement('img');
img.setAttribute("src",data[index].img);
document.querySelector("#thirddiv").append(img);
});

var data1=[
    {img:"https://modesens.com/banner/10958/getimg/?img=%2Fbanner%2F20220217-modesens-Recycled-364x484-F.jpg",
     name:"Recycled Clothing, Not Recycled St...",
     name2:"New Arrivals"},
    {img:"https://modesens.com/banner/10962/getimg/?img=%2Fbanner%2F20220218-modesens-Blog-364x484.jpg",
     name:"Blog by SSENSE",
     name2:"Pull The Wool Over My Eyes"},
    {img:"	https://modesens.com/banner/9833/getimg/?img=%2Fbanner%2F20220107New-Year-Sale364x484.jpg",
     name:"New Year Sales",
     name2:"Must Haves"},
];
data1.map(function(elem,index,array) {
    var div = document.createElement("div");
    var img = document.createElement('img');
    img.setAttribute("src",data1[index].img);
    var name=document.createElement("h3");
    name.innerText=data1[index].name;
    var name2 = document.createElement("p");
    name2.innerText=data1[index].name2;
    var btn = document.createElement("button");
    btn.innerText="SHOP NOW"
    div.append(img,name,name2,btn);
    document.querySelector("#fourthdiv").append(div);
})

var data2=[
    {img:"https://cdn.modesens.com/static/img/20211013Women.jpg",
     name:"Women"},
     {img:"https://cdn.modesens.com/static/img/20211009Men.png",
     name:"Men"},
     {img:"https://cdn.modesens.com/static/img/20211009Kids.png",
     name:"Kids"},
     {img:"https://cdn.modesens.com/static/img/20211009Home.png",
      name:"Home"},
      {img:"https://cdn.modesens.com/static/img/20211009Beauty.png",
     name:"Beauty"},
]
data2.map(function(elem,index,array){
    var div= document.createElement("div");
    var img= document.createElement("img");
    img.setAttribute("src",data2[index].img);
    var h2= document.createElement("h2");
    h2.innerText=data2[index].name;
    div.append(img,h2);
    document.querySelector("#fivediv").append(div)
});

var data3=[
    {img:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221259F113011_1.jpg",
     name:"ALEXANDER MCQUEEN",
     name2:"Tread Heeled Patend-leather Chelsea",
     price:"$412-$1150",
    storecount:"26 Stores"},
    {img:"https://cdn.modesens.com/product/32682673_19?w=400&",
      name:"BOTTEGA VENETA",
     name2:"Wardrobe 02 Lug Block-heal Leather",
     price:"$672-$1200",
    storecount:"21 Stores"},
    {img:"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/v572/202477F121005_1.jpg",
      name:"JW ANDERSON",
     name2:"Chain-embellished Leather Slippers in",
    price:"$322-$688",
      storecount:"24 Stores"},
      {img:"https://cdn.modesens.com/product/19435460_228?w=400&",
      name:"BALENCIDAGA",
     name2:"Track Faux Fur-lined Logo-detailied Mesh",
     price:"$735-$1050",
    storecount:"22 Stores"},
];

data3.map(function(elem,index,array) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",data3[index].img);
    var h3= document.createElement("h3");
    h3.innerText=data3[index].name;
    var p= document.createElement("p")
    p.innerText=data3[index].name2;
    var p2= document.createElement("p");
    p2.innerText=data3[index].price;
    var p3= document.createElement("p");
    p3.innerText=data3[index].storecount;
    var btn1= document.createElement("button");
    btn1.innerText="Add to card";
    btn1.setAttribute("id","btn1");
    div.append(img,h3,p,p2,p3,btn1);
    document.querySelector("#divsix").append(div);
});

var data4=[
    {img:"https://cdn.modesens.com/umedia/1564720s?w=400&"},
    {img:"https://cdn.modesens.com/umedia/1561699s?w=400&"},
    {img:"https://cdn.modesens.com/umedia/1558003s?w=400&"},
    {img:"https://cdn.modesens.com/umedia/1557230s?w=400&"},
];
data4.map(function(elem,index,array) {
    var div = document.createElement("div");
    var img= document.createElement("img");
    img.setAttribute("src",data4[index].img);
    div.append(img);
    document.querySelector("#sevendiv").append(div);
});

function myfunction(){
    window.location.href="./../Add to Cart Page/homeadd.html"
}
function myfunction1(){
    window.location.href="./../Signup Page/signuppage.html"
}