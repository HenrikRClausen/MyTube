import React, { Component } from "react";

class Sogefelt extends Component {
  state = { sogetekst: "" };

  onInputChange = event => {
    this.setState({ sogetekst: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.sogetekst);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="Bar">Indtast søgetekst:</label>
            <input
              id="Bar"
              type="text"
              value={this.state.sogetekst}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Sogefelt;

//  =>
//  <></>
//  <div></div>
//  <div className=""></div>
//  <span>React App</span>
