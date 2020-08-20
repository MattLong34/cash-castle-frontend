
const budgetingForm = document.querySelector('#budgeting-form')
budgetingForm.addEventListener('submit', (event)=> submitForm(event))

// const resetForm = document.querySelector('#budgeting-form')
// resetForm.addEventListener('submit', (event)=> resetChart(event))

const userIncome = document.getElementById('income')
const userHousing = document.getElementById('housing')
const userTransportation = document.getElementById('transportation')
const userFood = document.getElementById('food')
const userSavings = document.getElementById('savings')
const userBills = document.getElementById('bills')
const userTotal = document.getElementById('user-income')

var myDoughnutChart = new Chart(document.getElementById("myDoughnutChart"), {
    type: 'doughnut',
    data: {
        labels: ["Housing", "Transportation", "Food", "Savings", "Bills"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#f27e20", "#767ae6","#edc560","#45a7ee","#da4f7a"],
                data: [1,1,1,1,1]
            }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Your Budget Breakdown'
        }
    }
});

function submitForm(event){
    event.preventDefault()
    updateChart()
    updateTotal()
    incomeColor()
}

function updateChart() {
    myDoughnutChart.data.datasets[0].data = [userHousing.value,userTransportation.value,userFood.value,userSavings.value,userBills.value];
    myDoughnutChart.update()
}

function updateTotal() {
    const calculatedTotal = parseFloat(userIncome.value || 0) - (parseFloat(userHousing.value || 0) + parseFloat(userTransportation.value || 0) + parseFloat(userFood.value || 0) + parseFloat(userSavings.value || 0) + parseFloat(userBills.value || 0))
}

function incomeColor(){
    const calculatedTotal = parseFloat(userIncome.value) - (parseFloat(userHousing.value) + parseFloat(userTransportation.value) + parseFloat(userFood.value) + parseFloat(userSavings.value) + parseFloat(userBills.value))

    if (calculatedTotal < 0) {
        userTotal.style.background = "#da4f7a";
        userTotal.textContent = `Over Budget: $${ parseFloat(calculatedTotal).toFixed(2)}`
    } else if (calculatedTotal > 0) {
        userTotal.style.background = "#69c9ac";
        userTotal.textContent = `Remaining Budget: $${ parseFloat(calculatedTotal).toFixed(2)}`
    } else {
        userTotal.style.background = "lightgray";
        userTotal.textContent = `Budget on Track: $${ parseFloat(calculatedTotal).toFixed(2)}`
    } 
}

// function submitForm(event){
//     event.preventDefault()
//     resetChart()
// }

// function resetChart() {
//     myDoughnutChart.data.datasets[0].data = [35,20,15,15,20];
//     myDoughnutChart.update()
// }