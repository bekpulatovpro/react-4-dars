import React from "react";
import "./App.css";
import useClass from  './components/useref/useref'

function App() {

  const btnRef=React.useRef(null)
  return(



 <>
 <div  ></div>
 
 <button ref={btnRef} onClick={()=>btnRef.current.classList.add('main')}>Check</button>
 <button ref={btnRef} onClick={()=>btnRef.current.classList.remove('main')}>delete</button>

 <useClass/>      
 
 </>
 );
  }

export default App;
