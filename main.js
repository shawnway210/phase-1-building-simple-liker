// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal')
modal.classList.add('hidden')

const emptyHearts = document.querySelectorAll('.like-glyph')

emptyHearts.forEach((emptyHeart) => {
  emptyHeart.addEventListener('click', function() {
    mimicServerCall()

     .then(function(response) {
      emptyHeart.innerText = FULL_HEART
      emptyHeart.classList.add('activated-heart')
     })
     .catch(function(error){
      const modal = document.getElementById('modal')
      const modalMessage = document.getElementById('modal-message')

      modalMessage.innerText = error
      modal.classList.remove('hidden')
      
      setTimeout(function() {
        modal.classList.add('hidden')
      }, 3000)
    })
  })
})
  
  const fullHeart = document.querySelector('.like-glyph.activated-heart')


  fullHeart.addEventListener('click', function() {
    fullHeart.innerText = EMPTY_HEART
    fullHeart.classList.remove('activated-heart')
  })
    





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
