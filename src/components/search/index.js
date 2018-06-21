import React from "react";
import PropTypes from "prop-types";

import s from "./styles.scss";

class Search extends React.Component {
  constructor(props) {
    super();

    this.state = {
      city: props.initialCity
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.city);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  render() {
    return (
      <div className={s["controls"]}>
        <form className={s["search"]} onSubmit={this.handleSubmit}>
          <label className={s["search__label"]} htmlFor="search-tf">
            City
          </label>
          <input
            className={s["search__input"]}
            id="search-tf"
            name="city"
            placeholder="Enter city name"
            autoComplete="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <button className={s["search__btn"]}>Go</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  initialCity: PropTypes.string,
  onChange: PropTypes.function,
  onSubmit: PropTypes.function
};

Search.defaultProps = {
  initialCity: "",
  onChange: Function.prototype,
  onSubmit: Function.prototype
};

export default Search;
