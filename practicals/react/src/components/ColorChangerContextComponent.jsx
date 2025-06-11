import { useContext } from "react"
import { ColorContex } from "./ColorChangerUsingUseContex"
import useCounter from "./useCounter"


const ColorChangerContextComponent = () => {
    const { color, green, yellow } = useContext(ColorContex)
    const { count, increment, decrement, reset } = useCounter(0)
    return (
        <div style={{ backgroundColor: color, height: '50vh', width: 'full' }}>
            <button style={{ backgroundColor: 'green' }} onClick={() => green()}>Green</button>
            <button style={{ backgroundColor: 'yellow' }} onClick={() => yellow()}>Yellow</button>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default ColorChangerContextComponent