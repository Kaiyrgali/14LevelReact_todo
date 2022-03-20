import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter';

export default class SearchPanel extends Component {
  render() {
    const searchText = 'type to search';

    return (
      <div className="search-panel">
        <input
          type="text"
          className="form-control search-input"
          placeholder={searchText}
          onInput={(e) => {
            this.props.filterBySearch(e);
          }}
        />
        <ItemStatusFilter
          filter={this.props.filter}
          onFilterChange={this.props.onFilterChange}
        />
      </div>
    );
  }
}
