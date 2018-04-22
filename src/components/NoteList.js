import React from 'react';
import Note from './Note';

class NoteList extends React.Component {

  render () {
    const notes = this.props.notes.map((note, index) => {
      return (
        <Note note={note} key={index} removeNote={this.props.removeNote} />
      );
    })

    return (

        <div className="notes__list">
          <div className="box__title"></div>
          <ul>
            {notes}
          </ul>
        </div>

    )
  }
}

export default NoteList;