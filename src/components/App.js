import React from 'react';
import Thumbs from './Thumbs';
import Info from './Info';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      search: "London",
      images: [],
      mainImage: ""
    }

this.receiveQuery = this.receiveQuery.bind(this);
this.apiCall = this.apiCall.bind(this);
this.receiveImage = this.receiveImage.bind(this);
  }



  componentDidMount(){
    let cityweather
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&apiKey=ba952ac5bba8a3501d9f27b84a1e7ed6`
    fetch(weatherUrl)
       .then(response => response.json())
       .then(content => {
       console.log(content)
       cityweather = content.weather[0].description
       this.setState({
       weatherObject: content
        })
      })

    let unsplashUrl =`https://api.unsplash.com/search/photos?page=1&query=${cityweather}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`
      fetch(unsplashUrl)
         .then(response => response.json())
         .then(content => {
         console.log(content)
         this.setState({
         images: content.results,
         mainImage: content.results[0].urls.regular
       }, () => console.log(this.state.images, "test")
     )
        })
  }




apiCall(){
  let cityweather

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&apiKey=ba952ac5bba8a3501d9f27b84a1e7ed6`

  fetch(weatherUrl)
     .then(response => response.json())
     .then(content => {
     console.log(content)
     cityweather = content.weather[0].description

  let unsplashUrl =`https://api.unsplash.com/search/photos?page=1&query=${cityweather}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`
    fetch(unsplashUrl)
       .then(response => response.json())
       .then(content => {
       console.log(content)
       this.setState({
       images: content.results,
       mainImage: content.results[0].urls.regular
     }, () => console.log(this.state.images, "test")
   )
      })
    })

}


receiveQuery(query){
  this.setState({
    search: query
  },() => this.apiCall())


}

receiveImage(image){
  this.setState({
    mainImage: image
  })
}


  render() {
    return (
      <main className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>opolis</i>
          </h1>
        </header>

        <figure className="photo" id="photo">
          <img src={this.state.mainImage}/>
        </figure>

        <Info />
        <Thumbs images={this.state.images} receiveImage={this.receiveImage}/>
        <Search receiveQuery= {this.receiveQuery}/>
      </main>
    );
  }
}

export default App;
