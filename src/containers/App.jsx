import { Component } from "react";
import CardList from "../components/CardList";
import './App.css'
import Title from "../components/Title";
import Searchbar from "../components/Searchbar";

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      search: ""
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(resp => resp.json())
      .then(data => this.setState({ pokemons: data.results}))
  }

  onSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { pokemons, search } = this.state
    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div className="container">
        <Title />
        <Searchbar 
          onSearch={this.onSearch}
        />
        <CardList 
          pokemons={filteredPokemons}
        />
      </div>
    )
  }
}

export default App;
