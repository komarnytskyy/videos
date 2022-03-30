import React from 'react';

class SearchBar extends React.Component<any, any> {
  state = { term: '' }
  onInputChange = (event: any) => {
    this.setState({ term: event.target.value })
  }
  onFormSubmit = (event: any) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className="field">
            <label htmlFor="search-input">Video Search</label>
            <input
              id='search-input'
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
