import React, { Component } from 'react';
import Alphabet from '../Alphabet/Alphabet';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  decrypt(text) { 
    var resp = '';
    var objAlph = new Alphabet();
    for (var i = 0; i < text.length; i++) {
      var position = objAlph.getPositionAlph14(text.charAt(i));
      resp += objAlph.getLetraAlph(position);
    }
    return resp;
  }
  render() {
    return (
      <div className="container">
        Encryption page
      </div>
    );
  }
}

export default Encryption;
