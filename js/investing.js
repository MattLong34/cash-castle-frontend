const investingForm = document.querySelector('#investing-form')
investingForm.addEventListener('submit', (event)=> submitForm(event))

const principal = document.getElementById("starting-amount")
const n = 12
const years = document.getElementById("number-of-years")
const rate = document.getElementById("rate-of-return")
const contribution = document.getElementById("monthly-contribution")
const userTotal = document.getElementById("total-display")
  
var investingChart = new Chart(document.getElementById("investingChart"), {
    type: 'line',
    data: {
        labels: ["Starting Value", "Final Value"],
        datasets: [
            {
                label: "Growth over time",
                backgroundColor: ["#69c9ac"],
                data: [0,0]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
})

function submitForm(event){
    event.preventDefault()
    updateChart()
    calculateUserTotal()
    totalColor()
}

function updateChart() {
    investingTotal = ((principal.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value))) + (contribution.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value)) - contribution.value)/(rate.value/(n*100))).toFixed(2)

    let annualArray = []

    investingChart.data.datasets[0].data = [principal.value,investingTotal]
    investingChart.data.labels = [principal.value,investingTotal]
    investingChart.update()
}

function calculateUserTotal(){
    investingTotal = (principal.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value))) + (contribution.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value)) - contribution.value)/(rate.value/(n*100))

    userTotal.textContent = `Ending Balance: $${parseFloat(investingTotal).toFixed(2)}`
}

function totalColor(){
    investingTotal = (principal.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value))) + (contribution.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value)) - contribution.value)/(rate.value/(n*100))


    if (investingTotal < 0) {
        userTotal.style.background = "#da4f7a";
        userTotal.textContent = `Ending Balance: $${parseFloat(investingTotal).toFixed(2)}`
    } else if (investingTotal > 0) {
        userTotal.style.background = "#69c9ac";
        userTotal.textContent = `Ending Balance: $${parseFloat(investingTotal).toFixed(2)}`
    } else {
        userTotal.style.background = "lightgray";
        userTotal.textContent = `Ending Balance: $${parseFloat(investingTotal).toFixed(2)}`
    } 
}

function investingTotalWithContributions(){
    newTotal = (principal.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value))) + (contribution.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value)) - contribution.value)/(rate.value/(n*100))
    console.log(newTotal.toFixed(2))
}













