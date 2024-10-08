import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from "./themeContext";
import { title } from 'process';

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

   // update this thing somehow
export function NotesList(props: {likedList: any}) {
  const [likedList, setLikedList] = useState([""]);
  
  function toggleLikedList (){
    setLikedList(props.likedList)
    //console.log(likedList);
  }

  useEffect(() => {
    setLikedList(props.likedList)
    //console.log(likedList);
  }, [props.likedList]);
  return (
    <ul>
      {props.likedList.map((title:string) => (
        <li>
         {title}
        </li>
      ))}
    </ul>
      
    )
}

// the console log properly shows the list of titles that are liked
// how do we display this???
export function ToggleLike(props: { title: any, notesList: any }) {
    const [like, setLike] = useState(false);
    function addNotesList(title :string) {
        console.log(props.notesList);
    }

    function toggleLike() {
        setLike(like ? false : true);
        if (like === true) {
          const index = props.notesList.indexOf(props.title);
          if (index > -1) { // only splice array when item is found
            props.notesList.splice(index, 1); // 2nd parameter means remove one item only
          }
          
        }
        if (like === false) {
          props.notesList.push(props.title);
        }
        
        addNotesList(props.title)
    }
    
       
    return (
        <div>
            <button onClick={toggleLike}>{like ? <p>❤️</p> : <p>🤍</p>}</button>
        </div>
    )
}
