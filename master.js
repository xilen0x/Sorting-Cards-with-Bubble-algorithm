//Función que crea una carta:
function generarCarta() {
    /*
    <div class="card" id="card">
        <div class="number"></div>
    </div>
    */

   let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
   let colors = ['spade', 'cubs', 'hearts', 'diamonds'];

   let rn1 = Math.floor(Math.random() * cards.length);
   let rn2 = Math.floor(Math.random() * colors.length);

   var card = document.createElement("div");
    card.id = "card";
    card.classList.add("card");

    var number = document.createElement("div");
    number.innerHTML = getcard(cards[rn1]);
    number.classList.add(colors[rn2]);

    card.appendChild(number);

    var divRow = document.querySelector(".row");
    divRow.appendChild(card);
}

function getcard(num) {
    switch (num) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";
        default: return num;
    }
}

document.getElementById("btn_draw").onclick = function cartaRandom() {

    let inpnum = document.getElementById('numero').value;

    //ciclo for que crea n elementos en el DOM:
    for (let i = 1; i <= inpnum; i++) {

        generarCarta();

        /*
        <div class="row">
           <div class="card" id="card">
               <div class="number"></div>
           </div>
       </div>
        */

    }

    // Generador de cartas aleatorias:

    /*let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let colors = ['spade', 'cubs', 'hearts', 'diamonds'];

    let rn1 = Math.floor(Math.random() * cards.length);
    let rn2 = Math.floor(Math.random() * colors.length);

    document.querySelector(".number").innerHTML = card(cards[rn1]);
    document.querySelector(".number").classList.add(colors[rn2]);

    function card(num) {
        switch (num) {
            case 1: return "A";
            case 11: return "J";
            case 12: return "Q";
            case 13: return "K";
            default: return num;
        }
    }


}

 */

}

