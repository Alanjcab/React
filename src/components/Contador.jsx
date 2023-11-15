import { useState } from "react";

const useContador = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount((prevCount) => prevCount + step)
  }

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - step)
    }
  } 
  
  return {
    count, increment, decrement,
  }
}

export default useContador