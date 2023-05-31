import React from 'react'
import { increment, decrement } from './slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux'


//Redux: Global state management tool


function Home() {
    const dispatch = useDispatch()
    const count = useSelector((state) => {return state.counter.count})
  return ( 
    <>
       <button onClick={() => dispatch(increment())}>Increment</button>
       <p>{count}</p>
       <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Home