import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }
  render(){
    return (
      <form className="input-group">
        <input 
          value={this.state.term}
          onChange={this.onInputChange}
          type="text" 
          className="form-control"
          placeholder="Enter a City Name"
          />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;