import React from 'react';
import reactDOM from 'react-dom';

class EntryComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    debugger;
    return(
      <div>Hello world from react 16</div>
    );
  }
}

reactDOM.render( <EntryComponent />, document.getElementById('react-container') );
