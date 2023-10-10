//  variable decleration 
const InputName = document.querySelector('#cardHolder')
const cardName = document.querySelector(".name")
const cardNumber = document.querySelector('.number')
const InputNumber = document.querySelector("#cardNumber")
const inputMonth = document.querySelector('#cardYear')
const cardMonth = document.querySelector(".month")
const inputYear = document.querySelector('#cardYear')
const cardYear = document.querySelector(".year")
const cardCvc = document.querySelector('.cvv')
const inputCvc = document.querySelector("#cvc")
const confirmBtn = document.querySelector(".confirm")
const form = document.querySelector(".form")
const success = document.querySelector(".success")
const wrongFormat = document.querySelectorAll(".wrongFormat")
let checkbox

// capitalise Name
function capitaliseWords(str) {
    if (str) {
        let nameOne = str.split(" ")[0]
        nameOne = nameOne[0].toUpperCase() + nameOne.slice(1)
        let nameTwo = str.split(" ")[1]
        if (nameTwo) {
            nameTwo = nameTwo[0].toUpperCase() + nameTwo.slice(1)
        }
        else {
            return
        }
        const realName = nameOne + " " + nameTwo
        return realName
    }
}

// show error
function showError(n) {
    wrongFormat[n].style.visibility = "visible"

}
// Format card input
function formatCardNumber(number) {
    checkbox = (parseInt(number) + "").length
    if (!number) return
    let cardNo = number.match(/.{1,4}/g).join(" ")
    return cardNo
}
// show month errir
function checkMonthYear() {
    if (!inputYear.value || !inputMonth.value)
        showError(1)
    if (!inputCvc.value) showError(2)


}

// display properties
function displayProperties() {
    cardName.textContent = capitaliseWords(InputName.value) || "Jane Applseed"
    cardNumber.textContent = formatCardNumber(InputNumber.value) || "0000 0000 0000 0000"
    cardYear.textContent = inputYear.value || "00"
    cardMonth.textContent = inputMonth.value || '00'
    cardCvc.textContent = inputCvc.value

}
function restore() {
    InputName.style.borderColor = "grey"
    wrongFormat.forEach(
        x => x.style.visibility = "hidden"
    )
    wrongFormat[0].textContent = "pls check card number"

}

confirmBtn.addEventListener(
    "click", () => {
        // restore Color
        restore()
        if (hasAlphabet(InputNumber.value)) [
            wrongFormat[0].textContent = "Wrong Format Numbers Only"
        ]

        displayProperties()
        checkMonthYear()
        console.log(checkbox)
        if (checkbox < 16) {
            showError(0)
            InputNumber.style.borderColor = "red"
        }
        if (checkbox === 16 && InputName.value
            && inputCvc.value && inputMonth.value) {
            form.style.display = "none"
            success.style.display = "block"
        }


    }
)
// show alphabetical error
function hasAlphabet(str) {
    let test = /[a-zA-Z]/

    return test.test(str)
}