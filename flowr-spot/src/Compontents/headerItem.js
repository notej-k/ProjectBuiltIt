import React from 'react';
import '../Style/style.css'

function HeaderItem(props){
  return(
    <div className="headerItem">
      <a href="/">{props.name}</a>
    </div>
  )
}

export default HeaderItem;