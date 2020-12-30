import React, {Component} from 'react';
import SearchBar from '../components/SearchBar/searchBar';
import youtube from '../api/youtube';
import VideoList from '../components/VideoList/videoList';
import VideoDetails from '../components/VideoDetails/videoDetails';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: [],
      currentVideo: null
    }
  }
  handleSubmit = async (searchBarText) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchBarText
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
  handleVideoSelect = (video) => {
    this.setState({currentVideo: video})
  }

  render(){
    return(
      <div>
        <div>
        <SearchBar handleFormSubmit={this.handleSubmit}/>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm main-video">
              <VideoDetails video={this.state.currentVideo}/>
            </div>
            <div className="col-sm">
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
