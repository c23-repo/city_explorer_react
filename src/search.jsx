import React from 'react';
import superagent from 'superagent';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>Explore!</button>
      </form>
    );
  }
}

export default Search;