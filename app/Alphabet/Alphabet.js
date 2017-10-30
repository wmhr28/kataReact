import React, { Component } from 'react';


export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = { pared: this.generarPared() };
  }

  generateAlphArray(start, end) {
    let resp = [];
    for (let i = start; i <= end; i++) {
      resp.push(String.fromCharCode(i));
    }
    return resp;
  }
  moverParteInicioAFin(_array, index) {
    let p1 = _array.slice(0, index);
    let p2 = _array.slice(index);
    return p2.concat(p1);
  }
  generarPared() {
    let resp = [];
    let testAlph = this.generateAlphArray(65, 90);
    for (let i = 1; i <= 25; i++) {
      resp.push(this.moverParteInicioAFin(testAlph, i));
    }
    return resp;
  }

  /*Start @Deprecated*/
  getPositionAlph14(element) {
    let alph = this.generateAlphArray(65, 90);
    let alph14 = this.moverParteInicioAFin(alph, 14); 
    return alph14.indexOf(element);
  }
  /*End @Deprecated*/

  getPositionAlph(element, indexLine) {
    let alphComp = this.generateAlphArray(65, 90);
    let alph = this.moverParteInicioAFin(alphComp, indexLine);
    return alph.indexOf(element); 
  }
  getLetraAlphCorrecto(posicion) {
    let alph = this.generateAlphArray(65, 90);
    return alph[posicion]; 
  }

  render() {
    return (
      <span className="container">
        {
          this.state.pared.map((linea, index) => {
            return <div key={index} className="linea"><span>{index + 1}</span> : <span>{linea}</span></div>
          })
        }
      </span>
    );
  }
}

export default Alphabet;
