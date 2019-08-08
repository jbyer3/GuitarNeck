const frets = document.querySelectorAll('.fret')

const fretArray = Array.from(frets)

fretArray.forEach(fret => {
  fret.addEventListener('click',
    logger)
})

function logger() {
  console.log(this.textContent)
}

