import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

class LargeSection extends Component {
  render() {
    const { children } = this.props;
    return (
      <Segment
        style={{
          fontSize: '2em',
          fontWeight: 'normal',
          background: 'black',
          borderRadius: '0px',
          border: 'none',
        }}
        text
      >
        <Header as="h2" inverted>
          {children}
        </Header>
      </Segment>
    );
  }
}

export default LargeSection;
