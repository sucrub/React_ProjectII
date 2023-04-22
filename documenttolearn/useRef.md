useRef
- Lưu các giá trị qua một tham chiếu bên ngoài
- function component
const [count, setCount] = useState(60)

// luôn trả về object có property là current
let timerId = useRef()

const handleStart = () => {
    timerId.current = setInterval(() => {

        setCount(prevCount => prevCount - 1)
    }, 1000)
}
const handleStop = () => {
    clearInterval(timerId.current)
}

return (
    <div style={{ padding: '20px' }}>
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
)
