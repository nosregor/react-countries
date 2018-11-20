import React, { Component } from 'react';
import countries from './db.json'

class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }


  render() {
    console.log(countries)

    return (
      <div className="Country">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Flag</th>
            </tr>
          </thead>
          <tbody>
            {countries.sort((a, b) => b.population - a.population).map(c => (
              // the name is unique
              <tr key={c.name}>
                <td>{c.name}</td>
                <td>{c.capital}</td>
                {/* <td><img scr={c.flag} style={{ height: 30 }} /></td> */}
                <td><img src={c.flag} style={{ height: 30 }} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    )

  }
}

export default Countries;

