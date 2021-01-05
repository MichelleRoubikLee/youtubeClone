import React, {Component} from 'react';
import './searchBar.css';

class SearchBar extends Component {
  constructor(){
    super()

    this.state = {
      text: ''
    };
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.text);
  }
  
  render(){
    return(
      <div>
<<<<<<< HEAD
        <nav className="navbar navbar-light bg-light">
          <div className="bar container-fluid">
            <a href="navbar" className="navbar-brand">YouTubeClone</a>
              <form className="d-flex" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.text} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-dark" type="submit">Search</button>
=======
        <nav class="navbar navbar-light bg-light">
          <div class="bar container-fluid">
            <a className="navbar-brand">YouTubeClone</a>
              <form class="d-flex" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.text} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-dark" type="submit">Search</button>
>>>>>>> e52fc3fff00786984b45042c0476b5e7241177d5
              </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default SearchBar