const toggleBtn=document.querySelector('.toggle_btn')
const toggleBtnIcon=document.querySelector('.toggle_btn i')
const dropDownMenu=document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen=dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList=isOpen
  ?'fa-solid fa-xmark'
  :'fa-solid fa-bars'
}
document.addEventListener('DOMContentLoaded', function () {
const lan = document.querySelector('.lan');
const dropdownMenu = document.querySelector('.dropdown_menu');

lan.addEventListener('mouseover', function () {
    dropdownMenu.classList.add('lan-hovered');
});

lan.addEventListener('mouseout', function () {
    dropdownMenu.classList.remove('lan-hovered');
});
});

    let subMenu = document.getElementById( 'subMenu' );

function toggleMenu(){
    subMenu.classList.toggle('open-menu');
}
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchClose = document.getElementById('search-close');
    const searchContent = document.getElementById('search-content');
    const backDrop = document.getElementById('backdrop');
  
    if (searchButton && searchClose && searchContent && backDrop) {
      searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
        backDrop.classList.add('show-backdrop');
      });
  
      searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
        backDrop.classList.remove('show-backdrop');
      });
    }
  });
  document.getElementById('new_phone').addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, ''); // Allow only numeric input
});

const wilayaWrapper = document.querySelector(".wilaya-wrapper2"),
selectBtn = wilayaWrapper.querySelector(".select-btn3"),
searchInp = wilayaWrapper.querySelector("input"),
options = wilayaWrapper.querySelector(".options");

let wilayas = ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Bejaia", "Biskra", "Bechar", "Blida", 
"Bouira", "Tamanrasset", "Tebessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Setif", "Saïda", 
"Skikda", "Sidi Bel Abbes", "Annaba", "Guelma", "Constantine", "Medea", "Mostaganem", "Msila", "Mascara", "Ouargla", "Oran", 
"El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdes", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras",
 "Tipaza", "Mila", "Aïn Defla", "Naama", "Aïn Temouchent", "Ghardaia", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal", 
 "Béni Abbès", "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M’Ghaier", "El Meniaa"];

