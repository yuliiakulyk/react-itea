import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './guests';
import ListItem from './list-item';
import SearchInput from './searchInput';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      guests: data
    }

    this.clearGuests = this.clearGuests.bind(this);
  }

  clearGuests(e) {
    this.setState({
      guests: []
    })
  }

  filterGuests = (query) => {
    let filteredGuests = data.filter((guest) =>
      guest.name.toString().toLowerCase().includes(query.target.value.toLowerCase()));
    this.setState({ guests: filteredGuests });
  }

  render() {
    const { guests } = this.state;
    const { clearGuests } = this;
    const noGuestsFound = "No search results";
    const header = "Список гостей";

    return (
      <div className="App">
        <div className="container">
          <h1 className="header page-header">{header}</h1>
          <SearchInput filter={this.filterGuests} />
          <div className="list-container">
            {
              guests.length > 0 ?
                guests.map(guest => <ListItem key={guest.index} guest={guest} />)
                : <div>{noGuestsFound}</div>
            }
          </div>
          <button className="btn btn-primary" onClick={clearGuests}>Clear guests</button>
        </div>
      </div>
    );
  }
}

export default App;
