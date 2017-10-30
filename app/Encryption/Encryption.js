import React, { Component } from 'react';
import Alphabet from '../Alphabet/Alphabet';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = { resp: '' };
    this.handler = this.handler.bind(this);
  }
  decrypt(indexLine, text) { 
    let objAlph = new Alphabet();
    return [].map.call(text, (char) => {
      let position = objAlph.getPositionAlph(char, indexLine);
      return objAlph.getLetraAlphCorrecto(position);
    }).join(''); 
  }
  handler(e) {
    let val = e.target.value.toUpperCase();
    e.target.value = val;
    this.setState({ resp: this.decrypt(14, val) });
  }
  render() {
    return (
      <div className="container">
        <div>
          Encrypted text (14): <input type="text"
            onChange={this.handler} />
          <h4>Answer: {this.state.resp}</h4>
        </div>

      </div>
    );
  }
}

export default Encryption;
