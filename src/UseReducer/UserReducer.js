import React,{useReducer} from 'react'
const UserReducer = () => {
    const initialState={count:0}
const reducer=(state,action)=>
{
   
    switch(action.type){
        case"increment":
        return {count:state.count+1}
        case"decrement":
        return {count:state.count-1}
        default:
            return state
    }

}
   const[state,dispatch]= useReducer(reducer, initialState);
   const Increment=()=>{
    dispatch({type:"increment"})
   }

   const Decrement=()=>{
    dispatch({type:"decrement"})
   }
  return (
    <div>
       Use Reducer Count:{state.count}
      <br></br>
      <button onClick={Increment}>increment</button>
      <br></br>
      <br></br>
      <button onClick={Decrement}>decrement</button>
    </div>
  )
  }

export default UserReducer
