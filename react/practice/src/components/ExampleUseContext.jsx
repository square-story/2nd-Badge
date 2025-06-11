import { createContext } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
    const open = () => {
        console.log('hello it is opened')
    }
    const closed = () => {
        console.log('its closed')
    }
    return (
        <ThemeContext.Provider value={{ open, closed }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider } 