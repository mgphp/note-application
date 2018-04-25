import React from 'react';
import NoteCreationBox from '../NoteCreation';
import { mount,shallow } from 'enzyme';

let props;
const component = mount(<NoteCreationBox {...props} />);
const mockFn = jest.fn();

describe(<NoteCreationBox />, ()=> {

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

  it('It should have a form element', () => {
    expect(component.find('form').length).toBe(1);
  });

  it('input element should be of type `text`', () => {
    expect(component.find('form').childAt(0).props().type).toBe('input');
  });

  it('should have a button value', () => {
    const tree = shallow(
      <Button name='button test' />
    );
    expect(typeof(tree.find('.button').node.props.value)).toBe('string');
    expect(tree.find('.button').node.props.value).toEqual('button test');
  });

  it('should call mock function when button is clicked', () => {
    const tree = shallow(
      <Button name='button test' handleClick={mockFn} />
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

});
