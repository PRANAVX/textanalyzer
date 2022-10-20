import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");
  const z={height:'400px'}

  const doChange = (e) => {
    setText(e.target.value);
  };

  const doCapitalize = () => {
    const newtext = text.toUpperCase();
    setText(newtext);
  };
  const doLower = () => {
    const newtext = text.toLowerCase();

    setText(newtext);
  };
  const doClear = () => {
    setText("");
  };

  const doCopy =()=>{
    const text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }

  return (
    <div style={props.styl}>
    <div>
      <h1>Enter Your Text Here : </h1>
      <textarea
        className="form-control my-4"
        style={{...props.styl,...z}}
        placeholder="..."
        id="textbox"
        onChange={doChange}
        value={text}
      ></textarea>

      <button className="btn btn-primary mx-1" onClick={doCapitalize}>
        To UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={doLower}>
        To LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={doCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={doClear}>
        Clear Text
      </button>
    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>Number of words - {(text.split(" ")).length}</p>
      <p>Number of Character - {text.length}</p>
      <p>Time to Read - {0.008*(text.split(" ")).length} mins</p>
    </div>
    </div>
  );
}
