var today = new Date();
var time = today.getHours();
console.log(today.getHours());

window.onload=function greeting(){
    if(time>=0&&time<=12)
{var gr= `<b>Good Morning Sawapan</b>`
}
// var gr= 
else if(time>=12&&time<=15)
{var gr= `<b>Good Afternoon Sawapan</b>`}
else if(time>=15&&time<=21)
{var gr= `<b>Good Evening Sawapan</b>`}
else if(time>=21&&time<=24)
{var gr= `<b>Get some sleep</b> `}


document.getElementById("greet").innerHTML=(gr);
}

