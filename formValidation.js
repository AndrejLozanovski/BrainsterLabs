// Custom select option
const button = document.querySelector("#students");
const select = document.querySelector("#dropdown");
const options = document.querySelectorAll(".option");
const selectlabel = document.querySelector("#select-label");

// Adding event listener on the select button to trigger the dropdown to show on click
// and hide on click as well
button.addEventListener("click", function (e) {
  e.preventDefault();
  toggleHidden();
});

// function to toggle hidden class on the dropdown
function toggleHidden() {
  select.classList.toggle("hidden");
}

// function that allows us to pick one item from the dropdown menu
options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
  });
});

// function that triggers the option that we choose and gets the value of it
function setSelectTitle(e) {
  const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
  selectlabel.innerText = labelElement;
  toggleHidden();
}

// Validation for the form
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const students = document.getElementById("students");
const company = document.getElementById("company");
const contact = document.getElementById("contact");

// Adding event listener to the submit button that checks if the form inputs are valid or not
// if they are not valid prevents us from submitting it
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // If all inputs are valid submit the form
  if (checkInputs()) {
    form.submit();
  }
});

// function that checks every input if its valid
function checkInputs() {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const studentsValue = document.querySelector(".select");
  const companyValue = company.value.trim();
  const contactValue = contact.value.trim();

  // check validity
  let isValid = true;

  // if the fullname input is empty give error message that tells what should be written
  // and make the input red
  if (fullnameValue === "") {
    ErrorFor(fullname, "Ве молиме внесете го вашето име и презиме");
    isValid = false;
  } // makes sure the name contains only letters, there is function on the bottom for it
  else if (!isName(fullnameValue)) {
    ErrorFor(fullname, "Ве молиме внесете го вашето име и презиме");
    isValid = false;
  } // if the input is correct make the input field green
  else {
    SuccessFor(fullname, "");
  }

  // if the email input is empty give error message that tells what should be written
  // and make the input red
  if (emailValue === "") {
    ErrorFor(email, "Ве молиме внесете ја вашата имејл адреса");
    isValid = false;
  } // makes sure the email is in the right form, there is function on the bottom for it
  else if (!isEmail(emailValue)) {
    ErrorFor(email, "Ве молиме внесете валидана имејл адреса (user@domain.com)");
    isValid = false;
  } // if the input is correct make the input field green
  else {
    SuccessFor(email, "");
  }

  if (studentsValue.innerHTML == "Изберете тип на студент") {
    ErrorFor(students, "Ве молиме изберете тип на студент");
    isValid = false;
  } // if the input is correct make the input field green
  else if (studentsValue.innerHTML !== "Изберете тип на студент") {
    SuccessFor(students, "");
  }

  // if the company input is empty give error message that tells what should be written
  // and make the input red
  if (companyValue === "") {
    ErrorFor(company, "Ве молиме внесете го името на вашата компанија");
    isValid = false;
  } // if the input is correct make the input field green
  else {
    SuccessFor(company, "");
  }

  // if the contact input is empty give error message that tells what should be written
  // and make the input red
  if (contactValue === "") {
    ErrorFor(contact, "Ве молиме внесете го вашиот телефонски број ");
    isValid = false;
  } // makes sure the phone number is with the right prefix for the country,
  // there is function on the bottom for it
  else if (!isPhoneNumber(contactValue)) {
    ErrorFor(contact, "Ве молиме внесете валиден телефонски број (+389XXxxxxxx)");
    isValid = false;
  } // if the input is correct make the input field green
  else {
    SuccessFor(contact, "");
  }

  // Return the flag to indicate overall form validity
  return isValid;
}

// function that displays error message and turn the input red if there is an error (wrong input)
function ErrorFor(input, message) {
  const inputControl = input.closest(".input-control");
  const small = inputControl.querySelector("small");

  small.innerText = message;

  inputControl.className = "input-control error";
}

// function that turns the input green and removes error class if there was and error before
function SuccessFor(input, message) {
  const inputControl = input.closest(".input-control");
  const small = inputControl.querySelector("small");

  small.innerText = message;

  inputControl.className = "input-control success";
}

// function that checks if the name is only with letters
function isName(fullname) {
  return /^[a-zA-Z\s]+$/i.test(fullname);
}

// function that checks the email if its in the right form
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// function that checks the phone number if its with prefix coresponding to the country
function isPhoneNumber(contact) {
  return /^[\+]?[(]?[3, 8 , 9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(contact);
}
