import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import './styles.scss';
export default class NavBar extends Component {
  render() {
    const { children } = this.props;
    return (
      <Grid className="navBar">
        <Grid.Column className="logo" floated="left" width={5}>
          {children}
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <Button circular primary icon="lock" content="Login" />
          <Button circular positive icon="user outline" content="SignUp" />
        </Grid.Column>
      </Grid>
    );
  }
}
