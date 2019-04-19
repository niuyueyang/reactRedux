import React, { Component } from 'react';
import {connect} from 'react-redux'

class Test extends Component {
  render(){
    return(
      <div>
        <h2>当月工资：{this.props.state.tiger}</h2>
      </div>
    )
  }
}

//需要渲染什么数据
function mapStateToProps(state){
  return{
    state:state
  }
}



export default Test = connect(mapStateToProps)(Test)
