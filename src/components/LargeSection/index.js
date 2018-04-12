import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './style.scss';
class LargeSection extends Component {
  render() {
    const { background, height, children } = this.props;
    return (
      <Grid
        centered
        className="largeSection"
        style={{
          background: background,
          height: height ? height : '400px',
        }}
      >
        <Grid.Row verticalAlign="middle">{children}</Grid.Row>
      </Grid>
    );
  }
}

export default LargeSection;
