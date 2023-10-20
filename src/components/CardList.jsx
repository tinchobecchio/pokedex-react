
import Card from "./Card";
import './CardList.css'


const CardList = ({ pokemons }) => {
    return (
        <div className="cardContainer">
            {pokemons.map(pokemon => {
                return (
                    <Card 
                        key={pokemon.name}
                        pokemon={pokemon}
                    />
                )
            })}
        </div>
    );
}
 
export default CardList;