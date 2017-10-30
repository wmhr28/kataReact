import React, { Component } from 'react';
import Alphabet from '../Alphabet/Alphabet';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = { resp: '', inputLine: 0, inputText: '' };
    this.handlerLine = this.handlerLine.bind(this);
    this.handlerText = this.handlerText.bind(this);
  }
  decrypt(indexLine, text) {
    let objAlph = new Alphabet();
    return [].map.call(text, (char) => {
      let position = objAlph.getPositionAlph(char, indexLine);
      return objAlph.getLetraAlphCorrecto(position);
    }).join('');
  }
  calculate(inputLine, inputText) {
    this.setState({ resp: this.decrypt(inputLine, inputText) });
  }
  handlerLine(e) {
   let _inputLine=e.target.value;
    this.setState({ inputLine: _inputLine });
    this.calculate(_inputLine,this.state.inputText);
  }
  handlerText(e) {
    let _inputText=e.target.value.toUpperCase();
    this.setState({ inputText: _inputText });
    this.calculate(this.state.inputLine,_inputText);
  }
  render() {
    return (
      <div className="container">
        <div>
          Line: <input type="text"
            onChange={this.handlerLine} />
          Encrypted text: <input type="text"
            onChange={this.handlerText} />
          <h4>Answer: {this.state.resp}</h4>
        </div>

      </div>
    );
  }
}

export default Encryption;
