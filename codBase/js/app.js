var teclas=0;
var acum=0,rp=0;
var signb=0, signa=0, eq=0, aux=0;
var calculadora;
teclas=document.getElementsByClassName('tecla');
function asignarvalor(dato) {
  if (signa!="=") {
    signb=signa;
  }
  acum=parseFloat(dato);
}
function suma(dato) {
  if (signa!="=") {
    signb=signa;
  }
  else {
    acum=parseFloat(acum)+parseFloat(dato);
  }
}
function resta(dato) {
  if (signa!="=") {
    signb=signa;
  }
  else {
    acum=parseFloat(acum)-parseFloat(dato);
  }
}
function multiplicacion(dato) {
  if (signa!="=") {
    signb=signa;
  }
  else {
    acum=parseFloat(acum)*parseFloat(dato);
  }
}
function division(dato) {
  if (signa!="=") {
    signb=signa;
  }
  else {
    acum=parseFloat(acum)/parseFloat(dato);
  }
}
function operationf(dato) {
  console.log("acum:"+acum+" dato:"+dato+" signa:"+signa+" sb:"+signb);
  switch (signb) {
    case 0:
    {
      asignarvalor(dato);
  }
  break;
  case "+":
  {
    suma(dato);
}
break;
case "-":
{
  resta(dato);
}
break;
case "*":
{
  multiplicacion(dato);
}
break;
case "/":
{division(dato);
}
break;
case "=":
{
console.log(acum);
}
break;
    default:
    console.log(signa);
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
    acum=rp=signb=signa=eq=0;
    cleandisplay();
  }
  else {
    if (digit<=9&&digit>=0) {
      var x=document.getElementById("display").innerHTML

      if (x.length<8) {
        if(eq==0){acum=rp=signb=signa=eq=0;
          writenumber(digit);
        }
      else {
        writenumber(digit);
      }}
    }
    else {
      switch (digit) {
        case "punto":
          {
            var str=document.getElementById("display").innerHTML;
            var x=document.getElementById("display").innerHTML

            if (x.length<8){
            if (eq==0) {
              acum=rp=signb=signa=0;eq=1;
              document.getElementById("display").innerHTML="0.";
            }
            else{
              if (str.indexOf(".")==(-1)) {
                document.getElementById("display").innerHTML=document.getElementById("display").innerHTML+"."}
              }
            }
        }
          break;
          case "sign":
            {
              var sd=document.getElementById("display").innerHTML;
              sd=Number(sd)*(-1);acum=sd;
              document.getElementById("display").innerHTML=sd
            }
            break;
        case "mas":
        {
          var dato=document.getElementById("display").innerHTML;
          cleandisplay();
          console.log(dato);
          eq=1;signa="+";
          operationf(dato);
        }
          break;
          case "menos":
          {
            var dato=document.getElementById("display").innerHTML;
            cleandisplay();
            console.log(dato);
            eq=1;signa="-";
            operationf(dato);
          }
            break;
            case "por":
            {
              var dato=document.getElementById("display").innerHTML;
              cleandisplay();
              console.log(dato);
              eq=1;signa="*";
              operationf(dato);
            }
              break;
              case "dividido":
              {
                var dato=document.getElementById("display").innerHTML;
                cleandisplay();
                console.log(dato);
                eq=1;signa="/";
                operationf(dato);
              }
                break;
                case "igual":
                {
                  if (signa!="=") {
                    var dato=document.getElementById("display").innerHTML;
                    signa="=";aux=Number(dato);
                    operationf(dato);rp=acum.toString()
                    if (rp.length>8) {
                      var strd=rp.slice(0,8);
                      console.log(rp.length+strd+rp);acum=parseFloat(strd)
                      document.getElementById("display").innerHTML=acum;
                      eq=0;
                    }
                    else {

                      document.getElementById("display").innerHTML=acum;
                      eq=0;
                    }
                  }
                  else{signa="=";rp=acum.toString()
                    if (rp.length>8) {
                      var strd=rp.slice(0,8);acum=parseFloat(strd)
                    operationf(aux);
                      document.getElementById("display").innerHTML=acum;
                  eq=0;
                }
                else {signa="=";operationf(aux);
                  document.getElementById("display").innerHTML=acum;
              eq=0;
                }
                  }
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
    if (eq==0||num=="0") {
      document.getElementById("display").innerHTML=digit;eq=1;
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
calculadora=ckeypress()
