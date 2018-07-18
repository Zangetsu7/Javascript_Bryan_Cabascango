var teclas=0;
var acum=0,rp=0;
var sign=0;
teclas=document.getElementsByClassName('tecla');
function operation(dato) {
  console.log(dato,sign);
  switch (sign) {
    case "0":
    {
    acum=dato;
    console.log(acum,sign);
  }
      break;
    default:

  }
}
function cleandisplay() {
  document.getElementById("display").innerHTML=0;
}
function ckeydwn(digit) {
document.getElementById(digit).style="padding:7px";
setTimeout(function () {
  ckeyup(digit);
},125);
console.log(digit);
writeondisplay(digit);
}
function writeondisplay(digit) {
  if (digit=="on") {
    acum=0;rp=0;
    cleandisplay();
  }
  else {
    if ((digit<=9&&digit>=0)||digit=="punto") {
      if (digit=="punto") {
        writenumber(".")
      }
      else {
      writenumber(digit);
      }
    }
    else {
      switch (digit) {
        case "mas":
        {
          var dato=document.getElementById("display").innerHTML;
          cleandisplay();
          console.log(dato);
          sign="+";
          operation(dato);
        }
          break;
        default:

      }
    }
  }
}
function writenumber(digit) {
  var num=document.getElementById("display").innerHTML;
  console.log(num,digit);
  if (digit==0&&num==0) {
  }
  else {
    if (num==0) {
      document.getElementById("display").innerHTML=digit;
    }
    else {
      document.getElementById("display").innerHTML=document.getElementById("display").innerHTML+digit;
    }
    }
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
