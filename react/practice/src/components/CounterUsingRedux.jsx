import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../features/countSlice"

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count.count)
  return (
    <>
      {`The Count :${count}`}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}

export default Counter