function addWilaya(selectedWilaya){
    options.innerHTML ="";
    wilayas.forEach(wilaya => {
        //if selected wilaya and wilaya value is same then add selected class
        let isSelected = wilaya == selectedWilaya ? "selected" : "";
        //adding each country inside li and inserting all li inside options tag
        let li =`<li onclick="updateName(this)" class="${isSelected}">${wilaya}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    })
}
addWilaya();

function updateName(selectedLi){
    searchInp.value ="";
    addWilaya(selectedLi.innerText);
    wilayaWrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup",() =>{
    let arr =[];
    let searchedVal = searchInp.value.toLowerCase();
    //returning all wilayas from array which start with user input value and mapping returned wilaya with li and joining them
    arr = wilayas.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Wilaya not found :(`;
});

selectBtn.addEventListener("click", () => {
    wilayaWrapper.classList.toggle("active");
});


const jobWrapper = document.querySelector(".job-wrapper"),
selectBtn3 = jobWrapper.querySelector(".select-btn3"),
searchInp2 = jobWrapper.querySelector("input"),
options3 = jobWrapper.querySelector(".options3");

let jobs = [
    "Jeweler",
    "Baker",
    "Embroiderer",
    "Tiler",
    "Painter",
    "Heating engineer",
    "Boilermaker",
    "Shoemaker",
    "Hairdresser",
    "Cutler",
    "Cook",
    "Roofer",
    "Furniture maker",
    "Soap maker",
    "food products maker",
    "Musical instrument maker",
    "Blacksmith",
    "Florist",
    "Watchmaker",
    "Mason",
    "Leatherworker",
    "Carpenter",
    "Pastry chef",
    "Plumber",
    "Potter",
    "Bookbinder",
    "Tailor",
    "Weaver",
    "Basket weaver",
    "Glassblower",
    "Electrician",
    "Stained glass artisan",
    "Wood Turner",
    "Baby Sitter",
    "Other"
];



function addJob(selectedJob){
    options3.innerHTML ="";
    jobs.forEach(job => {
        //if selected wilaya and wilaya value is same then add selected class
        let isSelected = job == selectedJob ? "selected" : "";
        //adding each country inside li and inserting all li inside options tag
        let li =`<li onclick="updateName2(this)" class="${isSelected}">${job}</li>`;
        options3.insertAdjacentHTML("beforeend", li);
    })
}
addJob();

function updateName2(selectedLi){
    searchInp2.value ="";
    addJob(selectedLi.innerText);
    jobWrapper.classList.remove("active");
    selectBtn3.firstElementChild.innerText = selectedLi.innerText;
}

searchInp2.addEventListener("keyup",() =>{
    let arr =[];
    let searchedVal = searchInp2.value.toLowerCase();
    //returning all wilayas from array which start with user input value and mapping returned wilaya with li and joining them
    arr = jobs.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName2(this)">${data}</li>`).join("");
    options3.innerHTML = arr ? arr : `<p>Job not found :(`;
});

selectBtn3.addEventListener("click", () => {
    jobWrapper.classList.toggle("active");
});

const genderWrapper = document.querySelector(".gender-wrapper"),
selectBtn4 = genderWrapper.querySelector(".select-btn3"),
options4 = genderWrapper.querySelector(".options");

let genders = ["Male","Female"];

function addGender(selectedGender){
    options4.innerHTML ="";
    genders.forEach(gender => {
        let isSelected = gender == selectedGender ? "selected" : "";
        let li =`<li onclick="updateName3(this)" class="${isSelected}">${gender}</li>`;
        options4.insertAdjacentHTML("beforeend", li);
    })
}
addGender();

function updateName3(selectedLi3){
    addGender(selectedLi3.innerText);
    genderWrapper.classList.remove("active");
    selectBtn4.firstElementChild.innerText = selectedLi3.innerText;
}


selectBtn4.addEventListener("click", () => {
    genderWrapper.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
    function updateImage(input) {
        console.log('updateImage function called'); // for debugging
        const file = input.files[0];
        const imageElement = document.getElementById('profileImage');

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
            input.value = ''; // Clear the input field if an invalid file is selected
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    function updateImage(input) {
        const file = input.files[0];
        const imageElement = document.getElementById('profileImage');

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
            input.value = ''; // Clear the input field if an invalid file is selected
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const userButton = document.getElementById('user-button');
    const artisanButton = document.getElementById('artisan-button');
    const userForm = document.getElementById('userForm');
    const artisanForm = document.getElementById('artisanForm');

    if (userButton && artisanButton && userForm && artisanForm) {
        // Initially show user form and set user button as active
        userForm.classList.add('show-user');
        userButton.classList.add('active', 'disabled');

        userButton.addEventListener('click', () => showForm('userForm'));
        artisanButton.addEventListener('click', () => showForm('artisanForm'));
    }
});

function showForm(formId) {
    // Remove classes from all forms initially
    document.getElementById('userForm').classList.remove('show-user');
    document.getElementById('artisanForm').classList.remove('show-artisan');

    // Add class to the selected form
    var form = document.getElementById(formId);
    if (form) {
        if(formId ==='userForm'){
            document.getElementById('userForm').classList.add('show-user');
            document.getElementById('user-button').classList.add('active', 'disabled');
            document.getElementById('artisan-button').classList.remove('active', 'disabled');
        }
        else{
            document.getElementById('artisanForm').classList.add('show-artisan');
            document.getElementById('artisan-button').classList.add('active', 'disabled');
            document.getElementById('user-button').classList.remove('active', 'disabled');
            
        }
    } else {
        console.error('Form not found:', formId);
    }
}

const logoutButtons = document.querySelectorAll('.logout-button');
const logoutClose = document.getElementById('logout-close');
const logoutContent = document.getElementById('logout-content');
const backdrop = document.querySelector('.backdrop');


const openLogout = () => {
  logoutContent.classList.add('show-logout');
  backdrop.classList.add('show-backdrop');
};

const closeLogout = () => {
  logoutContent.classList.remove('show-logout');
  backdrop.classList.remove('show-backdrop');
};

// For click events
logoutButtons.forEach((button) => {
  button.addEventListener('click', openLogout);
});

logoutClose.addEventListener('click', closeLogout);

// For touch events
logoutButtons.forEach((button) => {
  button.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevent the default touch behavior
    openLogout();
  });
});

logoutClose.addEventListener('touchend', (event) => {
  event.preventDefault(); // Prevent the default touch behavior
  closeLogout();
});
const logoutButton = document.querySelector('.logout__button');

logoutButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Add your logout logic here if needed

    // Redirect to the home page
    window.location.href = 'home';
});
// Function to restrict input to numbers only
function restrictToNumbers(input) {
    input.value = input.value.replace(/\D/g, '');
}

