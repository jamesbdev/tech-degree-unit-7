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



//adds success message when user submits form

const submitBtn = document.querySelector('#submit-btn');
let validation = false;

const addValidation = () => {
    const inputValue = document.querySelector('#user-search').value;
    const formElement = document.querySelector('#message-form');
    const errorElement = document.querySelector('.error-message');
    const errorEmpty = document.querySelector('.error-empty');
    const textArea = document.querySelector('#message').value;

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
        formElement.appendChild(errorMessage);
    }
 } else if (textArea == '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = "Error: Please enter a message";
        errorMessage.classList.add('error-empty');
        //check if error message already exists
        if (errorEmpty == null) {
            //append to DOM if it doesn't exist
            formElement.appendChild(errorMessage);
        }
    }

}

const addSuccessMsg = () => {
    const message = document.createElement('p');
    message.classList.add('success-message');
    const successMessage = document.querySelector('.success-message');
    const formElement = document.querySelector('#message-form');
    const errorMessage = document.querySelector('.error-message');
    const errorEmpty = document.querySelector('.error-empty');

    //checks if success message already exists
    if (successMessage == null && errorMessage == null && errorEmpty == null) {
        message.innerText = "Thank you. You have sent a message";
        formElement.appendChild(message);
    }
}


submitBtn.addEventListener('click', (event)=> {
    //stop form from submitting
    event.preventDefault();
    addValidation();
    addSuccessMsg();

})








