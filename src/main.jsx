import React from 'react';
import Search from './search';
import Map from './map';
import Result from './result';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
      </React.Fragment>
    );
  }
}

export default Main;