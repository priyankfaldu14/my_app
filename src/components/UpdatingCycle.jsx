import React, { Component } from 'react'

export default class UpdatingCycle extends Component {
        constructor(){
        super()
        
        this.state={
            count:0
        }
        console.log('constructor');
    }

   static getDerivedStateFromProps(props,state){
    console.log('props',props);
    console.log('state',state);
        console.log('getDerivedStateFromProps');
        return true
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        // if(this.state.count === 2){
        //     return true
        // }
        // else{
        //     return false
        // }
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevprops",prevprops);
        console.log("prevstate",prevstate);
        return true
    }

    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log('componentDidUpdate');
        console.log("prevprops",prevprops);
        console.log("prevstate",prevstate);
        console.log("snapshot",snapshot);
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillUnmount(){
      console.log('componentWillUnmount');
    }

  render() {
    console.log('render');
    return (
      <div>
        <h1>UpdatingCycle</h1>
        <h2>count:{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
      </div>
    )
  }
}
