var regdUsers = JSON.parse(localStorage.getItem("signupDetails"))
console.log(regdUsers);



function myloginpage(){
var user = document.getElementById("Email1").value;
console.log(user);
var password = document.getElementById("pass1").value;
console.log(password);

let a = regdUsers.findIndex(x=> x.email === user);

console.log(a);
    if(a !== -1 && regdUsers[a].pass=== password){
        alert("Login successful");
        window.location.href="./../HomePage/index.html"
    }
    else{
        alert("Login failed");
    }

};



// for (var i = 0; i < regdUsers.length;i++){
//     if(regdUsers[i].email==user&&regdUsers[i].pass==password){
//         alert("Login successful");
//         window.location.href="./../HomePage/homePage.html"
//     }
//     else{
//         alert("Login failed");
//     }
// }