import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.receiveInput = this.receiveInput.bind(this);
        this.solutionS = this.solutionS.bind(this);
    }

    receiveInput(arr){
        let val = arr.value;
        let box = arr.id;
        if (box === 'num1'){
            this.setState({number1: val})
        } else{
            this.setState({number2: val})
        }
        // console.log(this.state.number1)
    }

    solutionS(){
        let num1 = this.state.number1;
        let num2 = this.state.number2;
        // console.log(num2)
        let ans = parseInt(num1,10)+parseInt(num2,10);
        return this.setState({sum: ans})
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" id="num1" onChange={(e)=>this.receiveInput(e.target)}/>
                <input className="inputLine" id="num2" onChange={(e)=>this.receiveInput(e.target)}/>
                <button className="confirmationButton" onClick={this.solutionS}>Click For Sum</button>
                <span className="resultsBox">Answer: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum