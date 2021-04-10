import React from 'react'
import './Heading.css'

const Heading = ({headerTitle,headVariable}) => {
    return (
        <div className="div-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="img1" className={`image-container ${headVariable ? 'image-expanded' : 'image-contracted'} `}/>
           <h1 className={`text-container ${headVariable ? 'text-expanded' : 'text-contracted'}`}>{headerTitle}</h1>
        </div>
    );
}

export default Heading;