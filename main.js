// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//TODO: You will invoke mimicServerCall() in response to a user action
//Todo: The function will randomly return either a "success" or "fail" response.
//Note: need to call .json() on the response so you only need a single then() call.

//TODO: When a user clicks on an empty heart:
//Todo: Invoke mimicServerCall to simulate making a server request
//Todo: When the "server" returns a failure status:
//Todo: Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
//Todo: Display the error modal by removing the .hidden class
//Todo: Display the server error message in the modal
//Todo: Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
//Todo: When the "server" returns a success status:
//Todo: Change the heart to a full heart
//Todo: Add the .activated-heart class to make the heart appear red 
//Todo:When a user clicks on a full heart:
//Todo:Change the heart back to an empty heart
//Todo:Remove the .activated-heart class

let message = document.getElementById("modal")
message.setAttribute('class', 'hidden')

like = document.getElementsByClassName("like")

for(let element of like){
  element.addEventListener("click", ()=>{
    mimicServerCall()
    .then(()=>{
      if (element.lastChild.innerHTML == EMPTY_HEART) {
        element.lastChild.setAttribute('class', 'activated-heart')
        element.lastChild.innerHTML = FULL_HEART;
      }
      else {
        element.lastChild.removeAttribute('class', 'activated-heart');
        element.lastChild.innerHTML = EMPTY_HEART;
      }
      
    })
    .catch((error)=>{
      message.removeAttribute('class','hidden')
      message.lastChild.textContent = error.message
      setTimeout(()=>{message.setAttribute('class', 'hidden')}, 3000)
    })
  
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
