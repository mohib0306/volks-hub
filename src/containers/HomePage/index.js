import React, { Component } from 'react';
import LargeSection from '../../components/LargeSection';
import NavBar from '../../components/NavBar';

class HomePage extends Component {
  render() {
    return [
      <NavBar>VolksHub</NavBar>,
      <LargeSection>Find a local hero now.</LargeSection>,
    ];
  }
}
export default HomePage;
