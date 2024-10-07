import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from "./themeContext";

// Wrapper component to provide context


export function ClickCounter() {
 const [count, setCount] = useState(0);

 const handleClick = () => {
   setCount(count + 1);
 };

 useEffect(() => {
   document.title = `You clicked ${count} times`;
 }, [count]);

 

 const theme = useContext(ThemeContext);
return (
   <div
     style={{
       background: theme.background,
       color: theme.foreground,
       padding: "20px",
     }}
   >
     <p>You clicked {count} times </p>
     <button
       onClick={() => setCount(count + 1)}
       style={{ background: theme.foreground, color: theme.background }}
     >
       Click me
     </button>
   </div>
 );
}

export function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
   
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
   
    return (
      <ThemeContext.Provider value={currentTheme}>
        <button onClick={toggleTheme}> Toggle Theme </button>
        <ClickCounter />
      </ThemeContext.Provider>
    );
   }

export function NotesList() {
    const [notesList, setNotesList] = useState([""]);

    
    const ul = document.createElement("ul");

    for (let i = 0; i < notesList.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(notesList[i]));
        ul.appendChild(li);
    }

    return (
        <ul id="notesList">
            {notesList.map((title) => (
                <li>{title}</li>
            ))}
        </ul>
    )
}


export function ToggleLike(props: { title: any, notesList: any }) {
    const [like, setLike] = useState(false);
    function addNotesList(title :string) {
        props.notesList.push(title);
        //setNotesList(props.notesList);
        console.log(props.notesList);
    }

    function toggleLike() {
        setLike(like ? false : true);
        // toggleNotesList()
        addNotesList(props.title)
    }

    

    useEffect(() => {

    }
    )
        

    return (
        <div>
            <button onClick={toggleLike}>{like ? <p>❤️</p> : <p>🤍</p>}</button>
        </div>
    )
}

// export function NotesList() {  
//     const [notesList, setNotesList] = useState([""]);

//     return (
        
//     )
// }