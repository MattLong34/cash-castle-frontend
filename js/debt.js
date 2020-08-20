const debtForm = document.querySelector('#debt-form')
debtForm.addEventListener('submit', (event)=> submitForm(event))

const principal = document.getElementById("loan-amount")
const rate = document.getElementById("interest-rate")
const months = document.getElementById("number-of-months")
const userMonthlyPayment = document.getElementById("monthly-payment")

function submitForm(event){
    event.preventDefault()
    // updateChart()
    calculateMonthlyPayment()
    updateChart()
}

function calculateMonthlyPayment(){
    monthlyPayment = (principal.value * (rate.value/1000)) / ( 1 - (Math.pow((1 + (rate.value/1000)), -months.value)))
    userMonthlyPayment.textContent = `Monthly Payment: $${parseFloat(monthlyPayment).toFixed(2)}`
}


var debtChart = new Chart(document.getElementById("debtChart"), {
    type: 'bar',
    data: {
        // labels: [0,1],
        datasets: [
            {
                label: "Loan value",
                backgroundColor: ["#da4f7a"],
                data: [0,0],
                hoverBackgroundColor: ["#da4f7a"]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }],
            xAxes: [{
                stacked: true,
            }]
        }
    }
})


function updateChart(){   
    monthlyPayment = (principal.value * (rate.value/1000)) / ( 1 - (Math.pow((1 + (rate.value/1000)), -months.value)))
    let monthlyArray = []
    for (i = months.value; i >= 0; i--) {
        let total = i * monthlyPayment
        monthlyArray.push(total)
        total = total - monthlyPayment
        
        monthlyArray = monthlyArray.map(function(each_element){
            return Number(each_element.toFixed(2));
        });
    }
    
    debtChart.data.datasets[0].data = monthlyArray
    debtChart.data.labels = monthlyArray
    debtChart.update()
}






// monthlyArray = monthlyArray.map(function(each_element){
//     return Number(each_element.toFixed(2));
// });

