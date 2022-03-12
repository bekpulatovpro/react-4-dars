import React from "react";

const UseState = ({ismodalOpen,setIsmodalOpen}) => {
  return (
    <div className={`modal ${ismodalOpen ? 'modal__open' : ''}`} onClick={(evt)=>{if(evt.target.matches(".modal__open")){setIsmodalOpen(false)}}}>
      <div className="modal__inner">
        <div className="bnma">
          <h3>Modal Title</h3>
          <button className="modal__close" onClick={()=>setIsmodalOpen(false)}>&times;</button>
        </div>
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default UseState;
