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
    fit('entrada POHAOB devuelve BATMAN', () => {
      let resp = instance.decrypt(14,'POHAOB');
      expect(resp).toEqual('BATMAN');
    });
    fit('entrada VCZO devuelve HOLA', () => {
      let resp = instance.decrypt(14,'VCZO');
      expect(resp).toEqual('HOLA');
    });
    fit('entrada PCAPO devuelve HOLA', () => {
      let resp = instance.decrypt(14,'PCAPO');
      expect(resp).toEqual('BOMBA');
    });
    fit('entrada 1,FTUBT 9,LNALJ devuelve ESTAS CERCA', () => {
      let resp = instance.decrypt(1,'FTUBT');
      expect(resp).toEqual('ESTAS');
      resp = instance.decrypt(9,'LNALJ');
      expect(resp).toEqual('CERCA');
    });
  });
});
