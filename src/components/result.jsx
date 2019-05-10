import React from 'react';
import superagent from 'superagent';
import Darksky from './api_components/darksky.jsx';
import Yelp from './api_components/yelp.jsx';
import Eventbrite from './api_components/eventbrite.jsx';
import Imdb from './api_components/imdb.jsx';
import Hikingproject from './api_components/hikingproject.jsx';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiData: [],
      locationID: 0
    };
  }

  components = {
    weather: Darksky,
    yelp: Yelp,
    events: Eventbrite,
    movies: Imdb,
    trails: Hikingproject

  };

  componentDidUpdate(){
    if(this.props.location.id !== this.state.locationID){
      this.fetchData();
    }
  }

  fetchData = async () => {
    if(Object.entries(this.props.location).length !== 0){
      let data = await superagent
      .get(this.props.backendURL+'/'+this.props.pathCompKey)
      .query({data: this.props.location});
      this.setState((state, props) =>{
        return {apiData: data.body, locationID: this.props.location.id};
      })
    }
  }

  render() {
    const TagName = this.components[this.props.pathCompKey];
    return <TagName {...this.state}/>;
  }
}

export default Result;