import React, { Component } from 'react';
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    console.log(this.props)
    const {payIncrease,payDecrease,addOne}=this.props;
    return (
      <div className="App">
        <h2>当月工资：{this.props.state.indexReducerKey.tiger}</h2>
        <h2>当前数字：{this.props.state.countReducerKey.count}</h2>
        <button onClick={payIncrease}>涨工资</button>
        <button onClick={payDecrease}>降工资</button>
        <button onClick={addOne}>加1</button>
        <button onClick={()=>{this.props.history.push('/test')}}>转向</button>
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
    },
    //使用 redux-thunk 之后，可以dispatch一个函数了，这个函数会接收dispatch,
    // getState作为参数，在这个函数里你就可以干你想干的事情，在任何地方随意dispatch了
    addOne:()=>{
      setTimeout(()=>{
        dispatch(function (dispatch) {
          dispatch({
            type:'addOne',
            value:1
          });
        })
      },1000)
    }
  }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)
