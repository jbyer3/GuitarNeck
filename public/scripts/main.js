const frets = document.querySelectorAll('.fret')

const fretArray = Array.from(frets)

fretArray.forEach(fret => {
  fret.addEventListener('click',
    logger)
})

function logger() {
  
  fretArray.forEach(fret => {
    if(fret.dataset.notevalue === this.dataset.notevalue){
      console.log(fret)
      if(!fret.classList.contains('selected')){
        fret.classList.add('selected')
      } else {
        fret.classList.remove('selected')
      }
    }
  })
}

