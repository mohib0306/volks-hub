import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default class NavBar extends Component {
  render() {
    const { children } = this.props;
    return (
      <Segment
        style={{
          background: 'white',
          borderRadius: '0px',
          borderStyle: 'none',
          boxShadow: 'none',
          margin: '20px',
        }}
        text
      >
        <Header
          style={{
            fontSize: '45px',
            fontWeight: 'normal',
            color: 'red',
          }}
          as="h1"
          inverted
        >
          {children}
        </Header>
      </Segment>
    );
  }
}
