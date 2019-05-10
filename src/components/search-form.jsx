import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  handleQuery = e => {
    let query = e.target.value;
    this.setState({ query });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // API call

    let data = await superagent.get(`${this.props.backendURL}/location?data=${this.state.query}`);
    let location = data.body;
    // Update App state
    this.props.updateLocation(location);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleQuery} />
        <button>Explore!</button>
      </form>
    );
  }
}

export default SearchForm;