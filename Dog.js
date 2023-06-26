class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
    return `
        <div class="card" style="background-image: url('${avatar}')"> 
          ${hasBeenSwiped 
        ? `<img class="card__badge" src="./images/badge-${hasBeenLiked ? 'like' : 'nope'}.png">` 
        : ""}         
          <div class="card__dog-info">
            <h2 class="card__dog-name">${name}, <span>${age}</span></h2>
            <p class="card__dog-message">${bio}</p>
          </div>
        </div>`
  }
}

export default Dog