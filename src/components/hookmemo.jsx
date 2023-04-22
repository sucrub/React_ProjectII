import { useMemo, useRef, useState } from "react"

const HookMemo = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name: name,
            price: +price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const result = products.reduce((res, prod) => {
            return res + prod.price;
        }, 0)
        return result
    }, [products])

    return (
        <div>
            <input 
                ref={nameRef}
                value = {name}
                placeholder="Enter name"
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input 
                value = {price}
                placeholder="Enter price"
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            Total: {total}
        </div>
    )
}

export default HookMemo
