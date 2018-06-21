import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  constructor(props) {
    super();

    this.state = {
      city: props.initialCity
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onCitySearch(this.state.city);
  }

  onChange(event) {
    this.setState({ city: event.target.value });
  }

  render() {
    return (
      <div className="controls">
        <form className="search" onSubmit={this.onSubmit}>
          <label className="search__label" htmlFor="search-tf">
            City
          </label>
          <input
            className="search__input"
            id="search-tf"
            name="city"
            placeholder="Enter city name"
            autoComplete="city"
            value={this.state.city}
            onChange={this.onChange}
          />
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  initialCity: PropTypes.string,
  onCitySearch: PropTypes.func
};

Search.defaultProps = {
  initialCity: "",
  onCitySearch: Function.prototype
};

export default Search;
