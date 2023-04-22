import React from 'react'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const RenderList = () => {
    const listItems = products.map(product =>
        <li style={{
            color: product.isFruit ? 'magenta' : 'green'
        }}>
            {product.id}: {product.title}
        </li>
    )
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default RenderList