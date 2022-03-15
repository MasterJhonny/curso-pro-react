import React, { useState, useEffect } from 'react'


import { Card } from './Card'

function Characters() {

    const [caracters, setCaracters] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(async (data) => {
            let dataPika = data.results;
            dataPika = await Promise.all(dataPika.map( async (item) => {
                const response = await fetch(item.url)
                const pika = await response.json();
                return {
                    ...item,
                    image: pika.sprites.back_default
                }
            }));
            setCaracters(dataPika)
        })
        .catch(error => console.error(error))
    }, []);


    console.log(caracters)

    return (  
        <div className="Characters">

            {caracters.map(item => (
                <Card
                    key={item.name}
                    name={item.name}
                    img={item.image}
                    // species={item.species}
                />
            ))}

        </div>
    );
}

export { Characters };