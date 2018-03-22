import React, { Component } from 'react';
import './App.css';

const list = [
  {
    id: 1,
    title: 'React',
    url: 'https://www.reactjs.org',
    author: 'Facebook Inc.',
  },
  {
    id: 2,
    title: 'GraphQL',
    url: 'https://www.grahpql.org',
    author: 'Facebook Open Source',
  },
];

function GenerateList(props) {
  const items = props.items;
  const itemsList = items.map(item => (
    <li key={item.id}>
      {item.title}: Go to <a href={item.url}>{item.url}</a> for futher
      information. Added by {item.author}
    </li>
  ));
  return <ul>{itemsList}</ul>;
}
class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <header className="App-header">
          <h1 className="App-title">Welcome to Volks Hub</h1>
        </header>
        <p>
          <GenerateList items={list} />
        </p>
      </div>
    );
  }
}

export default App;
