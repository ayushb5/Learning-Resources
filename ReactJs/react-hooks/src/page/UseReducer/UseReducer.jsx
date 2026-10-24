import { useReducer, useState } from "react"

function UseReducer() {
  const initialState = {
    count: 0,
    incBy: 2,
    decBy: 2
  }
  const reducer = (state, action) => {
    // way 1
    // if(action.type==="INCREMENT"){
    //   return state+1;
    // }
    // if(action.type==="DECREMENT"){
    //   return state-1;
    // }
    // if(action.type==="RESET"){
    //   return state=0;
    // }

    // way 2 switch statement
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + state.incBy };

      case "DECREMENT":
        return { ...state, count: state.count - state.decBy };

      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  }

  // const [count,setCount]=useState(0);
  // const [count,dispatch]=useReducer(reducer,0); //unoptimized yet

  // optimized
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-4 h-lvh flex justify-center items-center bg-gray-200">
      <div className="p-4 border shadow-md bg-white">
        <h1 className="text-center">Count: {state.count}</h1>
        <div>
          <button className="border" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
          <button className="border" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <button className="border" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer