import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onInputChange = e => {
    this.setState({term: e.target.value});
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="search-video"
            placeholder="検索"
            onChange={this.onInputChange}
          />
          <button className="ui button">
            <i className="search icon"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
