import { useContext } from "react"
import { FormContext } from "./FormContext"

const ChildComponent = () => {
    const { email, password } = useContext(FormContext)
    return (
        <>
            <h1>{`The Email is:${email}`}</h1>
            <h1>{`The password is:${password}`}</h1>
        </>
    )
}

export default ChildComponent