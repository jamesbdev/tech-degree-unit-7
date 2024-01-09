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

const trafficChartInstance = new Chart(trafficChart, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

//change chart data when user clicks on different timeframes 

const trafficNav = document.querySelector('.graph-nav');
const dailyBtn = document.querySelector('#daily');
const liItems = document.querySelectorAll('.traffic-nav li');
let activeElement = document.querySelector('.active');

//updates the chart data
const updateTrafficChart = (newData) => {
    trafficChartInstance.data = newData;
    trafficChartInstance.update();
 
}

const updateActiveClass = (e) => {
    if (activeElement) {
       activeElement.classList.remove('active');
    }
    e.target.classList.add('active');

    activeElement = e.target;
}


trafficNav.addEventListener('click', (event) => {
    //remove active class from previous element
    updateActiveClass(event);

    if (event.target.innerText == 'Daily') {
        let newData = {
            labels: ["S", "M", "T","W", "T", "F", "S"],
            datasets: [{
              data: [200, 250, 300, 270, 250, 320, 300],
              backgroundColor: 'rgba(116, 119, 191, .3)',
              borderWidth: 1,
            }]
        }
        updateTrafficChart(newData);  
    } else if (event.target.innerText == 'Weekly') {
        let newData = {
            labels: ["Week 1", "Week 2", "Week 3","Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
            datasets: [{
              data: [400, 800, 450, 600, 650, 500, 1000, 800],
              backgroundColor: 'rgba(116, 119, 191, .3)',
              borderWidth: 1,
            }]
        }
        updateTrafficChart(newData);  
  
    } else if (event.target.innerText == 'Monthly') {
        let newData = {
            labels: ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [{
              data: [1000, 1500, 1250, 1750, 2000, 1500, 1750, 1250],
              backgroundColor: 'rgba(116, 119, 191, .3)',
              borderWidth: 1,
            }]
        }
        updateTrafficChart(newData);  
    } else if (event.target.innerText == 'Hourly') {
        let newData = {
            labels: ["12-1", "1-2", "2-3","3-4", "4-5", "5-6", "6-7", "7-8"],
            datasets: [{
              data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850],
              backgroundColor: 'rgba(116, 119, 191, .3)',
              borderWidth: 1,
            }]
        }
        updateTrafficChart(newData);  
    }
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

const addModal = (message, message2, message3) => {
    //create a modal
    const alertModal = document.createElement('div');
    //add classes
    alertModal.classList.add('alert-modal');
    //create notifications
    const alert = document.createElement('li');
    const alert2 = document.createElement('li');
    const alert3 = document.createElement('li');
    //add classes
    alert.classList.add('notification');
    alert2.classList.add('notification');
    alert3.classList.add('notification');
    //create list element
    const list = document.createElement('ul');
    //add text content
    alert.innerText = message;
    alert2.innerText = message2;  
    alert3.innerText = message3;
    //append list to DOM  
    alertModal.appendChild(list);
    //append notifications to list
    list.appendChild(alert);
    list.appendChild(alert2);
    list.appendChild(alert3);
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
  addModal("You have 6 unread messages", "Your settings have been saved", "The mobile chart was recently updated");
  closeModal();
  //display the initial banner alert
  alertModal.style.display = 'block';
})


//autocomplete search

const searchInput = document.querySelector('#user-search');
const list = document.querySelector('.autocomplete-list');
const autoComplete = document.querySelector('.auto-complete');
const userData = [{
    name: 'Victoria Chambers',
    image: 'images/member-1.jpg',
    email: 'victoria.chambers80@example.com'
},
{
    name: 'Dale Byrd',
    image: 'images/member-2.jpg',
    email: 'dale.byrd52@example.com'
},
{
    name: 'Dawn Wood',
    image: 'images/member-3.jpg',
    email: 'dawn.wood16@example.com'
},
{
    name: 'Dan Oliver',
    image: 'images/member-4.jpg',
    email: 'dan.oliver82@example.com'
}];

const showList = (e) => {
     //store the value of the input
    const value = e.target.value.toLowerCase();
    if (value == '') {
      autoComplete.classList.add('hide');
      autoComplete.classList.remove('show');
      //remove list items 
      const listItems = document.querySelectorAll('.list-item');
      for(let i = 0; i < listItems.length; i++) {
        listItems[i].remove();
      }
    } else {
      autoComplete.classList.add('show');
      autoComplete.classList.remove('hide');
    }
}


//add an event listener when typing inside the input 
searchInput.addEventListener('keyup', (event) => {
//empty the list when the input is empty 
  showList(event);
  const value = event.target.value.toLowerCase();

  // Clear the list
while (list.firstChild) {
    list.removeChild(list.firstChild);
}

  //add list item that matches the search input value 
  //loop through the userData array
  for (let i = 0; i < userData.length; i++) {
    let userName = userData[i].name.toLowerCase();
    //check if the user name matches with the search input value 
    if (userName.includes(value)) {
        //create a list item
        const listItem = document.createElement('li');
        //add class to list item
        listItem.classList.add('list-item');
        //add the HTML needed in the list item
        listItem.innerHTML =  `
        <img src="${userData[i].image}" alt="${userData.name}">
        <div class="user-information">
            <p class="user-name">${userData[i].name}</p>
        </div>
        `;
        //add list item to DOM
        list.appendChild(listItem);
    } 
   const listItems = document.querySelectorAll('.list-item');

   //Remove list item if it doesn't match the search input value
   for(let j = 0; j < listItems.length; j++) {
        const listItem = listItems[j];
        const name = listItems[j].querySelector('.user-name');
        if (name !== null) {
            const nameText = name.innerText.toLowerCase();
            if (nameText.includes(value) == false) {
                //remove li 
                listItem.remove();
            }
        }
     
   }
}

//add a message if no user is found
const addNoUserMsg = () => {
   if (list.children.length == 0) {
     const noUserMessage = document.createElement('li');
     noUserMessage.textContent = 'No user found';
     noUserMessage.classList.add('list-item');
     list.appendChild(noUserMessage);
    }
}

addNoUserMsg();

})

const items = document.querySelectorAll('.autocomplete-list .list-item');

//add the name to the input after the user has clicked on the list item

const addNameToInput = () => {
    list.addEventListener('click', (event) => {
        //get the value of the list item 
        const value = event.target.innerText;
        //add the value to the input 
        searchInput.value = value;
        //hide the list
        autoComplete.classList.add('hide');
        autoComplete.classList.remove('show');
        //remove list items 
        const listItems = document.querySelectorAll('.list-item');
        for(let i = 0; i < listItems.length; i++) {
          listItems[i].remove();
        }
    })
}

addNameToInput();












