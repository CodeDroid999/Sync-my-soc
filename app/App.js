import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from 'components/aboutpage'; // Import your About component
import Index from './components/Index'; // Import your existing component

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
