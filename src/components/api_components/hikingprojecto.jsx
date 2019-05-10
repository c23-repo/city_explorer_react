import React from 'react';
import superagent from 'superagent';

class Hikingproject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hikingData: [],
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
      let data = await superagent.get(this.props.backendURL+'/hikingproject').query({data: this.props.location});
      this.setState((state, props) =>{
        return {hikingData: data.body, locationID: this.props.location.id};
      })
    }
  }

  render() {
    let renderedContent = this.state.hikingData.map((trail, idx) => (
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
}

export default Hikingproject;


