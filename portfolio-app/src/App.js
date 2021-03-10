import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

 function App (){
 
  
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Portfolio" exact component={Portfolio} />
      </Switch>
        
    </Router>
    
  );
  
}

export default App;
