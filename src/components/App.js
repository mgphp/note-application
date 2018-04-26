import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NoteCreation from './NoteCreation';
import NoteDetails from './NoteDetails';
import NoteListBox from './NoteListBox';

import data from '../data/notes';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: data
    }

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  removeNote(note) {
    var arr = this.state.notes;
    var index = arr.indexOf(note.note);
    arr.splice(index, 1);
    this.setState({notes: arr });
  }

  render() {

    return (
      <div className="main">
        <div className="top__section">
          <h1>Note Taking App</h1>
        </div>
          <div className="container">
            <Router>
              <Switch>
                <Route
                  exact path="/"
                  render={props => <NoteListBox addNote={this.addNote} removeNote={this.removeNote} notes={this.state.notes}  />}
                />
                <Route exact path="/notes/new"
                       render={props => <NoteCreation addNote={this.addNote} notes={this.state.notes} {...props} />}
                />
                <Route exact path="/notes/:id"
                       render={props => <NoteDetails addNote={this.addNote} notes={this.state.notes} {...props} />}
                />
                <Route render={
                  ({location}) => (
                    <strong> Nothing matched {location.pathname} :( </strong>
                  )}
                />
              </Switch>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
