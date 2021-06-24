import SearchIcon from "../assets/search-icon.png";

const SearchBar = () => {
  return (
    <form className="search-bar">
      <label htmlFor="add-movie-search">
        <span className="visually-hidden">Add Movies</span>
      </label>
      <input
        type="text"
        id="add-movie-search"
        placeholder="Add movies..."
      />
      <input className="search-button" type="image" src={SearchIcon} alt="Search" />
    </form>
  );
}

export default SearchBar;
