import React from 'react';

class NodeCreationBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div className="test">
       <form onSubmit={this.handleSubmit}>
         <div className="form-group">
           <textarea
             id="markdown-content"
             onChange={this.handleChange}
             defaultValue={this.state.value}
           />
           <button>Add Note</button>
         </div>
       </form>
      </div>
    )
  }
}

export default NodeCreationBox;