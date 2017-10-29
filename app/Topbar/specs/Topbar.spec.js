import React from 'react';
import { shallow } from 'enzyme';
import Topbar from '../Topbar';
import Link from 'react-router-dom/Link';

describe('Topbar', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Topbar />);
    instance = component.instance();
  });

  it('should find li and Link in render', () => {
    expect(component.find('li').length).toBe(3);

    expect(component.find(Link).length).toBe(3);
    expect(component.find(Link).first().props().to).toBe('/');
    expect(component.find(Link).at(1).props().to).toBe('/alphabet');
    expect(component.find(Link).last().props().to).toBe('/encryption');
  });

  it('should instance state with correct params', () => {
    expect(instance.state).toEqual({
      options: [
        { to: "/", text: "Main" },
        { to: "/alphabet", text: "Alphabet" },
        { to: "/encryption", text: "Encryption" }
      ]
    });
  });

});
