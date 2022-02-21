import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to uppercase","success")    
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase()
    setText(newText); 
    props.showAlert("Converted to lowercase","success") 
  }
  const handleClearText=()=>{
    setText("")
    props.showAlert("Cleared text","success") 
  }
  const handleCopy=()=>{
    let message = document.getElementById('myBox');
    message.select();
    navigator.clipboard.writeText(message.value);
    props.showAlert("Copied to clipboard","success") 
  }
  const handleExtraSpaceRemover=()=>{
    let textNew = text.split(/[ ]+/);
    setText(textNew.join(" "))
    props.showAlert("Extra spaces removed","success") 
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'grey': 'black'}} ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaceRemover}>Remove Extra Spaces</button>
    </div>
    <div className="container my-1" style={{color: props.mode==="dark" ? "white" : "black"}}>
      <h1>Your Text Summary</h1>
      <p>{text}</p>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  );
}
