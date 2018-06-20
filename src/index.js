import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const config = {
  api: {
    weather: {
      apiKey: "YOUR_API_KEY",
      city: "London",
      url: "https://api.openweathermap.org/data/2.5/weather"
    },
    unsplash: {
      apiKey: "YOUR_API_KEY",
      url: "https://api.unsplash.com/search/photos"
    }
  }
};

ReactDOM.render(<App config={config} />, document.getElementById("⚛️"));
