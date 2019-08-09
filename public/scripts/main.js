const frets = document.querySelectorAll('.fret');
const fretArray = Array.from(frets);
const selectedNotes = new Set;

const liveNoteArray = document.getElementsByClassName('selected');

fretArray.forEach(fret => {
  fret.addEventListener('click', highlight);
});

function highlight() {
  fretArray.forEach(fret => {
    if(fret.dataset.notevalue === this.dataset.notevalue){
      if(!fret.classList.contains('selected')){
        fret.classList.add('selected');
        selectedNotes.add(this.dataset.notevalue);
      } else {
        fret.classList.remove('selected');
        selectedNotes.delete(this.dataset.notevalue);
      }
    }
  });
}

