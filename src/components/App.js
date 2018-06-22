import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Photo from "./Photo";
import Info from "./Info";
import Thumbs from "./Thumbs";
import Search from "./Search";

import { ImageType } from "./_proptypes";

class App extends React.Component {
  constructor(props) {
    super();

    this.apiWeather = props.config.api.weather;
    this.apiUnsplash = props.config.api.unsplash;

    this.state = {
      city: "",
      weather: "",
      conditions: {},
      images: [],
      mainImage: props.defaultImage
    };

    this.fetchImages = this.fetchImages.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
    this.onCitySearch = this.onCitySearch.bind(this);
  }

  // Data loading methods
  //----------------------------------------------------------------------------
  fetchCityConditions(city) {
    const { apiKey, url } = this.apiWeather;
    const weatherEndpoint = `${url}?q=${city}&appid=${apiKey}`;

    return fetch(weatherEndpoint)
      .then(res => (res.ok ? res.json() : Promise.reject(res)))
      .catch(err => console.log(err));
  }

  fetchImages(weather) {
    const { url, apiKey } = this.apiUnsplash;
    const unsplashEndpoint = `${url}?query=${weather}&client_id=${apiKey}&per_page=10`;

    return fetch(unsplashEndpoint)
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .catch(err => console.log(err));
  }

  loadWeatherImages(city) {
    const updateWeatherState = conditions => {
      const weather = conditions.weather[0].description;
      this.setState({ conditions, weather });
      return weather;
    };

    const updateImageState = results => {
      const images = results.map(image => ({
        id: image.id,
        thumb: image.urls.thumb,
        main: image.urls.regular,
        href: image.links.html,
        user: {
          name: image.user.name,
          url: image.user.links.html
        }
      }));
      this.setState({ images, mainImage: images[0] });
    };

    this.fetchCityConditions(city)
      .then(conditions => updateWeatherState(conditions))
      .then(weather => this.fetchImages(weather))
      .then(data => updateImageState(data.results));
  }

  // Event handlers
  //----------------------------------------------------------------------------
  onThumbClick(mainImage) {
    this.setState({ mainImage });
  }

  onCitySearch(city) {
    this.loadWeatherImages(city);
  }

  // React lifecycle methods
  //----------------------------------------------------------------------------
  // Load data automatically
  componentDidMount() {
    this.loadWeatherImages(this.apiWeather.city);
  }

  // Respond to changes in data
  render() {
    const { mainImage, images, weather } = this.state;

    return (
      <div className="content">
        <Header />
        <Photo url={mainImage.main} weather={weather} />
        <Info weather={weather} user={mainImage.user} />
        <Thumbs images={images} onThumbClick={this.onThumbClick} />
        <Search
          initialCity={this.apiWeather.city}
          onCitySearch={this.onCitySearch}
        />
      </div>
    );
  }
}

App.propTypes = {
  config: PropTypes.shape({
    api: PropTypes.shape({
      weather: PropTypes.shape({
        apiKey: PropTypes.string,
        url: PropTypes.string,
        city: PropTypes.string
      }),
      unsplash: PropTypes.shape({
        apiKey: PropTypes.string,
        url: PropTypes.string
      })
    })
  }),
  defaultImage: ImageType
};

App.defaultProps = {
  defaultImage: {
    id: "",
    thumb: "",
    main: "",
    href: "",
    user: { name: "", links: { html: "" } }
  }
};

export default App;
