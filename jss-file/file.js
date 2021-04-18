let off = document.getElementById('off')
let on = document.getElementById('on')


let bulbON = ()=>{
    let bulb = document.getElementById('bulb').src = './img/final_607bd123591c1000e6832605_375900 (1).png'

}

let buldOFF = ()=>{
    let bulb = document.getElementById('bulb').src = './img/incandescent-light-bulb-computer-icons-lighting-lampada.png'   
}

on.addEventListener('click',bulbON)
off.addEventListener('click',buldOFF)