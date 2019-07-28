import React, { Component } from 'react';
import { throwStatement, thisExpression } from '@babel/types';

class Counter extends Component {
  state = {
    count: 1,
    tags: ['tag1', 'tag2', 'tag3']
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  createTag() {
    return this.state.tags.length === 0 && 'Please create a new tag!';
  }

  render() {
    return (
      <div>
        {this.createTag()}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
