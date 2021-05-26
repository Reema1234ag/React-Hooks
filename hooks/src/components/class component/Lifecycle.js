import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
        }
    }
    componentDidMount(){
        document.title=`you clicked ${this.state.count} times `
    }
    componentDidUpdate(){
        document.title=`you clicked ${this.state.count} times `
    }
        
    render() {
        return (
            <div>
              <div>
              <h2> count- {this.state.count}</h2>
              <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
            </div>  
            </div>
        )
    }
}

export default Lifecycle

