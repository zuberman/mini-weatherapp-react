import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const config = {
  api: {
    weather: {
      apiKey: "a70fde74ccea0ae4b9d62142c9dece40",
      city: "London",
      url: "https://api.openweathermap.org/data/2.5/weather"
    },
    unsplash: {
      apiKey:
        "535abe4a18fd52841b910a3c853121ef902e958d92735c14e22828c6276eda85",
      appName: "weather",
      utm: `utm_source=&utm_medium=referral&utm_campaign=api-credit`,
      url: "https://api.unsplash.com/search/photos"
    }
  }
};

ReactDOM.render(<App config={config} />, document.getElementById("⚛️"));
