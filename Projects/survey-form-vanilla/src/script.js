// TODO : Create Validation messages

//  DONE Stop User from inputting more than 11 numbers 
//  DONE Create a function that is activated when user types in umber field 
//  DONE attach a event listiner to number 
//  DONE get the value of the input 
//  DONE test if input is 11
//  DONE stop user from inputting numbers if user iputs more than 11 numbers
// TODO : Create responsive design

// TODO : Create Options fof dropdown
// TODO : Disable the form button from submitting until all fields are filled in 
function PhoneNumber()
{
  var input = document.getElementById("number").value;
  if (input.length > 10)
  {

    console.log("I am in!" + input.length);
    var disabledInput = document.getElementById('number');
    disabledInput.disabled = true;
    input.setCustomValidity("You've entered maxiumum amount of numbers which is 11!");

    //display a message that tells user that you have reached maximum amount fo numbers 
  }
  // setCustomValidity

}


//setCustomvalidity is used to didaply cusotm validation messages