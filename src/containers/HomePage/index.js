import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import LargeSection from '../../components/LargeSection';
import NavBar from '../../components/NavBar';
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
        <LargeSection>
          <Grid.Column>
            <h2>Why?</h2>
          </Grid.Column>
          <Grid.Column>
            <h2>How?</h2>
          </Grid.Column>
        </LargeSection>
      </div>
    );
  }
}
export default HomePage;
