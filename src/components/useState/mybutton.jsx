import { useState } from 'react';
import React from 'react'

// const MyButton = ({ count, onClick }) => {
//     // const [count, setCount] = useState(0);
//     // function handleClick() {
//     //     setCount(count + 1);
//     // }

//     return (
//         <div>
//             <button onClick={onClick}>Click {count} me</button>
//         </div>
//     )
// }


const MyButton = () => {
    function handleClick() {
        alert("clicked");
    }
    return (
        <button onClick={handleClick}>This is a button</button>
    )
}

export default MyButton;