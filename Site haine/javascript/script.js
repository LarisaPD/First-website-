let nameErr = document.getElementById('error-name');
let emailErr = document.getElementById('error-email');
let phoneErr = document.getElementById('error-phone');
let subjectErr = document.getElementById('error-subject');
let messageErr = document.getElementById('error-message');

function validateName() {
    let name = document.getElementById('floatingName').value;
    if (name.trim() == "") {
        nameErr.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)) {
        nameErr.innerHTML = 'Write full name with both words starting with capital letters';
        return false;
    }

    nameErr.innerHTML = ''; 
    return true;
}

function validatePhone() {
    let phone = document.getElementById('floatingPhone').value;
    if (phone.trim() == "") {
        phoneErr.innerHTML = 'Phone is required';
        return false;
    }
    else if (phone.length !== 10 || !phone.match(/^\d{10}$/)) {
        phoneErr.innerHTML = 'Phone should be 10 digit and contain only digits';
        return false;
    }

    phoneErr.innerHTML = '';
    return true;
}

function validateEmail() {
    let email = document.getElementById('floatingEmail').value;
    if (email.trim() == "") {
        emailErr.innerHTML = 'Email is required';
        return false;
      }
    else if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailErr.innerHTML = 'Enter a valid email address';
        return false;
    }

    emailErr.innerHTML = '';
    return true;
}


function validateSubject() {
    let subject = document.getElementById('floatingSubject').value;
    if (subject.trim() == "") {
        subjectErr.innerHTML = 'Subject is required';
        return false;
    }

    else if (subject.length < 5) {
        subjectErr.innerHTML = 'Write a longer subject';
        return false;
    }

    subjectErr.innerHTML = ''; 
    return true;
}

function validateMessage() {
    let message = document.getElementById('floatingTextarea2').value;
    if (message.trim() == "") {
       messageErr.innerHTML = 'Message is required';
        return false;
    }

    else if (message.length < 10) {
       messageErr.innerHTML = 'Write a longer message';
        return false;
    }

    messageErr.innerHTML = ''; 
    return true;
}

function validateForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPhoneValid = validatePhone();
    let isSubjectValid = validateSubject();
    let isMessageValid = validateMessage();

    return isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid;
}


document.addEventListener('DOMContentLoaded', function() {
    // Codul JavaScript care depinde de elementele DOM poat
const form = document.getElementById('form');

const submitCountElement = document.getElementById('submitCount');
let submitCount = 0;
function handleSubmit(event) {
  event.preventDefault();

  if(validateForm() == true)
  {
      submitCount++;
  }

  const formData = {
      name: document.getElementById('floatingName').value,
      phone: document.getElementById('floatingPhone').value,
      email: document.getElementById('floatingEmail').value,
      subject: document.getElementById('floatingSubject').value,
      message: document.getElementById('floatingTextarea2').value
  };


  let existingFormData = JSON.parse(localStorage.getItem('formData'));
  if (!Array.isArray(existingFormData)) {
      existingFormData = []; 
      // Initialize as an empty array if not an array
  }

  existingFormData.push(formData);

  const updatedFormDataJSON = JSON.stringify(existingFormData);
  localStorage.setItem('formData', updatedFormDataJSON);

  const submitCountElement = document.getElementById('submitCount');
  submitCountElement.textContent = submitCount;

  form.reset();
}
form.addEventListener('submit', handleSubmit);

});