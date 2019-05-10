import React from 'react';
import Result from './result.jsx';
import Darkstylestateless from './api_components/darkskystateless.jsx'


const SearchResult = (props) => {
  return (
    <React.Fragment>
      <div className="column-container">
        <Result {...props} pathCompKey='weather' />
        <Result {...props} pathCompKey='yelp' />
        <Result {...props} pathCompKey='events' />
        <Result {...props} pathCompKey='movies' />
        <Result {...props} pathCompKey='trails' />
        {/* <Darkstylestateless {...props} /> */}
      </div>
    </React.Fragment>
  );
}

export default SearchResult;