//const tiger=11000;

let initState={
  num:0,
  tiger:0,
  arr:[]
}

// //action
// const increase={
//   type:'increase'   //涨工资
// }
// const decrease={
//   type:'decrease'  //降工资
// }

//reducer
const reducer=(state=initState,action)=>{
  switch (action.type){
    case 'increase':
      state.tiger+=action.value;
      return Object.assign({},state)
      break;
    case 'decrease':
      state.tiger-=action.value;
      return Object.assign({},state)
      break;
    default:
      return state;
      break;
  }
}
export default reducer;
