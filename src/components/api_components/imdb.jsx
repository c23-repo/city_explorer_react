import React from 'react';

const Imdb = (props) => {
  let renderedContent = props.apiData.map((movie, idx) => (
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

export default Imdb;