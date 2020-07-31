import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Popular from './components/Popular';
import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>This week</Link>
              </li>
              <li>
                <Link to='/battle'>This week battle</Link>
              </li>
              <li>
                <Link to='/Popular/'>Popular</Link>
              </li>
              <li>
                <Link to='/popular-battle/'>Popular battle</Link>
              </li>
              <li>
                <Link to='/my-list/'>My List</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/'>
              <Discover />
            </Route>
            <Route path='/battle'>
              <DiscoverBattle />
            </Route>
            <Route path='/popular/'>
              <Popular />
            </Route>
            <Route path='/popular-battle/'>
              <PopularBattle />
            </Route>
            <Route path='/my-list/'>
              <MyList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
