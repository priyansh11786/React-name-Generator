import React from 'react'
import Heading from '../Header/Heading'
import ResultContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'
const names = require('@rstacruz/startup-name-generator')

class App extends React.Component{
    state = {
       headText:"Name It App!",
       headExpand : true,
       suggestedNames : [],
    };

    headerFunc = (inputText) => {
        this.setState({
            headExpand: !(inputText.length>0), 
            suggestedNames : inputText.length ? names(inputText) : [],
        });
    }

    render (){
      return (
          <div>
              <Heading headVariable={this.state.headExpand} headerTitle={this.state.headText} />
              <SearchBox headerFunc={this.headerFunc}/>
              <ResultContainer suggestedNames={this.state.suggestedNames}/>
          </div>
      );
    }
}

export default App;