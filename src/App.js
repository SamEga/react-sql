import React, { Component } from 'react';

import Item from './item';

class App extends Component {
  state = {
    cities: [],
    load: false,
    isOpen: []
  };

  componentDidMount() {
    fetch('http://localhost:3000/city')
      .then(res => res.json())
      .then(cities => {
        this.setState({ cities, load: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  searchId = id => {
    const { isOpen } = this.state;

    const index = isOpen.find(el => el.id === id); // find el in array IDs
    return index ? index : false; // return index if el is found
  };

  isOpen = id => {
    const { isOpen } = this.state;

    const index = this.searchId(id);
    index ? isOpen.splice(index, 1) : isOpen.push({ id: id }); //delete el from array if is found or push in arr
    this.setState({ isOpen });
  };

  render() {
    const { cities } = this.state.cities;
    let result;
    if (this.state.load) {
      result = cities.map(el => {
        return (
          <li
            key={el.ID}
            onClick={() => {
              this.isOpen(el.ID);
            }}
          >
            {this.searchId(el.ID) ? <Item el={el} /> : <p>{el.Name}</p>}
          </li>
        );
      });
    }

    return (
      <div>
        <h1>Cities</h1>
        <ul>{this.state.load ? result : <h1>Loading</h1>}</ul>
      </div>
    );
  }
}

export default App;
