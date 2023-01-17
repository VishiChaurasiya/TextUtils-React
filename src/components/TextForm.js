import React, { useState } from 'react'

export default function TextForm(props) {
  /**
   * State variables are created using 'useState()' hook & automatically watched by React
   * Here, 'text' is a state variable and its value can only be changed using 'setText()' function
   */

  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  // Handling an Event on the textarea
  const handleOnChange = (event) => {
    setText(event.target.value); // Setting a state
  }

  // Handling Events on different buttons
  const handleSentenceCase = () => {
    let newText = text.replace(/(^.)|(\. +.)/g, c => c.toUpperCase());
    setText(newText);
    props.showAlert('Converted to SentenceCase!', 'success');
  }

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase!', 'success');
  }

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase!', 'success');
  }

  const handleCapitalizedCase = () => {
    let newText = text.replace(/(^.)|( +.)/g, c => c.toUpperCase());
    setText(newText);
    props.showAlert('Converted to CapitalizedCase!', 'success');
  }

  const handleAlternatingCase = () => {
    let i = 0;
    let newText = text.replace(/./g, (c) => (i++) & 1 ? c.toLowerCase() : c.toUpperCase());
    setText(newText);
    props.showAlert('Converted to AlternatingCase!', 'success');
  }

  const handleInverseCase = () => {
    let newText = text.replace(/./g, (c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
    setText(newText);
    props.showAlert('Converted to InverseCase!', 'success');
  }

  const handleRemoveSpaces = () => {
    let newText = text.replace(/  +/g, ' ');
    setText(newText);
    props.showAlert('Extra Spaces removed!', 'success');
  }

  const handleCopy = () => {
    let textarea = document.getElementById('myBox');
    textarea.select();
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard!', 'success');
  }

  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared!', 'success');
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleSentenceCase}>Sentence case</button>
        <button className="btn btn-primary m-1" onClick={handleLowerCase}>lower case</button>
        <button className="btn btn-primary m-1" onClick={handleUpperCase}>UPPER CASE</button>
        <button className="btn btn-primary m-1" onClick={handleCapitalizedCase}>Capitalized Case</button>
        <button className="btn btn-primary m-1" onClick={handleAlternatingCase}>aLtErNaTiNg cAsE</button>
        <button className="btn btn-primary m-1" onClick={handleInverseCase}>InVeRsE CaSe</button>
        <button className="btn btn-primary m-1" onClick={handleRemoveSpaces}>Remove Spaces</button>
        <button className="btn btn-primary m-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary m-1" onClick={handleClear}>Clear</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}