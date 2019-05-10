import React from 'react';
import superagent from 'superagent';

const fetchData = async (props) => {
  if(Object.entries(props.location).length !== 0 && props.location.constructor === Object){
    const data = await superagent.get(props.backendURL+'/weather').query({data: props.location});
    return data.body;
  }
}

const Darkskystateless = (props) => {


  let weatherData = fetchData(props);
  console.log(weatherData);
  let renderedContent = weatherData.map((weather, idx) => (
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
}


export default Darkskystateless;


// import React from 'react';

// const Yelp = (props) => {
//   let renderedContent = props.apiData.map((yelp, idx) => (
//     <li key={idx}>
//         <a href={ yelp.url }>{ yelp.name }</a>
//         <p>The average rating is { yelp.rating } out of 5 and the average cost is { yelp.price } out of 4</p>
//         <img src={ yelp.image_url} alt={ yelp.name }/>
//     </li>
//   ));
//   return(
//     <section className="yelp-container">
//       <h3>Results from the Yelp API</h3>
//       <ul className="yelp-results">
//         {renderedContent}
//       </ul>
//     </section>
//   );
// } 

// export default Yelp;