import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

const resultContainer = ({ suggestedNames }) => {
      const suggestedNamesX = suggestedNames.map((suggestedName) => {
           return <NameCard suggestedNames = {suggestedName}/>;
      });   

    return (
         <div className="result-container">
              <p>{suggestedNamesX}</p>
         </div>
    );

}

export default resultContainer;