import React from 'react';
import NoteNew from './NoteNew';
import NoteList from './NoteList';

import {CSVLink, CSVDownload} from 'react-csv';

class NoteListBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    console.log(this.props);
  }


  render() {
    return (
      <div>
        <div className="block box--white">
          <div className="block__left">
            <CSVLink
              filename={"notes.csv"}
              className="btn btn-primary"
              target="_blank"
              data={this.props.notes}>Download as CSV</CSVLink>
          </div>
          <div className="block__right">
            <NoteNew />
          </div>
        </div>


        <NoteList notes={this.props.notes}/>
      </div>
    )
  }
}

export default NoteListBox;
