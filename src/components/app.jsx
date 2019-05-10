import React from 'react';
import Header from './header.jsx'
import SearchForm from './search-form.jsx';
import Map from './map.jsx';
import SearchResults from './search-result.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      backendURL: 'https://stark-tor-84880.herokuapp.com'
    };
  }

  // Pass up to update location
  updateLocation = (location) => {
    this.setState({location});
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <SearchForm updateLocation={this.updateLocation} backendURL={this.state.backendURL} />
          <Map location={this.state.location}/>
          <SearchResults location={this.state.location} backendURL={this.state.backendURL}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;