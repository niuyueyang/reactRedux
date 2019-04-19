import React, { Component } from 'react';
import {connect} from 'react-redux'
import Test from './Test'

class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    const {payIncrease,payDecrease}=this.props;
    return (
      <div className="App">
        <Test/>
        <h2>当月工资：{this.props.state.tiger}</h2>
        <button onClick={payIncrease}>涨工资</button>
        <button onClick={payDecrease}>降工资</button>
      </div>
    );
  }
}

//需要渲染什么数据
function mapStateToProps(state){
  return{
    state:state
  }
}

//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return{
    payIncrease:()=>{
      dispatch({type:'increase',value:100})
    },
    payDecrease:()=>{
      dispatch({type:'decrease',value:50})
    }
  }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App)
