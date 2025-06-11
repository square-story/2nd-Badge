import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RefContext = createContext()

// eslint-disable-next-line react/prop-types
export const RefProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dataSet = (emailValue, passwordValue) => {
        setEmail(emailValue);
        setPassword(passwordValue);
    }
    return (
        <RefContext.Provider value={{ email, password, dataSet }}>
            {children}
        </RefContext.Provider>
    )
}