// Function to limit the value of hour input between 0 and 23
function limitHourValue(input) {
    let originalValue = input.value;
    let hour = parseInt(input.value.replace(/^0+/, '')); // Remove leading zeros
    if (isNaN(hour) || hour < 0 || hour > 23 || (originalValue.startsWith('0') && originalValue.length > 1 && !originalValue.startsWith('00'))) {
        input.value = '00';
    } else {
        input.value = originalValue; // Update value without leading zeros
    }
}

// Function to limit the value of minute input between 0 and 59
function limitMinuteValue(input) {
    let originalValue = input.value;
    let minute = parseInt(input.value.replace(/^0+/, '')); // Remove leading zeros
    if (isNaN(minute) || minute < 0 || minute > 59 || (originalValue.startsWith('0') && originalValue.length > 1 && !originalValue.startsWith('00'))) {
        input.value = '00';
    } else {
        input.value = originalValue; // Update value without leading zeros
    }
}

// Add event listeners to the hour and minute inputs to restrict input and limit values
document.querySelectorAll('input[name="hour"], input[name="minute"]').forEach(function(input) {
    input.addEventListener('input', function() {
        restrictToNumbers(this);
        if (this.name === 'hour') {
            limitHourValue(this);
        } else if (this.name === 'minute') {
            limitMinuteValue(this);
        }
    });

    // Add event listener for Backspace key to allow deletion of automatically set 0
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && this.value === '0') {
            event.preventDefault(); // Prevent deletion of '0' when Backspace is pressed
            this.value = ''; // Clear the input value when Backspace is pressed
        }
    });
});


 // Function to limit the value of the day input between 1 and 31
 function limitDayValue(input) {
    let day = parseInt(input.value.replace(/^0+/, '')); // Remove leading zeros
    if (isNaN(day) || day < 1 || day > 31) {
        input.value = '';
    } else {
        input.value = day; // Update value without leading zeros
    }
}

// Function to limit the value of the day input based on the selected month
function limitDayValue(input) {
    let day = parseInt(input.value.replace(/^0+/, '')); // Remove leading zeros
    let monthInput = document.querySelector('input[name="month"]');
    let month = parseInt(monthInput.value.replace(/^0+/, '')); // Get the selected month

    // Set the maximum allowed day based on the selected month
    let maxDay;
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        maxDay = 31;
    } else if (month === 2) {
        maxDay = 28; // Assuming non-leap year by default
        let yearInput = document.querySelector('input[name="year"]');
        let year = parseInt(yearInput.value);
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            maxDay = 29; // Leap year
        }
    } else {
        maxDay = 30;
    }

    // Update the value of the day input based on the maximum allowed day
    if (isNaN(day) || day < 1 || day > maxDay) {
        input.value = '';
    } else {
        input.value = day; // Update value without leading zeros
    }
}

// Function to limit the value of the month input between 1 and 12
function limitMonthValue(input) {
    let month = parseInt(input.value.replace(/^0+/, '')); // Remove leading zeros
    if (isNaN(month) || month < 1 || month > 12) {
        input.value = '';
    } else {
        input.value = month; // Update value without leading zeros
    }

    // Update the maximum value of the day input based on the selected month
    limitDayValue(document.querySelector('input[name="day"]'));
}

// Function to limit the value of the year input to 4 digits
function limitYearValue(input) {
    let year = parseInt(input.value.replace(/\D/g, '')); // Remove non-digits
    if (isNaN(year) || input.value.length > 4) {
        input.value = '';
    } else {
        input.value = year; // Update value
    }
}

// Add event listeners to the inputs to restrict input and limit values
document.querySelectorAll('input[name="day"], input[name="month"], input[name="year"]').forEach(function(input) {
    input.addEventListener('input', function() {
        restrictToNumbers(this);
        if (this.name === 'day') {
            limitDayValue(this);
        } else if (this.name === 'month') {
            limitMonthValue(this);
        } else if (this.name === 'year') {
            limitYearValue(this);
        }
    });

    // Add event listener for Backspace key to allow deletion of automatically set value
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && this.value === '0') {
            event.preventDefault(); // Prevent deletion of '0' when Backspace is pressed
            this.value = ''; // Clear the input value when Backspace is pressed
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');

    // Extract the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    // Update the search input field with the query if it exists
    if (query && searchInput) {
        searchInput.value = query;
    }

    // Event listener for Enter key press in the search input field
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            const query = searchInput.value.trim();
            if (query !== '') {
                window.location.href = `search?query=${encodeURIComponent(query)}`;
            }
        }
    });
});

