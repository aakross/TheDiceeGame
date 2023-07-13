var ramdomNumber1 = Math.floor((Math.random() *6)+1)
var ramdomNumber2 = Math.floor((Math.random() *6)+1)
document.querySelector(".dice img").setAttribute("src","images/dice"+ ramdomNumber1 +".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+ ramdomNumber2 +".png");


if(ramdomNumber1 === ramdomNumber2){
document.querySelector("h1").textContent = "Empate"
} else if (ramdomNumber1 < ramdomNumber2) {
    document.querySelector("h1").textContent = "Jugador 2 gana"
} else if (ramdomNumber1 > ramdomNumber2) {
    document.querySelector("h1").textContent = "Jugador 1 Gana"
}
