  
function mudaCor(){  
    var red = document.querySelector('.redd').value
    var green = document.querySelector('.greenn').value
    var blue = document.querySelector('.bluee').value
    var op = document.querySelector('.opacity').value       
    
    var rangerred = document.querySelector('.range-red').value
    var rangergreen = document.querySelector('.range-green').value 
    var rangerblue = document.querySelector('.range-blue').value 
   
    let chk = document.getElementById('chk') 

    if(op < 10){
        op = '0.'+ op
    }

    if(chk.checked == true){      
        let cor2 = `rgba(${rangerred},${rangergreen},${rangerblue}, ${op})`

        red.value = rangerred.value
        green.value = rangergreen.value
        blue.value = rangerblue.value
        document.querySelector('.color').style.background = cor2   
        document.querySelector('.br-value').innerHTML = op +' %'    
    }
    else{
        let cor = `rgba(${red},${green},${blue}, ${op})`    
        document.querySelector('.color').style.background = cor
        document.querySelector('.br-value').innerHTML = op +' %'      
    }    
    porcentValue(red, green, blue, rangerblue, rangergreen, rangerred)
    setTimeout('mudaCor()',10)
}

function porcentValue(red, green, blue, rangerblue, rangergreen, rangerred){
    if(chk.checked == true){
        let porcentRed = rangerred * 100 / 255
        let porcentGreen = rangergreen * 100 / 255
        let porcentBlue = rangerblue * 100 / 255
    
        document.getElementById('porcent-red').value = porcentRed.toFixed('0') + ' %'
        document.getElementById('porcent-green').value = porcentGreen.toFixed('0') + ' %'
        document.getElementById('porcent-blue').value = porcentBlue.toFixed('0') + ' %'
    }
    else{
        let porcentRed = red * 100 / 255
        let porcentGreen = green * 100 / 255
        let porcentBlue = blue * 100 / 255
    
        document.getElementById('porcent-red').value = porcentRed.toFixed('0') + ' %'
        document.getElementById('porcent-green').value = porcentGreen.toFixed('0') + ' %'
        document.getElementById('porcent-blue').value = porcentBlue.toFixed('0') + ' %'
    }
    
}