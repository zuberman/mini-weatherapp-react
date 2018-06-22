import React from "react";
import Photo from './Photo';
import Info from './Info';
import Thumbs from './Thumbs';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      images: [],
      mainImage: '',
      user: undefined
    };

    this.receiver = this.receiver.bind(this);
    this.receiveMainImage = this.receiveMainImage.bind(this);
  }

  receiver(results){
    this.setState({
      images: results,
      mainImage: results[0].urls.regular,
      user: results[0].user
    });
  }

  receiveMainImage(mainImage, user){
    console.log(mainImage);

    this.setState({
      mainImage,
      user
    });
  }

  render() {
    const infoPanel = this.state.user ? <Info user={this.state.user} /> : null;
    return (
      <main className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>opolis</i>
          </h1>
        </header>
        <Photo mainImage={this.state.mainImage} />

        { infoPanel }

        <Thumbs images={this.state.images} receiveMainImage={this.receiveMainImage}/>
        <Search receiver={this.receiver}/>
      </main>
    );
  }
}

App.defaultProps = {};

export default App;
