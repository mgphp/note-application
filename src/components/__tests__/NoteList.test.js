import React from 'react';
import NoteList from '../NoteList';
import { mount } from 'enzyme';
import Data from '../../data/notes'

describe('<NoteList />', () => {

  const component = mount(<NoteList notes={Data} />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

  it('It should render a box title', () => {
    const title = component.find("h2");
    expect(title.text()).toBe('Note List');
  });

  it('It should render a list', () => {
    const list = component.find("ul");
    expect(list).toHaveLength(1);
  });

})