import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.solutionP = this.solutionP.bind(this)
        this.receiveInput = this.receiveInput.bind(this)
    }

    receiveInput(val){
        this.setState({userInput: val})
    }

    solutionP(){
        let prop = this.state.userInput;
        let output = '';
        for (let i = 0; i<prop.length; i++){
            if (prop[i] !== prop[prop.length-1-i]){
                return this.setState({palindrome: 'not a palindrome'})
            }
        }
        output = `${prop} is a palindrome!`
        return this.setState({palindrome: output})
        // console.log('test')
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.receiveInput(e.target.value)}/>
                <button className="confirmationButton" onClick={this.solutionP}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome