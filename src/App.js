import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
