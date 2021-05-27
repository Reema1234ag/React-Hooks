import React, { Component } from 'react'

export default class IncrementPerSec1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
        }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.tick)
    }
    tick=()=>{
        this.setState({
            count:this.state.count +1,
        })
    }
    render() {
        return (
            <div>
              <h2>{this.state.count}</h2> 
            </div>
        )
    }
}
