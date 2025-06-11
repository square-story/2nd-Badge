import { useReducer } from "react"


const initialValue = { count: 0 }

const reducer = (state, action) => {
    switch (action.key) {
        case 'increment':
            return { count: state.count + 1 }
        default:
            return state
    }
}

const CounterUsingReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ key: 'increment' })}>increment</button>
        </>
    )
}

export default CounterUsingReducer