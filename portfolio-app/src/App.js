import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/:Contact" component={Contact} />
      <Route exact path="/:Portfolio" component={Portfolio} />
    </Router>
    
  );
}

export default App;
