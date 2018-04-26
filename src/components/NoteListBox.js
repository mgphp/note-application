import React from 'react';
import NoteNew from './NoteNew';
import NoteList from './NoteList';

import {CSVLink, CSVDownload} from 'react-csv';

class NoteListBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <div className="block box--white">
          <div className="block__left">
            <CSVLink
              filename={"notes.csv"}
              className="btn btn--primary btn--lge"
              target="_blank"
              data={this.props.notes}>Download as CSV</CSVLink>
          </div>
          <div className="block__right">
            <NoteNew />
          </div>
        </div>


        <NoteList removeNote={this.props.removeNote} notes={this.props.notes}/>
      </div>
    )
  }
}

export default NoteListBox;
