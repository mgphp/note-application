import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Note extends React.Component {
  constructor(props) {
    super(props);

    const placeholder = document.createElement("li");
    placeholder.className = "placeholder";


    this.onClickRemove = this.onClickRemove.bind(this);
    this.moveEndHandler = this.moveEndHandler.bind(this);
    this.moveStartHandler = this.moveStartHandler.bind(this);

    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);

    console.log(this.props.note);
  }

  onClickRemove() {
    let name = this.props.birthday.name;
    this.props.removeNote(name);
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
  }

  dragEnd(e) {
    this.dragged.style.display = "";
    var IshasNode = false

    Array.prototype.forEach.call(this.dragged.parentNode.childNodes, function (node) {
      if (node.className == "placeholder")
        IshasNode = true;

    });
    if (!IshasNode)
      return;
    this.dragged.parentNode.removeChild(this.placeholder);
    let data = this.props.items;
    let from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if (from < to) to--;
    if (this.nodePlacement == "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  }

  sortOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";

    if (e.target.className == "placeholder") return;
    this.over = e.target;

    let relY = e.clientY - this.over.offsetTop;
    let height = this.over.offsetHeight / 2;
    let parent = e.target.parentNode;

    if (relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(this.placeholder, e.target.nextElementSibling);
    }
    else if (relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(this.placeholder, e.target);
    }
  }

  moveEndHandler(e) {
    this.dragEnd(e);
  }

  moveStartHandler(e) {
    this.dragStart(e);
  }

  render() {
    let tags = this.props.note.tags.map(function(name, index){
      return <span key={ index }>{name.text}</span>;
    })
    return (
      <li className="note"
          data-id={this.props.value}
          key={this.props.value}
          draggable="true"
          onDragEnd={this.moveEndHandler}
          onDragStart={this.moveStartHandler}>
        <div className="note__number">{this.props.value + 1}</div>
        <div className="node__content">

          <div className="note__body">
            { this.props.note.body.length > 140 ?
              this.props.note.body.substring(0, 140) + ' ...' :
              this.props.note.body }
          </div>
          <div className="note__tags">
            {
              tags
            }
          </div>
          <div className="note__footer">
            <Link to={`notes/${this.props.note.id}`} className="card-footer-item">Edit</Link>
            <a onClick={this.handleRemove} className="card-footer-item">Delete</a>
          </div>
        </div>
      </li>
    );
  }
}

//console.log(React.PropTypes);

Note.propTypes = {
  // body: React.PropTypes.string.isRequired,
  // dateCreated: React.PropTypes.string.isRequired,
  // dispatch: React.PropTypes.func.isRequired,
  // id: React.PropTypes.string.isRequired,
};

Note = connect()(Note);

export default Note;

//export default Note;
