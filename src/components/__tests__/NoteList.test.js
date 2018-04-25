import React from 'react';
import ListBirthday from '../listBirthday';
import { shallow, mount } from 'enzyme';
import Data from '../../data/birthdays'

describe('<ListBirthday />', () => {

  const component = mount(<ListBirthday birthdays={Data} />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

  it('It should render a box title', () => {
    const title = component.find(".box__title");
    expect(title.text()).toBe('All Birthdays');
  });

  it('It should render a list', () => {
    const list = component.find("ul");
    expect(list).toHaveLength(1);
  });

})