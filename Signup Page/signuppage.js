
document.getElementById("formsubmitbtn").addEventListener("click",myformSubmit)
var signupArr=JSON.parse(localStorage.getItem("signupDetails"))||[]
function myformSubmit(){
    event.preventDefault();
    var signupObj={
        email:document.getElementById("Emailget").value,
        pass:document.getElementById("pass").value,
    };
    signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signupDetails",JSON.stringify(signupArr));
    alert("Singup success");
    location.href ='./../LoginPage/login.html';
};
