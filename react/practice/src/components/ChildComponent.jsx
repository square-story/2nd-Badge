import { useContext } from "react"
import { RefContext } from "./RefContext"

const ChildComponent = () => {
    const { email, password } = useContext(RefContext)
    return (
        <>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <h1>somePayment</h1>
        </>
    )
}

export default ChildComponent