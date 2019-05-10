import React from 'react';

const Eventbrite = (props) => {
  let renderedContent = props.apiData.map((event, idx) => (
  <li key={idx}>
      <a href={ event.link }>{ event.name }</a>
      <p>Event Date: { event.event_date }</p>
      <p>{ event.summary }</p>
    </li>
  ));
  return(
    <section>
      <h3>Results from the Eventbrite</h3>
      <ul className="events-results">
        {renderedContent}
      </ul>
    </section>
  );
}

export default Eventbrite;