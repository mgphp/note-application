import React from 'react';

import NoteList from './NoteList';

class NoteListBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <NoteList />
    )
  }
}

export default NoteListBox;
