import React from 'react';

const Yelp = (props) => {
  let renderedContent = props.apiData.map((yelp, idx) => (
    <li key={idx}>
        <a href={ yelp.url }>{ yelp.name }</a>
        <p>The average rating is { yelp.rating } out of 5 and the average cost is { yelp.price } out of 4</p>
        <img src={ yelp.image_url} alt={ yelp.name }/>
    </li>
  ));
  return(
    <section className="yelp-container">
      <h3>Results from the Yelp API</h3>
      <ul className="yelp-results">
        {renderedContent}
      </ul>
    </section>
  );
} 

export default Yelp;