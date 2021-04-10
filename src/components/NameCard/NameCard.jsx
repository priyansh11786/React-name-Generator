import React from 'react';
import './NameCard.css'
const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain='

const NameCard = ({ suggestedNames }) => {
    return (
        <a href={`${nameCheapUrl}${suggestedNames}`} className="card-link">
            <div className="dv-container">
                <p className="para-container">{suggestedNames}</p>
            </div>
        </a>
    );
}
export default NameCard;