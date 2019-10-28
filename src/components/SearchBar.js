import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="search-video"
            placeholder="検索"
            onChange={e => this.setState({term: e.target.value})}
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
