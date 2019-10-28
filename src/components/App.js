import React from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';

class App extends React.Component {
  state = {video: ''};

  onTermSubmit = async term => {
    try {
      await youtube.get('/search', {
        params: {
          q: term,
        },
      });
    } catch {
      window.alert('失敗しました。');
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
