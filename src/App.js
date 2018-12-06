import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faTrash, faEdit, faInfo, faPlus, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';


library.add({faStroopwafel, faTrash, faEdit, faInfo, faPlus, faTimes, faSpinner})


class App extends Component {


  showRoutes = (routes) => {
    var result = null;
        if(routes.length > 0){
            result =routes.map((route, index) =>{
                return(
                    <Route
                        path= {route.path}
                        exact = {route.exact}
                        key = {index}
                        component = {route.main}
                    />
                )
            });

        }

        return <Switch>{result}</Switch>;
  }
  render() {
    return (
      <Router>
        {this.showRoutes(routes)}
      </Router>
    );
  }
}

export default App;
