import { useContext, useState } from "react"
import { RefContext } from "./RefContext"
import ChildComponent from "./ChildComponent"


const ShowEmailAndPasswordData = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { dataSet } = useContext(RefContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        dataSet(email, password)
    }
    return (
        <>
            <div className="flex flex-col h-screen w-full justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                    <button type="submit">submit</button>
                </form>
                <ChildComponent />
            </div>
        </>
    )
}

export default ShowEmailAndPasswordData