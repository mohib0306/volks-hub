import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import './style.scss';

export default class Search extends Component {
  render() {
    return (
      <form>
        <Input action="Search" size="huge" placeholder="Search..." />
      </form>
    );
  }
}
