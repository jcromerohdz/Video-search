import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';


class App extends React.Component {
  

  onTermSubmit = async (term) => {
    const KEY  = 'AIzaSyDnoVIpKAbnjgKcU7-f0jQdqMrl13tz7GM';
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });

    console.log(term);
    
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;