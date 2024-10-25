import React, { Component } from 'react'

export default class Mount2 extends Component {
    constructor(){
        super()
        this.state={

        }
        console.log("Mount2 constructor 4");
        
    }
    static getDerivedStateFromProps(){
        console.log('Mount2 getDerivedStateFromProps 5');
        return true
    }
    
    componentDidMount(){
       console.log("Mount2 componentDidMount 8");
        
    }
  render() {
    console.log('Mount2 render 6');
    
    return (
      <div>Mount2</div>
    )
  }
}
