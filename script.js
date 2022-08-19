const cardNumber = document.querySelector("#cardNumber");
const cardName=document.getElementById("cardName");
const cardExpiry=document.getElementById("cardExpiry");
const cardCVV=document.getElementById("cardCVV");
const cardHolderName=document.getElementById("caardHolderName");
const cardNumberInput=document.querySelector("#cardNumberInput");
const month=document.getElementById("month");
const year=document.getElementById("year");
const cvcInput=document.getElementById("cvcInput");

cardNumberInput.addEventListener("input", () =>{
    console.log(cardNumberInput.value);
    cardNumber.innerHTML = (cardNumberInput.value).replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
})
