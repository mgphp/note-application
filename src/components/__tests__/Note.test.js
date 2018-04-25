import React from 'react';
import Note from '../Note';
import { mount,shallow } from 'enzyme';

describe('<Note />', () => {

  const component = mount(<Note />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

})
