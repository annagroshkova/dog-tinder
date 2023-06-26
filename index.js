import dogs from './data.js'
import Dog from './Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

function handleDogClick(liked) {
  currentDog.hasBeenSwiped = true;
  currentDog.hasBeenLiked = liked;

  render()

  setTimeout(() => {
    currentDogIndex++
    if (currentDogIndex < dogs.length) {
      currentDog = new Dog(dogs[currentDogIndex])
      render()
    } else {
      alert('Who let the dogs out??')
    }
  },1500)
}


document.querySelector('.buttons__like-btn').addEventListener('click', () => {
  handleDogClick(true)
} )

document.querySelector('.buttons__nope-btn').addEventListener('click', () => {
  handleDogClick(false)
} )

function render() {
  document.querySelector('.card-container').innerHTML = currentDog.getDogHtml()
}

render()