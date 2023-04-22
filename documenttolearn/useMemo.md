useMemo(callback, [deps]) => tránh thực hiện lại 1 đoạn logic không cần thiết
- nếu deps rỗng [] thì useMemo chỉ thực hiện tính toán 1 lần, và mỗi lần re-render đều trả về kết quả đã tính trước đó
- nếu truyền vào deps thì chỉ khi deps thay đổi mới cần tính toán lại

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  // nameRef sẽ có 1 propperty là current
  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: parseInt(price)
    }])

    // sau khi ấn add thì sẽ tự xóa name và price
    setName('')
    setPrice('')

    // sau khi ấn add sẽ tự focus vào nameRef
    // mà nameRef đang ở trong element input name
    nameRef.current.focus();
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {

      return result + prod.price
    }, 0)
    return result
  }, [products])

  return (
    <div style={{ padding: '10px 32px' }}>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}