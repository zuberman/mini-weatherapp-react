import React from 'react';

class Search extends React.Component {
  render(){
    return (
      <div className="controls">
        <form className="search" id="search">
          <label className="search__label" htmlFor="search-tf">City</label>
          <input className="search__input" id="search-tf" name="city" placeholder="Enter city name" autoComplete="city" />
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
