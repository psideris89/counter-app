import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, title: 'Task 1' },
      { id: 2, value: 0, title: 'Task 2' },
      { id: 3, value: 0, title: 'Task 3' },
      { id: 4, value: 0, title: 'Task 4' }
    ]
  };

  handleIncrement = counter => {
    console.log('Event Handler Called Increment', counter);
    // Create copy cause we shouldn't manupulate directly the counters!
    const countersCopy = [...this.state.counters];
    // Find index of element that needs to be updated
    const index = countersCopy.indexOf(counter);
    // Create copy of the element passed in the handler to update it!
    countersCopy[index] = { ...counter };
    countersCopy[index].value++;
    // Set state based on the updated copy
    this.setState({ counters: countersCopy });
  };

  handleReset = () => {
    console.log('Event Handler Called Reset');
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log('Event Handler Called Delete', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
