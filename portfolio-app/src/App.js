import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/:Contact" component={Contact} />
    </Router>
    
  );
}

export default App;
