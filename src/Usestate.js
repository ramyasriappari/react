import React,{useState} from 'react'

const Usestate1 = () => {
    const [count,setCount]=useState({firstname:'',lastname:''});
  return (
    <div>
      <input type='text' value={count.firstname} onChange={e=> setCount({...count,firstname:e.target.value})}/>
      <input type='text' value={count.lastname} onChange={e=> setCount({...count,lastname:e.target.value})}/>

      <h1>firstname: {count.firstname}</h1>
      <h1>lastname: {count.lastname}</h1>
    </div>
  )
}

export default Usestate1
