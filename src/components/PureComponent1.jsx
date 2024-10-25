import React, { Component, PureComponent } from 'react'

export default class PureComponent1 extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0,
            data:32
        }
    }
    
  render() {
    console.log(this.state.count);
    
    return (
      <div>
        <h1>PureComponent {this.state.count}</h1>
        <button onClick={()=>this.setState({count:100})}>Count</button>
      </div>

    )
  }
}
