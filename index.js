// dichiarare con const per non cambiare il valore 

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const labelform = document.getElementById("labelform");

// dichiarare variabile del "conteggio" in qule cambia(motivo del uttizo del `let`)

let count = 0;

// tre funzioni per incremento-decremento-azzerare  il contatore

increaseBtn.onclick = function () {
    count++;
    labelform.textContent = count;
}
decreaseBtn.onclick = function () {
    count--;
    labelform.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    labelform.textContent = count;
}


