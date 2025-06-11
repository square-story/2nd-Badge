
const PreventRightClick = () => {
    const handleClick = (event) => {
        event.preventDefault()
        alert('this action prevented')
    }
    return (<>
        <div>PreventRightClick</div>
        <button onContextMenu={handleClick}>preventRightClick</button>
    </>
    )
}

export default PreventRightClick