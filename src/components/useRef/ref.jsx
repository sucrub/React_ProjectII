import { useState, useRef, useEffect } from "react"

const Ref = () => {

    const [count, setCount] = useState(60);
    
    const timerId = useRef()
    const prevCount = useRef()
    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count, prevCount.current);
    let h1Ref = useRef()

    useEffect(() => {
        console.log(h1Ref.current);
    })

    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

// const Count = () => {
//     const [count, setCount] = useState(60);
//     let timer = useRef();
//     const handleStart = () => {
//         timer.current = setInterval(() => {
//             setCount(prev => prev - 1)
//         }, 1000)
//     }
//     const handleStop = () => {
//         clearInterval(timer.current);
//     }
//     let h1Ref = useRef()
//     useEffect(() => {
//         console.log(h1Ref.current);
//     })
//     return (
//         <div>
//             <h1 ref={h1Ref}>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }

export default Ref