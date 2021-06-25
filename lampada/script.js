const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken(){
    if (lamp.src.indexOf('quebrada') == -1){
        return false 
    } else {
        return true
    }
}

function lampOn () {
    if(!isLampBroken()){
    lamp.src = 'img/ligada.jpg'
    }
}

function lampOff(){
    if(!isLampBroken()){
    lamp.src = 'img/desligada.jpg'
    }
}

function quebrar(){
    if(!isLampBroken()){
    lamp.src = 'img/quebrada.jpg'
    }
}

turnOn.addEventListener ( 'click', lampOn )
turnOff.addEventListener ( 'click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', quebrar)