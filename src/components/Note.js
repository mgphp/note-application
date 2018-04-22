import React from 'react';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickRemove() {
    //let name = this.props.birthday.name;
    //this.props.removeBirthday(name);
  }

  render () {
    return(
      <li className="note__item">
        <div className="birthdays__item--group">
          <label>{this.props.note.note}</label>
        </div>
        <button type="button" className="close" onClick={this.onClickRemove}>&times;</button>
      </li>
    );
  }
}

export default Note;
