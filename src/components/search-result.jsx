import React from 'react';
import Result from './result.jsx';


const SearchResult = (props) => {
  return (
    <React.Fragment>
      <div className="column-container">
        <Result {...props} pathCompKey='weather' />
        <Result {...props} pathCompKey='yelp' />
        <Result {...props} pathCompKey='events' />
        <Result {...props} pathCompKey='movies' />
        <Result {...props} pathCompKey='hikingproject' />
      </div>
    </React.Fragment>
  );
}

export default SearchResult;