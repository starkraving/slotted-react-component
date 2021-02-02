import React from 'react';
import SlottedComponent from './SlottedComponent';

class App extends SlottedComponent {
  render() {
    return (
      <div className="App">
        <fieldset>
          <legend>Foo block</legend>
          <h4>Children:</h4>
          <this.Slot name='foo'>No Children here</this.Slot>
        </fieldset>
        <fieldset>
          <legend>Bar block</legend>
          <h4>Children:</h4>
          <this.Slot name='bar'>No Children here</this.Slot>
        </fieldset>
        <fieldset>
          <legend>Baz block</legend>
          <h4>Children:</h4>
          <this.Slot name='baz'>No Children here</this.Slot>
        </fieldset>
        <h4>Unspecified Children:</h4>
        <this.Slot></this.Slot>
      </div>
    );
  }
}

export default App;
