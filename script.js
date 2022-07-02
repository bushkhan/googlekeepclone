
const addNoteBtn = document.getElementById("addNote");

const updateLSData = ()=>{

    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((curElement)=>{
        return notes.push(curElement.value);

    })

    //only in string form!
    localStorage.setItem('note',JSON.stringify(notes));
}


//adding new note
const addNewNote = (text = '')=>{
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i></button>
        <button class="delete"> <i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    </div>

    `;
    //adding the div element using js
    note.insertAdjacentHTML('afterbegin',htmlData);

const editBtn = note.querySelector('.edit')
const deleteBtn = note.querySelector('.delete')
const mainDiv = note.querySelector('.main')
const textArea = note.querySelector('textArea')


//deleting the note
deleteBtn.addEventListener('click',()=>{
    note.remove();
    updateLSData();
})



//adding the already written text to mainDiv
textArea.value = text;
mainDiv.innerHTML = text;



//toggle from textarea to main div
//unhiding the maindiv and textarea if edit button is clicked
editBtn.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})



//getting the current value of textarea by onchange event
textArea.addEventListener('change',(event)=>{
   const value =  event.target.value;
   mainDiv.innerHTML = value;

   updateLSData();
})


//adding the div(note)
    console.log(note);
    document.body.appendChild(note);
}

   


//getting data back form local storage~
const notes = JSON.parse(localStorage.getItem('note'));
if(notes){
    notes.forEach((curElement)=>{
        addNewNote(curElement);
    })
}



addNoteBtn.addEventListener('click',()=>addNewNote());


