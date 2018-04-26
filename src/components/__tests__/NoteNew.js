import React from 'react';
import NoteNew from '../NoteNew';
import { mount,shallow } from 'enzyme';

describe('<NoteNew />', () => {

  const component = mount(<Note />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

})

