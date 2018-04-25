import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import 'react-select/dist/react-select.css';

import { WithContext as ReactTags } from 'react-tag-input';

class NoteDetails extends React.Component {

  constructor(props) {
    super(props);
    let path = window.location.pathname.split('/');
    let selected = this.props.notes.filter((note) => note.id === parseInt(path[2]));

    this.state = {
      note: this.props.notes.filter((note) => note.id === parseInt(path[2])),
      items: [],
      posted: false,
      error: '',
      tags: selected[0].tags || []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleSubmit(e) {
    if (this._textArea.value !== "") {

      console.log(this._textArea.value);

      this.setState((prevState) => {
        let newState = prevState.note[0];
        newState.body = this._textArea.value;
        newState.tags = this.state.tags;

        return {
          posted: true,
          items: newState
        };
      });

      this.state.posted = true;
    }
    e.preventDefault();
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    const { tags } = this.state;
    this.setState({tags: [...tags, ...[tag]]});
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleChange(e) {
    console.log(e);
  }

  render() {
    const { tags, suggestions } = this.state;;

    return (
      <section className="box-section">
        <form className="new-note" onSubmit={this.handleSubmit}>
           <textarea
             className="note__textarea"
             ref={(a) => this._textArea = a}
             defaultValue={this.state.note[0].body}
           />
          <div className="note__group">
            <ReactTags
              tags={tags}
              inline
              suggestions={suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}/>
            <button className="btn btn-primary">Add Note</button>
          </div>
        </form>
        { this.state.posted && <Redirect to="/"/> }
      </section>
    )
  }
}
NoteDetails.propTypes = {
  //dispatch: React.PropTypes.func.isRequired,
};

NoteDetails = connect()(NoteDetails);

export default NoteDetails;
