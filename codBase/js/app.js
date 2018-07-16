var teclas=0;
teclas=document.getElementsByClassName('tecla');
function ckeydwn(digit) {
document.getElementById(digit).style="padding:7px";
setTimeout(function () {
  ckeyup(digit);
},125);
console.log(digit);
writeondisplay(digit);
}
function writeondisplay(digit) {
  document.getElementById("display").innerHTML=digit;
}
function ckeyup(digit) {
document.getElementById(digit).style="padding:0";
}
function ckeypress() {
  for (var i = 0; i < teclas.length; i++) {
    document.getElementById(teclas[i].id).addEventListener("click", function() {
      ckeydwn(this.id);
  });}
}
ckeypress();
