import React from 'react';
import { shallow } from 'enzyme';
import Alphabet from '../Alphabet';

describe('Alphabet', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Alphabet />);
    instance = component.instance();
  });

  describe('render', () => {
    it('debe tener 25 div', () => {
      expect(component.find('div').length).toBe(25);
    });
  });

  describe('generateAlphArray', () => {
    it('devuelve array de 2 elementos A y B', () => {
      expect(instance.generateAlphArray(65, 66)).toEqual(['A', 'B']);
    });
    it('devuelve el alfabeto completo A-Z, sólo comprobamos el tamaño', () => {
      expect(instance.generateAlphArray(65, 90).length).toEqual(26);
    });
    it('comprobar todo el alfabeto', () => {
      var alphString = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
      var resp = alphString.split(',');
      expect(instance.generateAlphArray(65, 90)).toEqual(resp);
    });
  });

  describe('moverParteInicioAFin', () => {
    it('generamos [A,B,C,D], y como parametro 1 debe devolver [B,C,D,A]', () => {
      var testAlph = instance.generateAlphArray(65, 68);
      expect(testAlph).toEqual(['A', 'B', 'C', 'D']);
      expect(instance.moverParteInicioAFin(testAlph, 1)).toEqual(['B', 'C', 'D', 'A']);
    });
    it('generamos [A,B,C,D,...,Z], y como parametro 1 debe devolver [B,C,D,...,Z,A]', () => {
      var testAlph = instance.generateAlphArray(65, 90);
      var resp = instance.moverParteInicioAFin(testAlph, 1);

      var lastElement = resp[resp.length - 1];
      var penultimoElemento = resp[resp.length - 2];
      var firstElement = resp[0];

      expect(lastElement).toEqual('A');
      expect(penultimoElemento).toEqual('Z');
      expect(firstElement).toEqual('B');
    });
  });

  describe('generarPared', () => {
    it('debe tener 25 objetos con lineas de abecedario', () => {
      var pared = instance.generarPared();
      expect(pared.length).toEqual(25);
    });
  });


  describe('getPositionAlph14', () => {
    it('obtener la posicion de O', () => {
      var element = instance.getPositionAlph14('O');
      expect(element).toEqual(0);
    });
    it('obtener la posicion de Q', () => {
      var element = instance.getPositionAlph14('Q');
      expect(element).toEqual(2);
    });
  });

  describe('getLetraAlph', () => {
    it('obtener la letra de la posicion 0', () => {
      var element = instance.getLetraAlph(0);
      expect(element).toEqual('A');
    }); 
    it('obtener la letra de la posicion2', () => {
      var element = instance.getLetraAlph(2);
      expect(element).toEqual('C');
    }); 
    
  });


});
