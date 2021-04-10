import React from 'react'
import './SearchBox.css'

const SearchBox = ({ headerFunc }) => {
    return(
        <div className="main-box">
           <input type="text" onInput={(event)=>{headerFunc(event.target.value)}} className="input-field" placeholder="Type Keywords Here"/>
        </div>
    );
}

export default SearchBox;