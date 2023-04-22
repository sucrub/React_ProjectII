import { useEffect, useState } from "react"

function Timer() {
    const [countdown, setCountdown] = useState(180)
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev => prev - 1));
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Timer