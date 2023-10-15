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
let nameStr

// capitalise Name
function capitaliseWords(str) {
    if (str) {
        nameStr = str
        let nameOne = str.split(" ")[0]
        nameOne = nameOne[0].toUpperCase() + nameOne.slice(1)
        let nameTwo = str.split(" ")[1]
        if (nameTwo) nameTwo = nameTwo[0].toUpperCase() + nameTwo.slice(1)
        else return nameTwo = " "
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
        showError(2)
    if (!inputCvc.value) showError(3)
    if (!nameStr.trim().includes(" ")) showError(0)

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
    wrongFormat[1].textContent = "pls check card number"

}

confirmBtn.addEventListener(
    "click", () => {
        // restore Color
        restore()
        // Check For AlphaBets Errors
        if (hasAlphabet(InputNumber.value)) [
            wrongFormat[1].textContent = "Wrong Format Numbers Only"
        ]
        // Validate and Displays inputs data
        displayProperties()
        checkMonthYear()

        // Confirm Validation and Show all Error
        if (checkbox < 16) {
            showError(1)
            InputNumber.style.borderColor = "red"
        }
        if (checkbox === 16 && InputName.value
            && inputCvc.value && inputMonth.value && nameStr.trim().includes(" ")) {
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