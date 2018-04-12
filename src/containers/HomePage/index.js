import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import LargeSection from '../../components/LargeSection';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import SearchInput from '../../components/SearchInput';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar>VolksHub</NavBar>
        <LargeSection background="#fac960">
          <Grid.Column
            style={{
              textAlign: 'center',
            }}
          >
            <h1>find a local hero now</h1>
            <SearchInput action="Search" size="huge" placeholder="Search..." />
          </Grid.Column>
        </LargeSection>
        <LargeSection height="250px">
          <Grid.Column
            style={{
              textAlign: 'center',
            }}
          >
            <Header as="h2" icon textAlign="center">
              <Icon name="users" circular />
              <Header.Content>Why?</Header.Content>
            </Header>
            <p>Why is it needed?</p>
          </Grid.Column>
        </LargeSection>
        <LargeSection height="250px">
          <Grid.Column
            style={{
              textAlign: 'center',
            }}
          >
            <Header as="h2" icon textAlign="center">
              <Icon name="search" circular />
              <Header.Content>How?</Header.Content>
            </Header>
            <p>How is it done?</p>
          </Grid.Column>
        </LargeSection>
        <Footer />
      </div>
    );
  }
}
export default HomePage;
