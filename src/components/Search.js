import React from 'react';

class Search extends React.Component {
  constructor(){
    super();
    this.state ={
      searchQuery: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event){
  this.setState({
    searchQuery: event.target.value
  })
}

handleSubmit(event){
  event.preventDefault();
  this.props.receiveQuery(this.state.searchQuery)
}


  render(){
    return (
      <div className="controls">
        <form className="search" id="search" onSubmit={this.handleSubmit}>
          <label className="search__label" htmlFor="search-tf">City</label>
          <input onChange={this.handleChange} className="search__input" id="search-tf" name="city" placeholder="Enter city name" autoComplete="city" value={this.state.searchQuery}/>
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
