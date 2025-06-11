/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CommuncationContext = createContext()

export const CommunicationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const fromMessage = (data) => {
        setMessage(data)
    }
    return (
        <CommuncationContext.Provider value={{ message, fromMessage }}>
            {children}
        </CommuncationContext.Provider>
    )
}