1. memo() -> higher order component (HOC)
    - export default memo(App)  => sử dụng tính năng của memo() với component App
    - memo check các prop của component có bị thay đổi không để quyết định có re-render lại component không (nếu không thay đổi thì sẽ không re-render) > tăng hiệu năng, tránh re-render khi không cần thiết
vd :
function Content({ count }) {

    return (
        <h2>Hello Mrgon {count}</h2>
    )
}
export default memo(Content)

function App() {
  // dùng cho bài từ (useState -> useRef)
  // const [show, setShow] = useState(false);
  // return (
  //   <div style={{ padding: 32 }}>
  //     <button onClick={() => setShow(!show)}>Toggle</button>

  //     {show && <Content />}
  //   </div>
  // )

  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div style={{ padding: '10px 32px' }}>
      <Content count={count} />
      <h1>{count}</h1>
      <button onClick={increase}>Click me!</button>
    </div>
  )
}
2. useCallback()
<!-- - Reference types
-      React memo() -->

- useCallback nhận 2 đối số (callback, [deps]) : nếu callback sử dụng biến bên ngoài mà có khả năng bị thay đổi sau mỗi lần re-render
    + nếu deps thay đổi, useCallback sẽ tạo ra một callback mới, return về tham chiếu mới 
    + nếu deps không thay đổi, useCallback sẽ luôn trả về tham chiếu trước đó

+ note: mỗi lần function mới được tạo ra (như vd dưới là mỗi lần click thì function mới được tạo -> tạo ra tham chiếu mới -> thay đổi onincrease -> memo thấy props là onincrease thay đổi nên re-render)
vd: vì áp dụng đồng thời memo và useCallback nên:
+ onincrease không bị thay đổi tham chiếu
+ memo nhận thấy onincrease không bị thay đổi nên không re-render

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div style={{ padding: '10px 32px' }}>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>

    </div>
  )
}

function Content({ onIncrease }) {
    // <></> được Babel support chuyển đổi thành React Fragment
    return (
        <>
            <h2>Hello Mrgon</h2>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

