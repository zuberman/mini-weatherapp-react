import React from "react";

class Photo extends React.Component {
  render() {
    return (
      <figure className="photo">
        <img src={this.props.url} alt={this.props.url} />
      </figure>
    );
  }
}

export default Photo;
