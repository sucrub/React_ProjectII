import { useState } from "react"

const Memo = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Click me</button>
        </div>
    )
}
export default Memo