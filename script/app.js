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


let trafficData = {
    labels: ["12-1", "1-2", "2-3","3-4", "4-5", "5-6", "6-7", "7-8"],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }]
}

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}
//traffic chart
new Chart(trafficChart, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
})

//Daily traffic chart


const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: 'Number of views',
        data: [100, 200, 250, 150, 300, 450, 200],
        borderWidth: 1,
        backgroundColor: '#9b86dc'
    }]
}

const dailyOptions = {
    aspectRatio: 2,
    scales: {
    y: {
        beginAtZero: true
    },
},
  plugins: {
    legend: {
        display: false
    }
  }
}

new Chart(dailyTraffic, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions

}); 


//mobile user chart

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: 'Number of views',
        data: [100, 200, 300],
        borderWidth: 1,
        backgroundColor: ['#9b86dc', '#78CF82', '#51BCC8']
    }]
}

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
}

new Chart(mobileUser, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
})



//adds success message when user submits form

const submitBtn = document.querySelector('#submit-btn');
let validation = false;

const addValidation = () => {
    const inputValue = document.querySelector('#user-search').value;
    const formElement = document.querySelector('#message-form');
    const errorElement = document.querySelector('.error-message');
    const errorEmpty = document.querySelector('.error-empty');
    const textArea = document.querySelector('#message').value;
    const sectionTitle = document.querySelector('.message-title');

 //remove previous messages
    if (errorElement) {
        errorElement.remove();
    } else if (errorEmpty) {
        errorEmpty.remove();
    }

 if (inputValue == '') {
    const errorMessage = document.createElement('p');
    errorMessage.innerText = "Error: Please select a user";
    errorMessage.classList.add('error-message');
    //check if error message already exists
    if (errorElement == null) {
        //append to DOM if it doesn't exist
       sectionTitle.insertAdjacentElement('afterend', errorMessage);
    }
 } else if (textArea == '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = "Error: Please enter a message";
        errorMessage.classList.add('error-empty');
        //check if error message already exists
        if (errorEmpty == null) {
            //append to DOM if it doesn't exist
            sectionTitle.insertAdjacentElement('afterend', errorMessage);
        }
    }

}

const addSuccessMsg = () => {
    const message = document.createElement('p');
    message.classList.add('success-message');
    const successMessage = document.querySelector('.success-message');
    const formElement = document.querySelector('#message-form');
    const sectionTitle = document.querySelector('.message-title');
    const errorMessage = document.querySelector('.error-message');
    const errorEmpty = document.querySelector('.error-empty');

    //checks if success message already exists
    if (successMessage == null && errorMessage == null && errorEmpty == null) {
        message.innerText = "Thank you. You have sent a message.";
        sectionTitle.insertAdjacentElement('afterend', message);
    }

}


submitBtn.addEventListener('click', (event)=> {
    //stop form from submitting
    event.preventDefault();
    addValidation();
    addSuccessMsg();

})

//display extra pop up when user clicks the bell icon

const bellIcon = document.querySelector('.bell-container');

const closeModal = () => {
    const closeIcon = document.querySelector('.alert-modal .close-icon');
    //add event listener to close icon
    closeIcon.addEventListener('click', () => {
        const alertModal = document.querySelector('.alert-modal');
        alertModal.remove();
    })
}

const addModal = () => {
    //create a modal
    const alertModal = document.createElement('div');
    //add text content
    alertModal.innerHTML = "<p>You have 6 unread messages</p>";
    //add classes
    alertModal.classList.add('alert-modal');
    //create close icon
    const closeIcon = document.createElement('span');
    closeIcon.innerText = 'X';
    closeIcon.classList.add('close-icon');
    //append close icon
    alertModal.appendChild(closeIcon);
    //get the main element
    const container = document.querySelector('.main');
    //append modal to main element
    container.appendChild(alertModal);
}

bellIcon.addEventListener('click', () => {
  addModal();
  closeModal();
  //display the initial banner alert
  alertModal.style.display = 'block';
})








