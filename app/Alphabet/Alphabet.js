import React, { Component } from 'react';


export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = { pared: this.generarPared() };
  }

  generateAlphArray(start, end) {
    let resp = [];
    for (let i = start; i <= end; i++) {
      resp.push(String.fromCharCode(i))

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
  getPositionAlph14(element) {
    let alph = this.generateAlphArray(65, 90);
    let alph14 = this.moverParteInicioAFin(alph, 14);
    let id = 0;
    alph14.map((item, index) => {
      if (item == element) {
        id = index;
      }
    });
    return id;
  }
  getLetraAlph(posicion) {
    let alph = this.generateAlphArray(65, 90);
    let letra = '';
    alph.map((item, index) => {
      if (posicion == index) {
        letra = item;
      }
    });
    return letra;
  }

  render() {
    return (
      <span className="container">

        {
          this.state.pared.map((linea, index) => {
            return <div key={index} className="linea"><span key={'num' + index}>{index + 1}</span> : <span key={'text' + index}>{linea}</span></div>
          })
        }

      </span>
    );
  }
}

export default Alphabet;
