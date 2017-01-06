function main() {
    var time = readLine();
    var division = time.split(":");
    var hora = Number(division[0]);
    var minutos = division[1];
    var segundos = division[2].substring(0, 2);
    var letras = division[2].substring(2);
    
    if(hora === 12){
        hora = 0;
    }
    
    if(letras === 'PM'){
        hora += 12;
    }
    
    if(hora < 10){
        hora = '0' + hora;
    }
       
    console.log([hora, minutos, segundos].join(':'));
}