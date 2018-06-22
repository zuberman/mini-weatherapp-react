import React from 'react';

const config = {
  api: {
    weather: {
      apiKey: "b7aecc81c3f01e1eadcb367a666606c4",
      city: "London",
      url: "https://api.openweathermap.org/data/2.5/weather"
    },
    unsplash: {
      apiKey: "217d39354a152114b5bb4e0f77e4ca3c7ecdbe155bb9d43580e11138def7915a",
      url: "https://api.unsplash.com/search/photos"
    }
  }
};

class Search extends React.Component {
  constructor(){
    super();

    this.state = {city: config.api.weather.city};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchCity = this.fetchCity.bind(this);
  }

  handleChange(event){
    event.preventDefault();

    this.setState({
      city: event.target.value
    });
  }

  fetchCity(){
    fetch(`${config.api.weather.url}?q=${this.state.city}&APPID=${config.api.weather.apiKey}`)
      .then(response => response.json())
      .then( result => {
        return fetch(`${config.api.unsplash.url}?query=${result.weather[0].description}&client_id=${config.api.unsplash.apiKey}`);
      })
      .then( response => response.json())
      .then( result => {
        this.props.receiver(result.results);
      });
  }

  handleSubmit(event){
    event.preventDefault();
    this.fetchCity();
  }

  componentDidMount(){
    this.fetchCity();
  }

  render(){
    console.log('render');
    return (
      <div className="controls">
        <form onSubmit={this.handleSubmit} className="search" id="search">
          <label className="search__label" htmlFor="search-tf">City</label>
          <input
            onChange={this.handleChange}
            className="search__input"
            id="search-tf"
            name="city"
            placeholder="Enter city name"
            autoComplete="city"
            value={this.state.city}
          />
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
