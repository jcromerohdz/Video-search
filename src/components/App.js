import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


class App extends React.Component {
  
  state = { videos: [] };

  onTermSubmit = async (term) => {
    //const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";
    const KEY = "AIzaSyA9tHarzPMsBCdwtsgrgwFVxhCYZC2HKIc";
    // const KEY = "AIzaSyB50IXyJcf1a5TEGNjaf1-s06qjLYhKkSA";
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });

    this.setState({ videos: response.data.items });
    
    
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;