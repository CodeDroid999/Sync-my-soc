import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/aboutpage'; // Import your About component
import Index from './components/Index'; // Import your existing component
import Dashboard from './components/Dashboard'; // Import your Dashboard component
import { SessionProvider } from "next-auth/react"

function App() {
  return (
    <Router>
     <SessionProvider session={pageProps.session}>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} /> {/* Added this route */}
          <Route path="/" component={Index} />
        </Switch>
      </div>
      </SessionProvider>
    </Router>
  );
}

export default App;
