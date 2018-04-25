import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import 'react-select/dist/react-select.css';
import {WithContext as ReactTags} from 'react-tag-input';


class NoteCreation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      posted: false,
      error: '',
      tags: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleSubmit(e) {
    if (this._textArea.value !== "") {
      let newItem = {
        body: this._textArea.value,
        id: Date.now(),
        category: '',
        tags: this.state.tags
      };

      this.setState((prevState) => {
        return {
          posted: true,
          items: prevState.items.concat(newItem)
        };
      });
      this._textArea.value = "";
      this.props.addNote(newItem);
    }
    e.preventDefault();
  }

  handleDelete(i) {
    const {tags} = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    const {tags} = this.state
    this.setState({tags: [...tags, ...[tag]]});
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({tags: newTags});
  }

  handleChange(e) {
    console.log(e);
  }

  render() {
    const {tags, suggestions} = this.state;

    return (
      <section className="box-section">
        <form className="new-note" onSubmit={this.handleSubmit}>
           <textarea
             className="note__textarea"
             ref={(a) => this._textArea = a}
             defaultValue={this.state.value}
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

NoteCreation.propTypes = {
  //dispatch: React.PropTypes.func.isRequired,
};

NoteCreation = connect()(NoteCreation);

export default NoteCreation;