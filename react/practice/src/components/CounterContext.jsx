import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext()

// eslint-disable-next-line react/prop-types
export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const incrementContextValue = () => {
        setCount((prev) => prev += 1)
    }
    const decrementContextValue = () => {
        setCount((prev) => prev -= 1)
    }
    return (
        <CounterContext.Provider value={{ count, incrementContextValue, decrementContextValue }}>
            {children}
        </CounterContext.Provider>
    )
}