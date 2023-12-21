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
        labels: ["12-1", "1-2", "2-3","3-4", "4-5", "5-6"],
        datasets: [{
            label: 'Number of views',
            data: [500, 2000, 1500, 2000, 2500, 3000],
            borderWidth: 1,
            borderColor: '#9b86dc',
            backgroundColor: '#9b86dc',
            color: '#9b86dc'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
  

    }
})

//Daily traffic chart

new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        datasets: [{
            label: 'Number of views',
            data: [100, 200, 300, 400, 500, 600],
            borderWidth: 1
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
            borderWidth: 1
        }]
    }
})





