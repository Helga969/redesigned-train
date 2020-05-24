var ball =document.querySelector('.ball');
var garden=document.querySelector('.garden');
var output = document.querySelector('.output');
var maxX=garden.clientWidth - ball.clientWidth;
var maxY=garden.clientHeight - ball.clientHeight;



function handleOrientation(event) {
var x=event.beta;
var y=event.gamma;
output.innerHTML="beta : "+ (x.toFixed(2)) + "\n";
output.innerHTML += "gamma: "+ (y.toFixed(2)) +"\n";



ball.style.background = "green";
if (x>90) {x=90};
if (x<-90) {x=-90};
if ((x<0.5)&&(x>(-0.5))&&(y>(-0.5))&&(y<0.5)) {
var audio = new Audio();
audio.preload = 'auto';
audio.src = '../www/standartnyj_signal_sms_iphone.mp3';
audio.play();
ball.style.background = "red";

output.innerHTML="beta : "+ (x.toFixed(2)) + "\n";
output.innerHTML += "gamma: "+ (y.toFixed(2)) +"\n";

}


x += 90;
y += 90;
ball.style.top = ((maxX*x)/180 - 10)+ "px";
ball.style.left=((maxY*y)/180 - 10)+ "px";

}

window.addEventListener('deviceorientation', handleOrientation);

