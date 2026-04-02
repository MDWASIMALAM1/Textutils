import React, { useState } from 'react'

function Textforms(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to upper case","success")
    }
    
    const handleLowClick = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case","success")
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("text clear","success")
    }
    const handleCopyClick =()=>{
      var text =document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","success")
    }
    const handleExtraSpace=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra space removed","success")
    }
  return (
    <>
    <div className=" container">
    <h1 style={{color:props.mode=='dark'?'white':'#042743'}}>Enter the text to analyze below</h1>
<div className="mb-3">
  <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor:props.mode=='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}}   value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>    
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>    
<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>    

</div>
<div className=" container my-3" style={{color:props.mode=='dark'?'white':'#042743'}}>
  <h1 >Your text summary</h1>
  <p>{text.length>0?text.split(" ").length-1:0} word and {text.length} characters</p>
  <p>{0.008*text.length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text.length>1?text:"Enter something to preview it here"}</p>
</div>

    </>
  )
}

export default Textforms;