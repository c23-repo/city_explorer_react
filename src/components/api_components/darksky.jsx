import React from 'react';

const Darksky = (props) => {
  console.log(props);
  let renderedContent = props.apiData.map((weather, idx) => (
    <li key={idx}>The forecast for { weather.time } is: { weather.forecast }</li>
  ));
  return(
    <section>
      <h3>Results from the Dark Sky API</h3>
      <ul className="weather-results">
        {renderedContent}
      </ul>
    </section>
  );
};

export default Darksky;