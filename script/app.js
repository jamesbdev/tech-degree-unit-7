const closeIcon = document.querySelector('.close-icon');
const alertModal = document.querySelector('.alert');

closeIcon.addEventListener('click', () => {
    if (alertModal) {
        alertModal.style.display = 'none';
    }
  
});

//charts 

const trafficChart = document.querySelector('#traffic-chart');
const dailyTraffic = document.querySelector('#daily-traffic');
const mobileUser = document.querySelector('#mobile-user');

//traffic chart
new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ["12-1", "1-2", "2-3","3-4", "4-5", "5-6", "6-7", "7-8"],
        datasets: [{
            label: 'Number of views',
            data: [500, 1200, 1500, 1000, 1200, 800, 900, 450, 200, 430],
            borderWidth: 1,
            borderColor: '#9b86dc',
            backgroundColor: '#9b86dc',
            color: '#9b86dc',
            fill: true,
            borderJoinStyle: 'round'
        }]
    }
})

//Daily traffic chart

new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Number of views',
            data: [100, 200, 250, 150, 300, 450, 200],
            borderWidth: 1,
            backgroundColor: '#9b86dc'
        }]
    }
})


//mobile user chart

new Chart(mobileUser, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            label: 'Number of views',
            data: [100, 200, 300],
            borderWidth: 1,
            backgroundColor: ['#9b86dc', 'mediumseagreen', 'darkturquoise']
        }]
    }
})





