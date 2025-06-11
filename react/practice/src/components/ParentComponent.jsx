import { useRef } from "react"
import ChildComponent from "./ChildComponent"
import CustomInput from "./CustomInputs(ForwardRef)"
import useToggle from "./useToggle"

const ParentComponent = () => {
    let inputRef = useRef(null)
    let [toggleState, toggleAction] = useToggle(false)
    let name = 'Sadik'
    const handleFocus = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <div>ParentComponent</div>
            <ChildComponent name={name} />
            <div>
                <h1>ForwardRef examples</h1>
                <CustomInput ref={inputRef} placeholder="Type something here..." />
                <button onClick={handleFocus}>Handle Focus</button>
            </div>
            <div>
                <h1>CustomeHook Example</h1>
                <label>
                    <input
                        type="checkbox"
                        checked={toggleState}
                        onChange={toggleAction}
                    />
                    Toggle me!
                </label>
                <p>The checkbox is {toggleState ? 'checked' : 'unchecked'}.</p>
            </div>
        </>
    )
}

export default ParentComponent