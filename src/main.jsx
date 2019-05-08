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
        <Result apiName={'Dark Sky API'}/>
        <Result apiName={'Yelp API'}/>
        <Result apiName={'Eventbrite API'}/>
        <Result apiName={'Movie DB API'}/>
        <Result apiName={'Hiking Project API'}/>
      </React.Fragment>
    );
  }
}

export default Main;