import React, { useState } from 'react';

export default function TextForm(props) {
    const chngUpper = ()=>{

        setText(text.toUpperCase())
        props.showAlert("Changed to LowerCase" , "success")
        
    }
    const chngLower = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Changed to LowerCase" , "success")
    }
    const clearText = ()=>{
        
        setText("")
        props.showAlert("Clear Text" , "success")
    }
    const copyText = ()=>{
      let text = document.getElementById('mybox')
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text has been copied" , "success")
    }
    const changeVal = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter the Message here")

  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <div>
        <h1 style={{color : props.mode==='dark'?'white' : 'black'}}>{props.heading}</h1>
      <form>
  
  <div className="form-group my-10" style={{color :props.mode==='dark'?'white':'black'}}>
    <label>Enter Your Message</label>
    <textarea className="form-control" value={text} onChange={changeVal} id="mybox" rows="3"></textarea>
  </div>
</form>
    </div>
    <button className="btn btn-primary mx-2 my-1" onClick={chngUpper}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={chngLower}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
    <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>

    </div>

    <div className="container">
        <h1>Your Text Summary is : </h1>
        <p>No of Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Characters : {text.length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
