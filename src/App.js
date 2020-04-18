import React, { Component, Fragment } from 'react';
import './App.css';
//import KitchenList from './Components/KitchenList'
import KitchenSignup from'./Components/KitchenSignup'
//import Router from 'react-router-dom/Route'





class App extends Component {
  render() {
    return (
         
      <Fragment >
        {/*<KitchenList />  */}

        <KitchenSignup/>

      </Fragment>
    );
  }
}

export default App;
