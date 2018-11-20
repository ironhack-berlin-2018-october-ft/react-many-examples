import countries from './countries'

import React, { Component } from 'react';

class Example2 extends Component {
  render() {
    return (
      <div className="Example2">
        <h1>Example 2</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Flag</th>
            </tr>
          </thead>
          <tbody>
            {countries
            .sort((a,b) => b.population-a.population)
            .map(c => (
              // the name is unique
              <tr key={c.name}>
                <td>{c.name}</td>
                <td>{c.capital}</td>
                <td>{c.population}</td>
                <td><img src={c.flag} style={{height: 30}} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Example2;
