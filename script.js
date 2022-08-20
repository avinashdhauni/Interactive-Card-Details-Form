const cardNumber = document.querySelector("#cardNumber");
const cardName = document.getElementById("cardName");
const cardExpiry = document.getElementById("cardExpiry");
const cardCvv = document.getElementById("cardCVV");
const cardHolderName = document.querySelector("#cardHolderName");
const cardNumberInput = document.querySelector("#cardNumberInput");
const month = document.querySelector("#expiryMonth");
const year = document.querySelector("#expiryYear");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvcInput");
const nameError = document.getElementById("nameError");
const numberError = document.querySelector("#numberError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");
const cvcError = document.getElementById("cvcError");
const cardDetailsForm = document.querySelector(".cardDetailsForm");
const thankYouForm = document.querySelector(".thankYou");
const cardForm = document.querySelector("#cardForm");

cardNumberInput.addEventListener("input", () => {
    cardNumber.innerHTML = (cardNumberInput.value).replace(/\W/gi, '').replace(/(.{4})/g, '$1 '); 

    var string = cardNumberInput.value;

        for(let i=0; i<string.length; i++){
            var keyCode = string[i];
            var regex=/[^a-z]/g;
            var isValid = regex.test(keyCode);
            console.log(isValid);
            if (!isValid) {
                numberError.innerHTML = "Wrong Format, numbers allowed.";
                return false;
            }else{
                numberError.innerHTML = "";
            }
        }
    if(cardNumberInput.value === ""){
        cardNumber.innerHTML = "0000 0000 0000 0000";
    }
}); 

cardHolderName.addEventListener("input", () => {
    cardName.innerHTML = cardHolderName.value;
    if(cardHolderName.value === ""){
        cardName.innerHTML = "Jane Appleseed";
    }
})
monthInput.addEventListener("input", () => {
    month.innerHTML = monthInput.value;
    if(monthInput.value === ""){
        month.innerHTML = "00";
    }
    if(monthInput.value > 12){
        monthError.innerHTML = "Number can't be greater than 12";
    }else{
        monthError.innerHTML = "";
    }
});
yearInput.addEventListener("input", () => {
    year.innerHTML = yearInput.value;
    if(yearInput.value === ""){
        year.innerHTML = "00";
    }
})

cvcInput.addEventListener("input", () => {
    cardCvv.innerHTML = cvcInput.value;
    if(cvcInput.value === ""){
        cardCvv.innerHTML = "000";
    }
})
function validate(event){
    if(
        cardHolderName.value !== "" && 
        cardNumberInput.value !== "" &&
        monthInput.value !== "" &&
        yearInput.value !== "" &&
        cvcInput.value !== ""
    ){ 
        cardDetailsForm.classList.add("hide");
        thankYouForm.classList.remove("hide");
        cardHolderName.value === "";
        cardNumberInput.value === "";
        monthInput.value === "";
        yearInput.value === "";
        cvcInput.value === "";

    }else{
        if(cardHolderName.value === ""){
            nameError.innerHTML = "Can't be blank";
        }else{
            nameError.innerHTML = "";
        }

        if(cardNumberInput.value === ""){
            numberError.innerHTML = "Can't be blank";
        }else{
            numberError.innerHTML = "";
        }

        if(monthInput.value === ""){
            monthError.innerHTML = "Can't be blank";
        }else{
            monthError.innerHTML = "";
        }

        if(yearInput.value === ""){
            yearError.innerHTML = "Can't be blank";
        }else{
            yearError.innerHTML = "";
        }

        if(cvcInput.value === ""){
            cvcError.innerHTML = "Can't be blank";
        }else{
            cvcError.innerHTML = "";
        }
        return false;
    }
}
function backToHome(){
    cardDetailsForm.classList.remove("hide");
    thankYouForm.classList.add("hide");

}
