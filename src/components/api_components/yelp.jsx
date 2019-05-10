import React from 'react';
import superagent from 'superagent';


class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      yelpData: [],
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
      console.log(this.props.backendURL+'/yelp');
      let data = await superagent.get(this.props.backendURL+'/yelp').query({data: this.props.location});
      this.setState((state, props) =>{
        return {yelpData: data.body, locationID: this.props.location.id};
      })
    }
  }

  render() {
    let renderedContent = this.state.yelpData.map((yelp, idx) => (
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
}

export default Yelp;