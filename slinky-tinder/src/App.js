import React from 'react';
import './App.css';

//------------------------------------------
//      Needed Imports
//------------------------------------------
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
        } from "react-router-dom"

//------------------------------------------
//      Components Imported
//------------------------------------------
import TinderData from  './db/TinderData'
import TinderIndex from './pages/TinderIndex'
import TinderShow from  './pages/TinderShow'


export default function() {

    // - - - - - - - -
    console.table(TinderData)
    //fdjglfkgjkj
    // - - - - - - - -


  return (
    <React.Fragment>
      {/**********************************************/}
      {/*                  Testings                  */}
      {/**********************************************/}
      {/*

      Apple
      <TinderIndex/>
      <TinderShow/>

      <br/>

      { TinderData[1].description }

    */}
    {/**********************************************/}


    <Router>
        <Switch>
                {/*           -  Example:
            <Route
                path="/recipes/:id"
                render={ (props) => <Recipe {...props} recipes={ this.state.allRecipes } /> }
            />
                */}

            <Route
                path="/profile/:id"
                render={ (props) => <TinderShow {...props} profiles={ TinderData } /> }
            />
            <Route
                path="/"
                render={ (props) => <TinderIndex {...props} profiles={ TinderData } /> }
            />


        </Switch>
    </Router>


    </React.Fragment>
  )
}
