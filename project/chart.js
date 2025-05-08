let canvasElement = document.getElementById("cookieChart")
let config = { 
    type: "pie",
    data: {labels: ["bill", "jeff", "mark", "john", "zuck"],

         datasets: [{ label: "number of cookies",
             data:[5,2,12,19,3],
            backgroundColor: [
                "red",
                "blue",
                "orange",
                "yellow",
                "green",
            ],
            borderColor: [
                "red",
                "blue",
                "orange",
                "yellow",
                "green",
            ],
            borderWidth: 1,
            },
        
        ],

        },
}
let cookieChart = new Chart(canvasElement, config)
