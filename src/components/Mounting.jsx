import React, { Component } from 'react'
import Mount2 from './Mount2';

export default class Mounting extends Component {
    constructor(){
        super()
        this.state={
            val:0,
            obj:{}
        }
        console.log('constructor 1');
        
    } 

     static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps 2');
        console.log('props',props);
        console.log('state',state);
        
        return true
    }

    componentDidMount(){
        console.log('componentDidMount 7');
    }
    
  render() {
    console.log('render 3');
    
    return (
      <div>
        <h1>Mounting</h1>
        {/* <Mount2/> */}
      </div>
    )
  }
}
