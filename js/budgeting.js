
const budgetingForm = document.querySelector('#budgeting-form')
budgetingForm.addEventListener('submit', (event)=> submitForm(event))

// const resetForm = document.querySelector('#budgeting-form')
// resetForm.addEventListener('submit', (event)=> resetChart(event))

const userHousing = document.getElementById('housing')
const userTransportation = document.getElementById('transportation')
const userFood = document.getElementById('food')
const userSavings = document.getElementById('savings')
const userBills = document.getElementById('bills')

var myDoughnutChart = new Chart(document.getElementById("myDoughnutChart"), {
    type: 'doughnut',
    data: {
        labels: ["Housing", "Transportation", "Food", "Savings", "Bills"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#00d7ff", "#e86836","#ffc900","#00ff73","#ff00f9"],
                data: [35,20,15,15,20]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Your Budget Breakdown'
        },
        tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
              }
            }
        }
        // plugins: {
        //     labels: {
        //         render: 'percentage',
        //         fontColor: ['white'],
        //         precision: 2
        //     }
        // }
    }
});

function submitForm(event){
    event.preventDefault()
    updateChart()
}

// let total = userHousing.value + userTransportation.value + userFood.value + userSavings.value + userBills.value
const total = parseInt(userHousing.value) + parseInt(userTransportation.value) + parseInt(userFood.value) + parseInt(userSavings.value) + parseInt(userBills.value)
const userHousingInteger = parseInt(userHousing.value)

function updateChart() {
    myDoughnutChart.data.datasets[0].data = [userHousing.value,userTransportation.value,userFood.value,userSavings.value,userBills.value];
    myDoughnutChart.update()
}

// function submitForm(event){
//     event.preventDefault()
//     resetChart()
// }

// function resetChart() {
//     myDoughnutChart.data.datasets[0].data = [35,20,15,15,20];
//     myDoughnutChart.update()
// }