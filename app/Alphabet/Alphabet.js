import React, { Component } from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = { pared: this.generarPared() };
  }

  generateAlphArray(start, end) {
    var resp = [];
    for (var i = start; i <= end; i++) {
      resp.push(String.fromCharCode(i))

    }
    return resp;
  }
  moverParteInicioAFin(_array, index) {
    var p1 = _array.slice(0, index);
    var p2 = _array.slice(index);
    return p2.concat(p1);
  }
  generarPared() {

    var resp = [];
    var testAlph = this.generateAlphArray(65, 90);

    for (var i = 1; i <= 25; i++) {
      resp.push(this.moverParteInicioAFin(testAlph, i));
    }

    return resp;
  }
  getPositionAlph14(element) {
    var alph = this.generateAlphArray(65, 90);
    var alph14 = this.moverParteInicioAFin(alph, 14);
    var id = 0;
    alph14.map((item, index) => {
      if (item == element) {
        id = index;
      }
    });
    return id;
  }
  getLetraAlph(posicion) {
    var alph = this.generateAlphArray(65, 90); 
    var letra = '';
    alph.map((item, index) => {
      if (posicion == index) {
        letra = item;
      }
    });
    return letra;
  }
  
  render() {
    return (
      <span className="">

        {
          this.state.pared.map((linea, index) => {
            return <div class="linea"><span>{index + 1}</span> : <span>{linea}</span></div>
          })
        }

      </span>
    );
  }
}

export default Alphabet;
