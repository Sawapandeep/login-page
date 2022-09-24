var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


if ( username == "admin" && password == "admin123"){
// alert ("Login successfully");
window.location = "next.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.

var al=`<div   class="alert alert-secondary alert-dismissible fade show" role="alert">
Incorret login.
You have ${attempt} attempts left
<button type="button" class="btn-close" onclick="alertbtn()" ></button>
</div>
`
// st+=al;
document.getElementById("alert").innerHTML=(al)

if( attempt == 0){
    
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;

return false;
}
}
}
function alertbtn(){
    var mt=``;
    document.getElementById("alert").innerHTML=(mt)

}