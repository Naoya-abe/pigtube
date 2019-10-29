import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';

class App extends React.Component {
  state = {videos: []};

  onTermSubmit = async term => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      this.setState({videos: response.data.items});
    } catch {
      window.alert('動画の取得に失敗しました。');
    }
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
