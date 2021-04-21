import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
        this.solutionFS = this.solutionFS.bind(this)
        this.receiveInput = this.receiveInput.bind(this)
    }

    receiveInput(val){
        this.setState({userInput: val})
    }

    solutionFS(){
        let prop = this.state.userInput;
        let len = this.state.unFilteredArray.length;
        let arr = this.state.unFilteredArray;
        let newArr = [];
        for (let i = 0; i<len; i++){
            let sub = arr[i];
            // console.log(arr[i][prop])
            if (sub.includes(prop)){
                newArr.push(sub)
            }
        }
        this.setState({filteredArray: newArr})
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e)=>this.receiveInput(e.target.value)}/>
                <button className="confirmationButton" onClick={this.solutionFS}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString