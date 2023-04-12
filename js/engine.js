var energia = false;

function general(geral) {
    if (geral == 0) {
        energia = false;
        btngeral = "assets/btn-general-off.png";
        lampRed = "assets/red-light-off.png";
        generalSw.setAttribute("onclick", "general(1)");
        motor.setAttribute("class","motor-off");
        luzVerde = "assets/green-light-off.png";
    }
    
    if (geral == 1) { 
        energia = true;
        btngeral = "assets/btn-general-on.png";
        lampRed = "assets/red-light-on.png";
        generalSw.setAttribute("onclick", "general(0)");
    }

    document.getElementById("generalSw").src = btngeral;
    document.getElementById("redLight").src = lampRed;
    document.getElementById("greenLight").src = luzVerde;

}
function controller(ligado){
    if(energia == true){
        if(ligado == 0){
            luzVerde = "assets/green-light-off.png";
            motor.setAttribute("class", "motor-off");
        }
        if(ligado == 1){
            luzVerde = "assets/green-light-on.png";
            motor.setAttribute("class", "motor-on");
        }
    document.getElementById("greenLight").src = luzVerde;
    }
}