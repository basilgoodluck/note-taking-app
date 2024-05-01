const Note = class {
    constructor (button, container, myNote) {
        this.button = button
        this.container = container
        this.myNote = myNote
    }

    appendNote (){
        this.container.append(this.noteBox())
    }

    noteBox (){
        const noteBox = document.createElement('div')

        noteBox.classList.add('note-box')
        noteBox.style.position = 'relative'
        noteBox.style.transition = 'ease .5s'

        const textarea = document.createElement('textarea')
        this.myNote = textarea.value

        const trashBtn = document.createElement('i')

        trashBtn.classList.add('fa')
        trashBtn.classList.add('fa-trash')
        trashBtn.style.position = 'absolute'
        trashBtn.style.bottom = '15px'
        trashBtn.style.right = '15px'
        trashBtn.style.color = 'red'
        trashBtn.style.fontSize = '1.5rem'

        noteBox.appendChild(textarea)
        noteBox.appendChild(trashBtn)

        const note = noteBox
        return note     
    }

    deleteNote (){

    }

}

const btn = document.getElementById('btn-add')
const container = document.getElementById('container')

const note = new Note(btn, container)

btn.addEventListener('click', ()=>{
    note.appendNote()
})