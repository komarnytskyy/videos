import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';

class App extends React.Component<any, any> {
  state = {
    videos: [],
    selectedVideo: null
  }
  componentDidMount() {
    this.onFormSubmit('buildings')
  }

  onFormSubmit = async (term: any) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[ 0 ]
    })
  };

  onVideoSelect = (video: any) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div
        className='ui container'
        style={{ marginTop: '15px' }}>
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo}/>}
            </div>
            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
