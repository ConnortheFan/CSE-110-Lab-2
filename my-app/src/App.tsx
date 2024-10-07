import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constant"; // Import the dummyNotesList from the appropriate module
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { ClickCounter, NotesList, ToggleLike, ToggleTheme } from "./hooksExercise"
function App() {
return (
    <div className='app-container'>
    <ToggleTheme />

    <form className="note-form">
        <div><input placeholder="Note Title"></input></div>

        <div><textarea></textarea></div>

        <div><button type="submit">Create Note</button></div>
    </form>

    <NotesList />

    <div className="notes-grid">
       {dummyNotesList.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
                <ToggleLike title={note.title} notesList={NotesList} />
                <button>x</button>
           </div>
           <h2> {note.title} </h2>
           <p> {note.content} </p>
           <p> {note.label} </p>
         </div>
       ))}
     </div>
   </div>
);
}

export default App;

