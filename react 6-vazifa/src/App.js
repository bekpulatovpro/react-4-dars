import React from "react";
import App from "./App.css";
import Navbar from "./component/navbar/navbar";
import Center from "./component/center/center";
import Aside from './component/aside/aside'

function Bnma() {
  const[lang,setLang]=React.useState('en')
  return (
    <>
      <div className="container">
        <Navbar lang={lang} />
        <Center lang={lang} setLang={setLang} />
        <Aside lang={lang}/>
      </div>
    </>
  );
}

export default Bnma;
