import React, { Component } from 'react';

export default class AppBottom extends Component {
  render() {
    return (
      <form id="bottomForm" className="bottom-panel d-flex">
        <input
          type="text"
          name="idText"
          className="form-control new-todo-label"
          placeholder="What needs to be done?"
        />
        <button
          type="submit"
          id="addBtm"
          className="btn btn-outline-secondary"
                // eslint-disable-next-line no-sequences
          onClick={(e) => {
            e.preventDefault();
            this.props.addItem();
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
