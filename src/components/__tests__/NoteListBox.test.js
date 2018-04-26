import React from 'react';
import NoteListBox from '../NoteListBox';
import { mount } from 'enzyme';

describe('<NoteListBox />', () => {

  const component = mount(<NoteListBox  />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

})

