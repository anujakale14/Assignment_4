//  function on drink change to show checkbox with dynamic data
let drinkChange = function(val) {

    let lbltxt = "";
    switch (val) {
        case 'tea':
            lbltxt = "Large Black Tea";
            break;
        case 'coffee':
            lbltxt = "Large Coffee";
            break;
        case 'drink':
            lbltxt = "Medium Drink";
            break;
        case 'cocktail':
            lbltxt = "Medium Cocktail";
            break;
        case 'liquor':
            lbltxt = "Small Liquor";
            break;
        case 'default':
            lbltxt = "Medium";
            break;
    }

    document.querySelector("#selectText").innerHTML = lbltxt;
    document.querySelector(".drinkData").style.display = "block";
    resetTextBox();
    resetCheckBox();
    document.querySelector(`[name=drink]`).nextElementSibling.style.display = "none";

}

// to reset last text area
let resetTextBox = function() {
    document.querySelector("#dynamicCheckText").value = "";
};

// to reset form and hide last text area
let resetHandle = function() {
    console.log("reset called");
    document.querySelector(".drinkData").style.display = "none";
}

// reset drink checkbox
let resetCheckBox = function() {
    document.querySelector("#drinkCheckBox").checked = false;
};

// on last  drink check box change
let onCheck = function(el) {
    resetTextBox();
    let field = document.querySelector("#dynamicCheckText");
    if (el.checked) {
        field.style.display = "block";
        field.setAttribute("required", "required");
    } else {
        field.removeAttribute("required");
        field.style.display = "none";
    }
}

// to validate all the form inputs
let validateInput = function(el) {

    var regexName = /^[a-zA-Z]+$/;
    var regexEmail =/([\w\.]+)@(northeastern.edu)/;// var regexEmail = /\S+@\S+\.\S{2,}/;
    var regexPhoneNumber = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var regexZip = /^\d{5}$/;

    let elementName = el.getAttribute("name");
    let showError = false;

    
    
    
    
    switch (elementName) {
        case 'firstName':
            if (!el.value.trim().match(regexName)) showError = true;
            break;
        case 'lastName':
            if (!el.value.trim().match(regexName)) showError = true;
            break;
        case 'emailId':
            if (!el.value.trim().match(regexEmail)) showError = true;
            break;
        case 'phoneNumber':
            if (!el.value.trim().match(regexPhoneNumber)) showError = true;
            break;
        case 'zipcode':
            if (!el.value.trim().match(regexZip)) showError = true;
            break;
        case 'text':
            if (el.value.length == 0) showError = true;
            break;
        case 'drink':
            console.log(el)
            if (el.value == "") showError = true;
            break;
        default:
            console.log("default");
            break;
    }
    let errorEl = document.querySelector(`[name=${elementName}]`).nextElementSibling;
    if (showError) {
        errorEl.style.display = "block"
    } else {
        errorEl.style.display = "none";
    }
    
}

let submitData = function() {
    validateCheckbox();
    validateInput();
    
    let form = document.getElementsByName('form')[0];
    form.submit();
    form.reset();
    return false;
    
};

let validateCheckbox = function() {
  console.log("validate checkbox")
  const form = document.querySelector('#form');
  
  const checkboxes = form.querySelectorAll('input[type=checkbox]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

  function checkValidity() {
      
    const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
    console.log("errorMessage",errorMessage)
    firstCheckbox.setCustomValidity(errorMessage);
    if(errorMessage.length>0){
      alert(errorMessage);
    }
   
}


  function init() {
      if (firstCheckbox) {
          for (let i = 0; i < checkboxLength; i++) {
              checkboxes[i].addEventListener('change', checkValidity);
          }

          checkValidity();
      }
  }


  function isChecked() {
    for (let i = 0; i < checkboxLength; i++) {
        if (checkboxes[i].checked) return true;
    }

    return false;
}

  init();

        
}