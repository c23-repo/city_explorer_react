import React from 'react';
import Result from './result.jsx';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Result apiName={'Dark Sky API'}/>
        <Result apiName={'Yelp API'}/>
        <Result apiName={'Eventbrite API'}/>
        <Result apiName={'Movie DB API'}/>
        <Result apiName={'Hiking Project API'}/>
      </React.Fragment>
    );
  }
}

export default SearchResult;