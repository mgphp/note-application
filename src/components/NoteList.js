import React from 'react';
import Note from './Note';

class NoteList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes.map((note, index) => {
      return (
        <Note
          note={note}
          key={index}
          value={index}
          addNote={this.props.addNote}
          removeNote={this.props.removeNote}
          onDragStart={this.props.moveStart}/>
      );
    })

    return (
      <div className="container__left box--white">
        <h2>Note List</h2>
          <ul className="notes">
            {notes}
          </ul>
      </div>
    )
  }
}

export default NoteList;