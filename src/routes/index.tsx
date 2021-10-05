import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Create from '../pages/Create';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/create" component={Create} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
