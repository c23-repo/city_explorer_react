import React from 'react';
import superagent from 'superagent';

class Eventbrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      eventData: [],
      locationID: 0
    };
  }

  componentDidUpdate(){
    if(this.props.location.id !== this.state.locationID){
      this.fetchData();
    }
  }

  fetchData = async () => {
    if(Object.entries(this.props.location).length !== 0 && this.props.location.constructor === Object){
      let data = await superagent.get(this.props.backendURL+'/events').query({data: this.props.location});
      this.setState((state, props) =>{
        return {eventData: data.body, locationID: this.props.location.id};
      })
    }
  }

  render() {
    let renderedContent = this.state.eventData.map((event, idx) => (
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
}

export default Eventbrite;