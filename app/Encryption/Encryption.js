import React, { Component } from 'react';
import Alphabet from '../Alphabet/Alphabet';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = { resp: '' };
    this.handler = this.handler.bind(this);
  }
  decrypt(text) {
    let resp = '';
    let objAlph = new Alphabet();

    [].map.call(text, (char) => {
      let position = objAlph.getPositionAlph14(char);
      resp += objAlph.getLetraAlph(position);
    });

    return resp;
  }
  handler(e) {
    e.target.value = e.target.value.toUpperCase();
    this.setState({ resp: this.decrypt(e.target.value) });
  }
  render() {
    return (
      <div className="container">
        <div>
          Encrypted text: <input type="text"
            onChange={this.handler} />
          <h4>Answer: {this.state.resp}</h4>
        </div>

      </div>
    );
  }
}

export default Encryption;
