import React, {Component} from 'react';
import SearchBar from '../components/SearchBar/searchBar';
import youtube from '../api/youtube';
import VideoList from '../components/VideoList/videoList';
import VideoDetails from '../components/VideoDetails/videoDetails';
import CommentSection from '../components/CommentSection/commentSection';
import DefaultVideos from '../components/DefaultVideos/defaultVideos';
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

  componentDidMount = async (defaultVids) => {
    const response = await youtube.get('/search', {
      params: {
        relatedToVideoId: defaultVids
      }
    })
    this.setState({
      videos: response.data.items
    })
  };

  componentDidUpdate(){

  }

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
              <div className="landingPage">
              <DefaultVideos handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} video={this.state.currentVideo}/>
              </div>
              <VideoDetails video={this.state.currentVideo}/>
              <CommentSection 
                video={this.state.currentVideo}
                />
            </div>
            <div className="col-sm">
              <VideoList className="video-list" handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} video={this.state.currentVideo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
