const closeIcon = document.querySelector('.close-icon');
const alertModal = document.querySelector('.alert');

closeIcon.addEventListener('click', () => {
    if (alertModal) {
        alertModal.style.display = 'none';
    }
  
});

//charts 

const trafficChart = document.querySelector('#traffic-chart');


new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ["12-1", "1-2", "2-3","3-4", "4-5", "5-6"],
        datasets: [{
            label: '# of views',
            data: [500, 2000, 1500, 2000, 2500, 3000],
            borderWidth: 1
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


