const debtForm = document.querySelector('#debt-form')
debtForm.addEventListener('submit', (event)=> submitForm(event))

const principal = document.getElementById("loan-amount")
const rate = document.getElementById("interest-rate")
const months = document.getElementById("number-of-months")
const userMonthlyPayment = document.getElementById("monthly-payment")

console.log((principal.value * rate.value) / ( 1 - (Math.pow((1 + rate.value), -months.value))))


function submitForm(event){
    event.preventDefault()
    // updateChart()
    calculateMonthlyPayment()
}

function calculateMonthlyPayment(){
    monthlyPayment = (principal.value * (rate.value/1000)) / ( 1 - (Math.pow((1 + (rate.value/1000)), -months.value)))
    userMonthlyPayment.textContent = `Monthly Payment: $${ parseFloat(monthlyPayment).toFixed(2)}`
}
