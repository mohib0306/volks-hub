import React, { Component } from 'react';
import { Grid, Segment, Container, List, Header } from 'semantic-ui-react';

class Footer extends Component {
  currentYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Get started" />
                <List link inverted>
                  <List.Item as="a">Sign in</List.Item>
                  <List.Item as="a">Sign up</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  &copy; {this.currentYear()} VolksHub
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
