const notesContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// Display the local storage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

//local storage for saving notes

function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

// Create a note
createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = '/images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);
});

// removes the note
notesContainer.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if ((e.target.tagName = 'p')) {
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt => {
      nt.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    document.execCommand('insertLineBreak');
    event.preventDefault();
  }
});
