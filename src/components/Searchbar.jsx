import './Searchbar.css'

const Searchbar = ({onSearch}) => {
    return ( 
        <div className='searchContainer'>
            <span>I Choose You!</span>
            <input 
                type="search" 
                placeholder='Search any pokemon'
                name="searchbar" 
                id="searchbar" 
                onChange={onSearch}
            />
        </div>
     );
}
 
export default Searchbar;