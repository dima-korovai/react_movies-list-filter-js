export const SearchBox = ({ chooseMovies }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          onChange={(event) => {
            chooseMovies(event.currentTarget.value);
          }}
        />
      </div>
    </div>
  </div>
);