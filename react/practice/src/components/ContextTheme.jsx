import { useContext } from "react"
import { ThemeContext } from "./ExampleuseContext"

const ContextTheme = () => {
    const { closed, open } = useContext(ThemeContext)
    return (
        <>
            <button onClick={open}>toOpen</button>
            <button onClick={closed}>toClose</button>
        </>
    )
}

export default ContextTheme