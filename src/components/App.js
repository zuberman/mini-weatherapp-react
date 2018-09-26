import React from 'react';
import Thumbs from './Thumbs';
import Info from './Info';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
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

        <figure className="photo" id="photo"></figure>

        <Info />
        <Thumbs />
        <Search />
      </main>
    );
  }
}

export default App;
