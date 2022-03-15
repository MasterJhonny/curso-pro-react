import React from 'react'



function Card({name, img, species}) {
    return (
        <div className="Card">
            <img src={img} alt="image is alien"/>
            <h2>{name}</h2>
            <p>{species}</p>
        </div>
    );
}

export { Card };