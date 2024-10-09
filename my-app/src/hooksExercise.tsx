import React, { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { ThemeContext, themes } from "./themeContext";
import { title } from 'process';
import { dummyNotesList } from "./constant";
import "./App"
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


export function ToggleLike(props: {note: any, toggleLikedListApp:any }) {
    const [like, setLike] = useState(false);
    
    function toggleLike() {
        setLike(like ? false : true);
        
        if (like === true) {
          
          props.note.like = false;
        }
        if (like === false) {
          props.note.like = true;
        }
        
    }
    
    return (
      
        <div>
            <button  onClick={() => {
          toggleLike();
          props.toggleLikedListApp();
        }}>{like ? <p>❤️</p> : <p>🤍</p>}</button>
        </div>
      
    )
}
