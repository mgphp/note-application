import React from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';



class NoteCreationBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    if (this._textArea.value !== "") {
      let newItem = {
        note: this._textArea.value,
        key: Date.now(),
        category: ''
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._textArea.value = "";
      this.props.addNote(newItem);
    }

    e.preventDefault();

  }

  handleChange(e) {
    console.log(e);
  }

  render() {
    const {selectedOption} = this.state;
    const value = selectedOption && selectedOption.value;

    return (
       <form className="add-note" onSubmit={this.handleSubmit}>
         <div className="add-note__group">
           <textarea
             className="add-note__textarea"
             ref={(a) => this._textArea = a}
             defaultValue={this.state.value}
           />
           <Select
             className="add-note__select"
             name="form-field-name"
             value={value}
             onChange={this.handleChange}
             options={[
               {value: 'mr', label: 'Mr'},
               {value: 'mrs', label: 'Mrs'},
               {value: 'miss', label: 'Miss'},
             ]}
           />
           <button className="add-note__button">Add Note</button>
         </div>
       </form>
    )
  }
}

export default NoteCreationBox;