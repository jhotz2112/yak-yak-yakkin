import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import Location from '../Location/Location';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/home">
              <HomePage user={user} setUser={setUser} />
            </Route>
            <Route path="/aboutpage">
              <AboutPage />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
          </Switch>
            <Redirect to="/home" />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}