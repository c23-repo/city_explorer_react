import React from 'react';
import superagent from 'superagent';

class Imdb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieData: [],
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
      let data = await superagent.get(this.props.backendURL+'/movies').query({data: this.props.location});
      this.setState((state, props) =>{
        return {movieData: data.body, locationID: this.props.location.id};
      })
    }
  }

  render() {
    let renderedContent = this.state.movieData.map((movie, idx) => (
      <li key={idx}>
        <p><span>{ movie.title }</span> was relased on { movie.released_on }. Out of { movie.total_votes } total votes, { movie.title } has an average vote of { movie.average_votes } and a popularity score of { movie.popularity }.</p>
        <img src={ movie.image_url } alt={movie.title}/>
        <p>{ movie.overview }</p>
      </li>
    ));
    return(
      <section className="movie-container">
        <h3>Results from the Movie DB API</h3>
        <ul className="movies-results">
          {renderedContent}
        </ul>
      </section>
    );
  }
}

export default Imdb;