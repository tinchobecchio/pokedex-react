import { useEffect, useState } from "react";
import './Card.css'

const Card = ({pokemon}) => {
    const [infoPoke, setInfoPoke] = useState({})

    const getPokemonData = async(pokemon) => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await resp.json()
        setInfoPoke(data)
    }

    useEffect(() => {
        if(pokemon?.name) {
            getPokemonData(pokemon)
        }
        // console.log(infoPoke);
    },[pokemon])

    if (infoPoke?.sprites?.front_default) {
        return ( 
            <div className="card">
                <h3>#{infoPoke.id} {pokemon.name}</h3>
                <img src={infoPoke.sprites.front_default} alt={infoPoke.name} />
            </div>
         );   
    } else {
        return (<></>)
    }
}
 
export default Card;