import React from 'react';

import '../styles/Button.css';

function Button(props){
  const { content, type, onButtonClick } = props;

  return (
    <div
      className={`Button ${content==="0" ? "zero" : ""}
      ${type || ""}`} onClick={onButtonClick(content)}
    >{content}
    </div>
      );
}

export default Button;
