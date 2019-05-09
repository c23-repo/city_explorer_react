import React from 'react';
import Header from './header.jsx'
import SearchForm from './search-form.jsx';
import Map from './map.jsx';
import SearchResults from './search-result.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
      }
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
        <SearchForm updateLocation={this.updateLocation}/>
        <Map location={this.state.location}/>
        <SearchResults location={this.state.location}/>
      </React.Fragment>
    );
  }
}

export default App;