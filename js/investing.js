const investingForm = document.querySelector('#investing-form')
investingForm.addEventListener('submit', (event)=> submitForm(event))

const principal = document.getElementById("starting-amount")
const n = 12
const years = document.getElementById("number-of-years")
const rate = document.getElementById("rate-of-return")
const result = document.getElementById("result")
const userTotal = document.getElementById("total-display")

// function calculate() {
//     // The equation is A = p * [[1 + (r/n)] ^ nt]
//     A = (p.value * Math.pow((1 + (r / (n * 100))), (n * t)));
  
//     // toFixed is used for rounding the amount with two decimal places.
//     const totalAmount = result.innerHTML = "The total amount is " + A.toFixed(2);
  
//     const interestAmount = result.innerHTML += "<br> The interest is " + (A.toFixed(2) - p).toFixed(2);
//   }

  
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
    // investingChart.data.datasets[0].data = [p.value,totalAmount];
    investingTotal = (principal.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value))).toFixed(2)

    let annualArray = []
    // for (i = years.value; i >= 0; i--) {
    //     let total = i * monthlyPayment

    //     annualArray.push(total)
        
    //     anualArray = monthlyArray.map(function(each_element){
    //         return Number(each_element.toFixed(2));
    //     });
    // }

    // investingChart.data.datasets[0].data = annualArray
    // investingChart.data.labels = annualArray

    investingChart.data.datasets[0].data = [principal.value,investingTotal]
    investingChart.data.labels = [principal.value,investingTotal]
    investingChart.update()
}

function calculateUserTotal(){
    investingTotal = (principal.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value))).toFixed(2)
    userTotal.textContent = `Ending Balance: $${parseFloat(investingTotal).toFixed(2)}`
}

function totalColor(){
    investingTotal = (principal.value * Math.pow((1 + (rate.value / (n * 100))), (n * years.value))).toFixed(2)

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















// function floor(val)
// {
//   var newval=100*val;
//   newval = Math.round(newval);
//   var dollars = Math.floor(newval/100);
//   var cents = newval - dollars * 100;
//   if (cents == 0) {var centst = new String("00");}
//   if (cents < 10) {var centst = "0" + String(cents);}
//   if (cents > 9) {var centst = new String(cents);}
//   return (dollars + "." + centst);
// }

// function dosum()
// {
//   var mi = document.temps.IR.value / 1200;
//   var base = Number(document.temps.IB.value);
//   document.temps.FA.value = "";
//   var pp = 0;
//   var yr = 0;
//   var mc = Number(document.temps.MC.value);
//   var yrs = Number(document.temps.YR.value);
//   var tc = floor(base + 12 * yrs * mc);
//   for (i=0; i< yrs * 12; i++)
//   {
//     base = base * (1 + mi) + mc;
//     pp++;
//     if (pp == 12)
//     {
//       yr++;
//       if (yr < 10) { sp = " "; } else { sp = ""; }
//       document.temps.FA.value = 
//         document.temps.FA.value + "\n" + sp + yr + " : " + floor(base);
//       pp = 0;
//     }
//   }
//   document.temps.FB.value = floor(base);
//   document.temps.TC.value = floor(tc)
//   document.temps.TE.value = floor(base - tc)
// }