import { useEffect, useState } from "react"

const ExampleOfUseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('component mounted')
        return () => {
            console.log('component unmount')
        }
    }, [])

    useEffect(() => {
        console.log('componet update', count)


    }, [count])

    return (
        <>
            <div>ExampleOfUseEffect{count}</div>
            <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        </>

    )
}

export default ExampleOfUseEffect