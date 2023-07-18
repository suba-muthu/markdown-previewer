import React from "react";
import { useState } from "react";
import { marked } from "marked";
import './index.css';

function App() {

  const [ content, setContent ] = useState(
  `
  # React Markdown Previewer!

  ## This is a sub-heading...
      
  Or... wait for it... **_both!_**
    
  And feel free to go crazy ~~crossing stuff out~~.
        
  There's also [link](https://www.freecodecamp.org)
  `   
  );

  function handleChange(e) {
    setContent(e.target.value);
  }

  return (
    <div className="container">
      <div id="edit-container">
        <h2>Editor</h2>
        <textarea id="editor" value={content} onChange={handleChange}></textarea>
      </div>
      <div id="preview-container">
        <h2 id="heading">Previewer</h2>
        <div 
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
