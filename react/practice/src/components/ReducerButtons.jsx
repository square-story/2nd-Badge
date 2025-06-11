import { useReducer } from "react"

const initialState = {
    count: 1
}
function reducer(state, action) {
    switch (action.key) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}
const ReducerButtons = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{`The Count Now:${state.count}`}</h1>
            <button onClick={() => dispatch({ key: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ key: 'decrement' })}>Decrement</button>
        </>
    )
}

export default ReducerButtons