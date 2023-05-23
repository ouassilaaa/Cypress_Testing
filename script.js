let nbr1 = document.querySelector('#nbr1');
let nbr2 = document.querySelector('#nbr2');
const bt = document.querySelector('#bt');
let result = document.querySelector('#result');
bt.addEventListener('click', ()=>{
    if(nbr1.value !=""&& nbr2.value !=""){
    result.textContent = "Le résultat est égal à : "+(parseInt(nbr1.value)+parseInt(nbr2.value));
}
else{
    result.textContent = "Les champs sont vides";
}   
})