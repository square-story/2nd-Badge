import { useState } from "react"

const ColorChanger = () => {
    let [color, setColor] = useState('purple')
    return (
        <>
            <div style={{ backgroundColor: color, height: '50vh', width: 'full' }}>
                <h1>{color}</h1>
                <button style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>green</button>
                <button style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>yellow</button>
            </div>
        </>
    )
}

export default ColorChanger