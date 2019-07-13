import React, { Component } from "react";
import Sogefelt from "./Sogefelt";
import youtube from "../API/youtube";
import Videoliste from "./Videoliste";

class App extends Component {
  state = { videoliste: [] };

  onSogetekst = async sogetekst => {
    const Svar = await youtube.get("/search", { params: { q: sogetekst } });

    this.setState({ videoliste: Svar.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <Sogefelt onFormSubmit={this.onSogetekst} />
        <Videoliste liste={this.state.videoliste} />
      </div>
    );
  }
}

export default App;

//  =>
//  <></>
//  <div></div>
//  <span>React App</span>