let profileImage = document.getElementById("profileImage");
let inputFile = document.getElementById("fileInput");

inputFile.onchange = function(){
    profileImage.src = URL.createObjectURL(inputFile.files[0]);//creat the url of the new image and update the existing url of the profile picture
}


document.addEventListener("DOMContentLoaded", function() {
    var userForm = document.getElementById("userForm");
    var artisanForm=document.getElementById("artisanForm");
    if (userForm) {
        userForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            var formData = new FormData(userForm);
            var url = userForm.getAttribute("action");

            fetch(url, {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to userprofile.html upon successful edit
                    window.location.href = 'userProfile';
                } else {
                    return response.json();
                }
            })
            .then(data => {
                // Clear previous error messages
                var errorMessages = document.querySelectorAll(".error-message");
                errorMessages.forEach(message => {
                    message.textContent = "";
                });

                // Display error messages for each field
                // For username error
                if (data.username_error) {
                    document.getElementById("username-error").querySelector("div.error-message").textContent = data.username_error;
                    document.getElementById("username-error").querySelector("i").style.display = 'block';
                } else {
                    document.getElementById("username-error").querySelector("div.error-message").textContent = '';
                    document.getElementById("username-error").querySelector("i").style.display = 'none';
                }

                // For email error
                if (data.email_error) {
                    document.getElementById("email-error").querySelector("div.error-message").textContent = data.email_error;
                    document.getElementById("email-error").querySelector("i").style.display = 'block';
                } else {
                    document.getElementById("email-error").querySelector("div.error-message").textContent = '';
                    document.getElementById("email-error").querySelector("i").style.display = 'none';
                }

                // For password error
                if (data.password_error) {
                    document.getElementById("password-error").querySelector("div.error-message").textContent = data.password_error;
                    document.getElementById("password-error").querySelector("i").style.display = 'block';
                } else {
                    document.getElementById("password-error").querySelector("div.error-message").textContent = '';
                    document.getElementById("password-error").querySelector("i").style.display = 'none';
                }

                if (data.success_message) {
                    // Display success message
                    alert(data.success_message);
                    // Optionally, redirect to another page
                    window.location.href = "/userProfile";
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    }
    else if (artisanForm){
        artisanForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            var formData = new FormData(artisanForm);
            var url = artisanForm.getAttribute("action");

            fetch(url, {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to userprofile.html upon successful edit
                    window.location.href = 'Profile';
                } else {
                    return response.json();
                }
            })
            .then(data => {
                // Clear previous error messages
                var errorMessages = document.querySelectorAll(".error-message");
                errorMessages.forEach(message => {
                    message.textContent = "";
                });

                // Display error messages for each field
                // For username error
                if (data.first_name_error) {
                    document.getElementById("first_name_error").querySelector("div.error-message").textContent = data.first_name_error;
                    document.getElementById("first_name_error").querySelector("i").style.display = 'block';
                } else {
                    document.getElementById("first_name_error").querySelector("div.error-message").textContent = '';
                    document.getElementById("first_name_error").querySelector("i").style.display = 'none';
                }

                // For email error
                if (data.email_error) {
                    document.getElementById("last_name_error").querySelector("div.error-message").textContent = data.last_name_error;
                    document.getElementById("last_name_error").querySelector("i").style.display = 'block';
                } else {
                    document.getElementById("last_name_error").querySelector("div.error-message").textContent = '';
                    document.getElementById("last_name_error").querySelector("i").style.display = 'none';
                }

                // For password error
                if (data.phone_number_error) {
                    document.getElementById("phone_number_error").querySelector("div.error-message").textContent = data.phone_number_error;
                    document.getElementById("phone_number_error").querySelector("i").style.display = 'block';
                } else {
                    document.getElementById("phone_number_error").querySelector("div.error-message").textContent = '';
                    document.getElementById("phone_number_error").querySelector("i").style.display = 'none';
                }
                if (data.email_error) {
                    document.getElementById("email_error").querySelector("div.error-message").textContent = data.email_error;
                    document.getElementById("email_error").querySelector("i").style.display = 'block';
                } else {
                    document.getElementById("email_error").querySelector("div.error-message").textContent = '';
                    document.getElementById("email_error").querySelector("i").style.display = 'none';
                }
                if (data.success_message) {
                    // Display success message
                    alert(data.success_message);
                    // Optionally, redirect to another page
                    window.location.href = "/profile";
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    }
});

