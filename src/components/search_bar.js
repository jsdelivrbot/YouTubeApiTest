import React, { Component} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      worm: 'No worm here!'
    };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})} />
        Value is: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
