import { useContext, useRef } from "react"
import { FormContext } from "./FormContext"

const Form = () => {
    const { FormDataSet } = useContext(FormContext)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        FormDataSet(email, password)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} placeholder="Enter email" />
            <input type="password" ref={passwordRef} placeholder="enter password" />
            <button type="submit">submit</button>
        </form>
    )
}

export default Form