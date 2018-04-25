import React from 'react';
import { Link } from 'react-router-dom';

const NewNote = () => {
  return (
    <Link to={`notes/new`} className="btn btn-primary">Add new Note</Link>
  );
}

export default NewNote;