import React, { Component } from 'react';
import NoteCreactionBox from './NoteCreationBox';
import NoteList from './NoteList';
import '../App.css';

const notes = [
  {
    "note": "John Doe",
  },
  {
    "note": "Katie Smith",
  },
  {
    "note": "Anna Jackson",
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: notes
    }
  }

  render() {
    return (
      <div className="container">
        <section className="container__left">
          <NoteList notes={this.state.notes} />
        </section>
        <section className="container__right">
          <NoteCreactionBox />
        </section>
      </div>

    );
  }
}

export default App;
