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

function chartResize(container, height){
    let newAspectRatio = (container.parentNode.width / height) +1;
    console.log(`Aspect ratio:${newAspectRatio}`);
    console.log(container.parentNode)
    return newAspectRatio
}

//ACTIVITIES CHART

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
        }
    },
},);

for (let dataset of activityChart.data.datasets) {
    dataset.barPercentage = 0.5;
    console.log(dataset.barThickness);
}

Chart.defaults.font.size = adaptiveSizeCalculator(13, 1440, 13, 10);
Chart.defaults.font.family = 'Inter';
Chart.defaults.color = '#718EBF';

activityChart.options.aspectRatio = chartResize(ctx, 322);

console.log(Chart.defaults.font.size)
