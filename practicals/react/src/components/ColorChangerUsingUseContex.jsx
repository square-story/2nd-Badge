/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ColorContex = createContext()

export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('purple')
    const green = () => {
        setColor('green')
    }
    const yellow = () => {
        setColor('yellow')
    }
    return (
        <ColorContex.Provider value={{ color, green, yellow }}>
            {children}
        </ColorContex.Provider>
    )
}