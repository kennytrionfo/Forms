var windowLoaded = function() {
  var form = document.forms[0];
  if (form) {
    form.onsubmit = formValidator;
  }
};

var formValidator = function() {
  var ageInput = this.querySelector('input[name=age]');
  var age = parseInt(ageInput.value);

  if (age < 18) {
    alert('You are too young to be using web');
  }else if (age > 100) {
    alert('your too old');
    return false;
  } else if (age.toString() == "Nan") {
    alert("you have to actally enter a number");
    return false;
  }

  

  return true;
};

window.onload = windowLoaded;
