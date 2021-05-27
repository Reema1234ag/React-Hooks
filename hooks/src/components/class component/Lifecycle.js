import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
            name:''
        }
    }
    componentDidMount(){
        document.title=`you clicked ${this.state.count} times `
        //alert("component did mount")
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count != this.state.count)             //conditionally updating the title
        {
            console.log("updating document title")
            document.title=`you clicked ${this.state.count} times `
        }
    }
        
    render() {
        return (
            <div>
              <div>
                  <input type='text' value={this.state.name} onChange={e =>{
                      this.setState({
                          name:e.target.value
                      })
                  }}/>
              <button onClick={()=>{this.setState({count:this.state.count+1})}}>Clicked {this.state.count} times </button>
            </div>  
            </div>
        )
    }
}

export default Lifecycle

