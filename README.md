# Cash Castle
> Your financial sandbox

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
We believe that personal finance shouldn't be scary. Cash Castle is fun and interactive sandbox which allows you to play with the numbers related to budgeting, debt repayment, and investing.

We're here to give you the tools to slay your financial dragons and build your own Cash Castle. Jump into the sandbox today!

## Intro Video
[Cash Castle on YouTube]()

## Technologies
* HTML5
* CSS
* JavaScript
* Bootstrap 4
* Chart.js
* Flaticon
* Animista
* Rendro Countdown

## Setup
Cash Castle is live! Visit Cash Castle out in the wild at https://cash-castle.web.app today. No further setup required! 

## Code Examples
```javaScript
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
```

```javascript
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
})
```

## Features
* Easily add and interact with budgeting numbers
* Tinker with the different factors that will impact a loan in repayment
* Play with investment numbers and explore the effects of compound interest
* Follow links to external financial advice
* Live countdown timer shows when to expect a new feature
* Fully responsive web-app that looks clean on all devices

## Status
Version 1.0 is complete and deployed (https://cash-castle.web.app)! 

Future versions may include a backend allowing a user to securely log-in and save their data to a profile, additional fields to increase chart functionality, adding completely new tools, and implementing a few UI/UX improvements. 

## Inspiration
The inspiration for Cash Castle came from my own experience with personal finance. There are a lot of great tools out there, but I have found that my go-to's are scattered around on different sites. I wanted to build the application that has some of my go-to tools all in the same location. 

Cash Castle is designed to be a sandbox for playing around with your numbers. Thus, it's a perfect complement to other apps already on the market.

I hope that you find using Cash Castle to be enjoyable and helpful!

## Contact
[Matt Long](https://www.linkedin.com/in/mattlong34/)

Feel free to contact me with any questions or suggestions!

## License
[Click to view](https://github.com/MattLong34/cash-castle-frontend/blob/master/LICENSE.md)
