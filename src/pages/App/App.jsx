import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import Location from '../Location/Location';
import Profile from '../Profile/Profile';
import NavBar from '../../components/NavBar/NavBar';
import LocationDetail from '../LocationDetail/LocationDetail';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/aboutpage">
              <AboutPage />
            </Route>
            <Route path="/details/:id">
              <LocationDetail />
            </Route>
            <Route path="/location">
              <Profile user={user} />
              <Location />
            </Route>
            <Redirect to="/location" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}