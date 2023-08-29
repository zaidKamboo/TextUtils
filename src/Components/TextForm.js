import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpperCaseClick = ()=>{
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert('Converted to Upper case successfully','success');
  }
  
  const handleLowerCaseClick = ()=>{
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert('Converted to lower case sucessfully','success');
    
  }
  
  const handleClear = () =>{
    setText("");
    props.showAlert('Cleared text sucessfully','success');
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied text sucessfully','success');
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removed Extra spaces successfully','success');
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text,setText] = useState("");
  return (
     <>
       <div className="container  my-3" style={{color : props.mode ==='dark'?'white':'#043743'}}>
        <h2 style={{textAlign:'center'}}>{props.title}</h2>
          <textarea style={{backgroundColor : props.mode ==='dark'?'#13466e':'white',color : props.mode ==='dark'?'white':'#043743'}} className="form-control" onChange={handleOnChange} value={text} id="textbox" rows="10"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpperCaseClick} >Convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowerCaseClick} >Convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClear} >Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy} >Copy</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
      </div>
       <div className="container my-2" style={{color : props.mode ==='dark'?'white':'#043743'}}>
        <h2>Summary of Entered text here : </h2>
        <p>No of words : {text.split(/\s+/).filter((element) => {return element.length!== 0}).length} and no of characters : {text.length}</p>
        <p>Minutes required to read entered text : {text.split(" ").filter((element) => {return element.length!== 0}).length * 0.008 }</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview.'}</p>
      </div>
    </>
  )
}

