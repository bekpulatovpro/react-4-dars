import React from "react";
import "./App.css";

import Useref from "./components/useref/useref"
import UseState from './components/usestate/usestate';


function App() {

  const Usref=React.useRef(null)
  const [ismodalOpen,setIsmodalOpen]=React.useState(false)
 
 
  return(
    <>
    
    <button onClick={()=>Usref.current.classList.add('modal__open')}>Modal UseRef</button>
    <button  onClick={()=>setIsmodalOpen(true)}> Modal UseState</button>

    <Useref ref={Usref}/>
    <UseState ismodalOpen={ismodalOpen} setIsmodalOpen={setIsmodalOpen}/>
    </>
  
    );
  }
  
  export default App;
  