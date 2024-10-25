import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            obj:{
            name:'wdkwnwekf'
            },
            aray:[21521,5458458,57487]
        }
        console.log(this.state.aray);

        this.incrementHandle= this.incrementHandle.bind(this)
        
    }
    //  incrementHandle=()=>{
    //     this.setState({count:this.state.count+1})
    // }

     incrementHandle(){
        this.setState({count:this.state.count+1})
        console.log(this.state.count);
    }

  render() {
    return (
      <div>ClassState
        <h1>count {this.state.count}</h1>
        <button onClick={this.incrementHandle}>Click</button>
      </div>
    )
  }
}
