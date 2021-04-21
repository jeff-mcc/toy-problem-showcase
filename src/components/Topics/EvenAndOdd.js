import React, {Component} from 'react'

class EvenAndOdd extends Component{
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.solutionEO = this.solutionEO.bind(this)
        this.receiveUpdate = this.receiveUpdate.bind(this)
    }

    receiveUpdate(val){
        this.setState({userInput: val})
    }

    solutionEO(){
        let input = this.state.userInput;
        let arr = input.split(',');
        let arrNum = [];
        let even = [];
        let odd = [];
        for (let i = 0; i<arr.length; i++){
            arrNum[i] = parseInt(arr[i],10);
            if (arrNum[i] % 2 === 0){
                even.push(arrNum[i])
            } else{
                odd.push(arrNum[i])
            }
        }
        // console.log(even,odd)
        this.setState({evenArray: even,oddArray: odd})
    }

    render(){
        // let mappedUserInput = this.state.userInput.map((arr)=>arr % 2 === 0 ? true : false)

        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e)=>this.receiveUpdate(e.target.value)}/>
                <button className="confirmationButton" onClick={this.solutionEO}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd

//(this.state.userInput)