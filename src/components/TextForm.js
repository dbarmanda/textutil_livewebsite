// import React from "react";

import React, { useState } from "react";

import PropTypes from "prop-types";

export default function TextForm(props) {
  
  
  const handleUpClick = ()=>{
    console.log('Uppercase btn clicked!' + text);

    let newText = text.toUpperCase();
    // console.log(newText);
    setText(newText);

    props.displayAlert('success', 'Words capitalized!')
  }
  
  const handleOnChange = (event)=>{
    // console.log('on change listening');
    
    //to get changes in value of text var when typed in textare
    setText(event.target.value);
    // console.log(text);
  }
  


  // ********************************************************************
  //Declaring a state variable
  const [text, setText] = useState("");
  //setText: is a function that will play with the 'statevar' {text}

            /*
                  text = 'hello setting new val'; @@@**@@@ Wrong
                      we can't set state var directly

                  
                  setText will be the only way to manipulate/change the state variable's value


            */

  //inside useState: is a default val of 'state-var' {text}

// *******************************************************

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);

    props.displayAlert('success', 'Words lower-cased!')

    
  }

  const clearText = ()=>{
    let newText = '';
    setText(newText);

    props.displayAlert('success', 'Text-area cleared!')
  }
  
  const copyText = ()=> {
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.displayAlert('success', 'Text copied!')

  }


  return (
    <>

    <div className="container ">
      <div className="mb-3">
        <label htmlFor="text" className={`form-label my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <h1>{props.heading}:</h1>
        </label>
        <textarea
          className="form-control"
          
          value={text}
          //this feild is always provided with a onChange attribute else console shows error

          onChange={handleOnChange}
          //a event listener for listening change in textarea
          
          id="text"
// *************************************************************
          style={{backgroundColor: props.mode === 'light' ? 'white':'grey', color: props.mode==='light'?'black':'white'}}

          placeholder="Enter New Text here"
          rows="8 "
        ></textarea>


        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>

        <button disabled={text.length === 0} className="btn btn-warning my-3 mx-1" onClick={handleLowClick}>
          Convert To LowerCase
        </button>

        <button disabled={text.length === 0} className="btn btn-danger mx-1" onClick={clearText}>Clear Text</button>

        <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={copyText}>Copy Text</button>
      </div>
    </div>


    <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h2>Your Text Analysis:</h2>
      <p>{text.split(/\s+/).filter((element)=>{
        return element.length!==0;
        }).length} words and {text.length} characters!</p>

      <p>Reading time: {0.008 * text.split(" ").filter((element)=>{return element.length}).length}min </p>

      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to Preview!"}</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
