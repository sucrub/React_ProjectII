import React from 'react'

const info = {
    name: "Dog",
    imgurl: "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
    imgsize: 90,
}

const DisplayInfo = () => {
    return (
        <div>
            <h1>{info.name}</h1>
            <img src={info.imgurl} style={{
                width: info.imgsize,
                height: info.imgsize
            }}></img>
        </div>
    )
}

export default DisplayInfo