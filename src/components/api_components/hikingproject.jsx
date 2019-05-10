import React from 'react';

const Hikingproject = (props) => {
  let renderedContent = props.apiData.map((trail, idx) => (
    <li key={idx}>
      <p>Hike Name: <a href={ trail.trail_url }>{ trail.name }</a>, Location: { trail.location }, Distance: { trail.length } miles</p>
      <p>On { trail.condition_date } at { trail.condition_time }, trail conditions were reported as: { trail.conditions }</p>
      <p>This trail has a rating of { trail.stars } stars (out of { trail.star_votes } votes)</p>
      <p>{ trail.summary }</p>
    </li>
  ));
  return(
    <section>
      <h3>Results from the Hiking Project API</h3>
      <ul className="trails-results">
        {renderedContent}
      </ul>
    </section>
  );
}



export default Hikingproject;