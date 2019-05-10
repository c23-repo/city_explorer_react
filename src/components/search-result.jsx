import React from 'react';
import Darksky from './api_components/darksky.jsx'
import Yelp from './api_components/yelp.jsx'
import Eventbrite from './api_components/eventbrite.jsx'
import Imdb from './api_components/imdb.jsx'
import Hikingproject from './api_components/hikingproject.jsx'

const SearchResult = (props) => {
  return (
    <React.Fragment>
      <Darksky location={props.location} backendURL={props.backendURL}/>
      <Yelp location={props.location} backendURL={props.backendURL}/>
      <Eventbrite location={props.location}  backendURL={props.backendURL}/>
      <Imdb location={props.location} backendURL={props.backendURL}/>
      <Hikingproject location={props.location} backendURL={props.backendURL}/>
    </React.Fragment>
  );
}

export default SearchResult;