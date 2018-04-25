import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NoteCreation from './NoteCreation';
import NoteDetails from './NoteDetails';
import NoteListBox from './NoteListBox';
import NoteNew from './NoteNew';

import data from '../data/notes';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: data
    }

    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  render() {
    return (
      <div>
        <div className="top__section">
          <h1>Note Taking App</h1>
        </div>
        <div className="main">
          <div className="container">

            <Router>

              <Switch>

                <Route
                  exact path="/"
                  render={props => <NoteListBox addNote={this.addNote} notes={this.state.notes} {...props} />}
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
      </div>
    );
  }
}

export default App;
