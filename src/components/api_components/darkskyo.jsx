import React from 'react';
import superagent from 'superagent';

class Darkskyo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      weatherData: [],
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
      let data = await superagent.get(this.props.backendURL+'/weather').query({data: this.props.location});
      this.setState((state, props) =>{
        return {weatherData: data.body, locationID: this.props.location.id};
      })
    }
  }

  render() {
    let renderedContent = this.state.weatherData.map((weather, idx) => (
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
}

export default Darkskyo;