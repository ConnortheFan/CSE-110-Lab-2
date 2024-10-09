import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constant"; // Import the dummyNotesList from the appropriate module
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { ClickCounter, ToggleLike, ToggleTheme } from "./hooksExercise"
import React, { useState, useEffect, useContext } from 'react';

function App() {

    const [likedList, setLikedListApp] = useState(dummyNotesList);
    function toggleLikedListApp(){
      console.log(dummyNotesList);
      setLikedListApp(dummyNotesList.filter((item) => item.like));
    }
  
    
return (
    <div className='app-container'>
    <ToggleTheme />

    <form className="note-form">
        <div><input placeholder="Note Title"></input></div>

        <div><textarea></textarea></div>

        <div><button type="submit">Create Note</button></div>
    </form>
  
       
    <ul>
      {likedList.filter((item) => item.like).map((note) => (  
        <li>
         {note.title}
        </li>
      ))}
    </ul>

   
    <div className="notes-grid">
       {dummyNotesList.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
                <ToggleLike note={note} toggleLikedListApp={toggleLikedListApp} />
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

