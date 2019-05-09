import React from 'react';

const Map = (props) => {

  let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude}%2c%20${props.location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${process.env.REACT_APP_GEOCODE_API_KEY}`;
  
  return (
      <img id="map" className="hide" src={`${mapURL}`} alt="Map of search query" />
  );
}

export default Map;




