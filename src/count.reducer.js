//const tiger=11000;

let initState={
  count:0
}

// //action
// const increase={
//   type:'increase'   //涨工资
// }
// const decrease={
//   type:'decrease'  //降工资
// }

//reducer
const countReducer=(state=initState,action)=>{
  console.log(action)
  switch (action.type){
    case 'addOne':
      state.count+=action.value;
      return Object.assign({},state)
      break;
    default:
      return state;
      break;
  }
}
export default countReducer;
