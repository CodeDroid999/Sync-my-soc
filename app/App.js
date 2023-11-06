import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
