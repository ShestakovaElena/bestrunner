import './App.css';
import TrainingList from './TrainingList';
import React, { Component } from 'react';
import AddSession from './AddSession'
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {

 render() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/">BestRunner</NavbarBrand></Navbar>
      <TrainingList />
      <AddSession />

    </div>
  );
 }
}

export default App
