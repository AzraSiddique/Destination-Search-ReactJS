import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchInputCase = searchInput.toLowerCase()

    const filteredList = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInputCase),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>

        <div className="search-input-box">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeInput}
            className="search-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>
        <ul className="destinations-list">
          {filteredList.map(eachPlace => (
            <DestinationItem placeDetails={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
