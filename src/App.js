import Popup from './components/Popup';
import WorkExperience from './components/WorkExperience';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Popup} />
        <Route path="/job/:jobId" component={WorkExperience} />
      </Switch>
    </Router>
  )
}

export default App;