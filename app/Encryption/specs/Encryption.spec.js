import React from 'react';
import { shallow } from 'enzyme'; 

import Encryption from '../Encryption';


describe('Encryption', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Encryption />);
    instance = component.instance();
  });
  describe('decrypt', () => {
    it('entrada POHAOB devuelve BATMAN', () => {
      let resp = instance.decrypt(14,'POHAOB');
      expect(resp).toEqual('BATMAN');
    });
    it('entrada VCZO devuelve HOLA', () => {
      let resp = instance.decrypt(14,'VCZO');
      expect(resp).toEqual('HOLA');
    });
    it('entrada PCAPO devuelve HOLA', () => {
      let resp = instance.decrypt(14,'PCAPO');
      expect(resp).toEqual('BOMBA');
    });
    it('entrada 1,FTUBT 9,LNALJ devuelve ESTAS CERCA', () => {
      let resp = instance.decrypt(1,'FTUBT');
      expect(resp).toEqual('ESTAS');
      resp = instance.decrypt(9,'LNALJ');
      expect(resp).toEqual('CERCA');
    });
    it('entrada 20,XY 9,CNAVRWJA 5,QF 18,CSLS devuelve DE TERMINAR LA KATA', () => {
      let resp = instance.decrypt(20,'XY');
      expect(resp).toEqual('DE');
      resp = instance.decrypt(9,'CNAVRWJA');
      expect(resp).toEqual('TERMINAR');
      resp = instance.decrypt(5,'QF');
      expect(resp).toEqual('LA');
      resp = instance.decrypt(18,'CSLS');
      expect(resp).toEqual('KATA');
    });
  });
});
