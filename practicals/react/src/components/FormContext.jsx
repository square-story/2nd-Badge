import { createContext, useState } from "react";

export const FormContext = createContext()

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const FormDataSet = (emailData, passwordData) => {
        setEmail(emailData)
        setPassword(passwordData)
    }
    return (
        <FormContext.Provider value={{ email, password, FormDataSet }}>
            {children}
        </FormContext.Provider>
    )
}