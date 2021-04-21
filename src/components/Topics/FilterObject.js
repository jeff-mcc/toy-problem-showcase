import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredArray: []
        }
        this.solutionFO = this.solutionFO.bind(this)
        this.receiveInput = this.receiveInput.bind(this)
    }
    
    receiveInput(val){
        this.setState({userInput: val})
    }

    solutionFO(){
        let prop = this.state.userInput;
        let len = this.state.unFilteredArray.length;
        let arr = this.state.unFilteredArray;
        let newArr = [];
        for (let i = 0; i<len; i++){
            let sub = arr[i];
            // console.log(arr[i][prop])
            if (prop in sub){
                newArr.push(sub)
            }
        }
        this.setState({filteredArray: newArr})
        // console.log(sub)
    }
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e)=>this.receiveInput(e.target.value)}/>
                <button className="confirmationButton" onClick={this.solutionFO}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject

//
//