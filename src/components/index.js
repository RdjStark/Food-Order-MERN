import React, { Component } from 'react';

export default class HomePage extends Component {

  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Order food from{" "}
              <span style={{ fontFamily: "monospace" }}>Tomato</span>
            </h4>
            <br />
          </div>
        </div>
      </div>
    )
  }
}
