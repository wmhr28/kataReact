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
      let resp = instance.decrypt('POHAOB');
      expect(resp).toEqual('BATMAN');
    });
    it('entrada VCZO devuelve HOLA', () => {
      let resp = instance.decrypt('VCZO');
      expect(resp).toEqual('HOLA');
    });
    it('entrada PCAPO devuelve HOLA', () => {
      let resp = instance.decrypt('PCAPO');
      expect(resp).toEqual('BOMBA');
    });
  });
});
