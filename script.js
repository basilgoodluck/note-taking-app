const Note = class {
    constructor (button, container) {
        this.button = button
        this.container = container
    }

    appendNote (){
        const myNote = new NoteBox(this.container)
        myNote.render()
        this.container.appendChild(myNote.noteBox)
    }

    storeNotes () {
        const notes = document.querySelectorAll('.note-box')
        const notesData = []
        notes.forEach(note => {
            notesData.push(note.querySelector('textarea').value)
        })
        localStorage.setItem('notes', JSON.stringify(notesData))
    }

    static retrieveNotes () {
        const storedNotes = localStorage.getItem('notes')
        if (storedNotes) {
            const notesData = JSON.parse(storedNotes)
            const container = document.getElementById('container')
            notesData.forEach(noteData => {
                const myNote = new NoteBox(container, noteData)
                myNote.render()
                container.appendChild(myNote.noteBox)
            })
        }
    }
}

class NoteBox {
    constructor(container, note = '') {
        this.container = container
        this.note = note
    }

    render() {
        const noteBox = document.createElement('div')
        noteBox.classList.add('note-box')
        noteBox.style.position = 'relative'
        noteBox.style.transition = 'ease .5s'

        const textarea = document.createElement('textarea')
        textarea.value = this.note

        const trashBtn = document.createElement('i')
        trashBtn.classList.add('fa')
        trashBtn.classList.add('fa-trash')
        trashBtn.style.position = 'absolute'
        trashBtn.style.bottom = '15px'
        trashBtn.style.right = '15px'
        trashBtn.style.color = 'red'
        trashBtn.style.fontSize = '1.5rem'
        trashBtn.style.cursor = 'pointer'

        noteBox.appendChild(textarea)
        noteBox.appendChild(trashBtn)

        this.noteBox = noteBox

        this.deleteNote(trashBtn)
    }

    deleteNote (btn){
        btn.addEventListener('click', () => {
            this.noteBox.remove()
            Note.prototype.storeNotes()
        })
    }
}

const btn = document.getElementById('btn-add')
const container = document.getElementById('container')

const note = new Note(btn, container)

btn.addEventListener('click', () => {
    note.appendNote()
    note.storeNotes()
})

window.addEventListener('load', () => {
    Note.retrieveNotes()
})
