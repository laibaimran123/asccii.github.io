let ascii ={
    char : function (num){
    if(num==1){
        document.getElementById("result").innerHTML ="A";
    }
    else if(num==2){
          document.getElementById("result").innerHTML ="B";
    }
    else if(num==3){
          document.getElementById("result").innerHTML ="C";
    }
    else if(num==4){
          document.getElementById("result").innerHTML ="D";
    }
    else if(num==5){
        document.getElementById("result").innerHTML ="E";
    }
    else if(num==6){
          document.getElementById("result").innerHTML ="F";
    }
    else if(num==7){
          document.getElementById("result").innerHTML ="G";
    }
    else if(num==8){
        document.getElementById("result").innerHTML ="H";
  }
  else if(num==9){
    document.getElementById("result").innerHTML ="I";
}
else if(num==10){
    document.getElementById("result").innerHTML ="J";
}
else if(num==11){
    document.getElementById("result").innerHTML ="K";
}
else if(num==12){
    document.getElementById("result").innerHTML ="L";
}
else if(num==13){
    document.getElementById("result").innerHTML ="M";
}
else if(num==14){
    document.getElementById("result").innerHTML ="N";
}
else if(num==15){
    document.getElementById("result").innerHTML ="O";
}
else if(num==16){
    document.getElementById("result").innerHTML ="P";
}
else if(num==17){
    document.getElementById("result").innerHTML ="Q";
}
else if(num==18){
    document.getElementById("result").innerHTML ="R";
}
else if(num==19){
    document.getElementById("result").innerHTML ="S";
}
else if(num==20){
    document.getElementById("result").innerHTML ="T";
}
else if(num==21){
    document.getElementById("result").innerHTML ="U";
}
else if(num==22){
    document.getElementById("result").innerHTML ="V";
}
else if(num==23){
    document.getElementById("result").innerHTML ="W";
}
else if(num==24){
    document.getElementById("result").innerHTML ="X";
}
else if(num==25){
    document.getElementById("result").innerHTML ="Y";
}
else if(num==26){
    document.getElementById("result").innerHTML ="Z";
}
else if(num==27){
    document.getElementById("result").innerHTML ="0";
}
else if(num==28){
    document.getElementById("result").innerHTML ="1";
}
else if(num==29){
    document.getElementById("result").innerHTML ="2";
}
    }
}
function ff1() {
    ascii.char(document.getElementById("input").value)

} 
function clearScreen(){

    document.getElementById("input").value = ''
    document.getElementById("result").innerHTML = ''
    }