function adaptiveSizeCalculator(designElementSize, designWidth, maxElementSize, minElementSize){
    let ratio = designElementSize/designWidth;
    
    let deviceWidth = document.documentElement.clientWidth;

    if (deviceWidth*ratio > maxElementSize){
        return maxElementSize
    }

    else if (deviceWidth *ratio < minElementSize){
        return minElementSize
    }
    return deviceWidth * ratio
}

function chartResize(container){
    let newAspectRatio = (container.parentNode.width / container.height) + 100;
    return newAspectRatio
}

//ACTIVITIES CHART
Chart.defaults.color = '#718EBF';
Chart.defaults.font.size = adaptiveSizeCalculator(13, 1440, 13, 10);
Chart.defaults.font.family = 'Inter';

const ctx = document.getElementById('activityChart');
let activityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Sat",
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",],
        datasets: [
            {
                label: 'Withdraw',
                data: [480,
                    245,
                    350,
                    400,
                    300,
                    150,
                    450,],
                borderWidth: 0,
                backgroundColor: '#1814F3',
                borderSkipped: 'false',
                borderRadius: 35,
                barPercentage: 0.5,
            },
            {
                label: 'Deposit',
                data: [
                    235,
                    520,
                    350,
                    180,
                    500,
                    200,
                    300],
                borderWidth: 0,
                backgroundColor: '#16DBCC',
                borderSkipped: 'false',
                borderRadius: 35,
                barPercentage: 0.5,
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels:{
                    color: '#718EBF',
                    boxWidth: 15,
                    boxHeight: 15,
                }
            },
        }
    },
},);

for (let dataset of activityChart.data.datasets) {
    dataset.barPercentage = 0.5;
}



console.log(activityChart)

activityChart.options.aspectRatio = chartResize(ctx);


//BALANCE CHART 

const balanceContainer = document.getElementById('balanceChart');

let balanceChart = new Chart(balanceContainer, {
    type: 'line',
    data: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            data: [200, 400, 450, 300, 450, 700, 500],
            borderWidth: 3,
            backgroundColor: '#1814F3',
            borderColor: '#1814F3',
            fill: {
                target: 'origin',
                above: 'rgba(45, 96, 255, 0.5)'
            },
            pointRadius: 0,
            pointHoverRadius: 0,
            pointHitRadius: 20,
            tension: 0.3


        }]
    },
    options: {
        plugins:{
            legend:{
                display: false
            }
        }
    }
});

balanceChart.options.aspectRatio = chartResize(balanceContainer)