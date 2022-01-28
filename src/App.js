import './App.css';
import React from 'react';
import { useHistory, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import blogs from './data/db.json';
import Authors from './components/Authors';


function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  let history = useHistory();

  function handleClick() {
    history.push("/"); // go home
  }

  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/blogs" /> : <Home/> }
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails blogs={blogs} onHistory={handleClick}/>
        </Route>
        <Route path="/blogs">
          <BlogList blogs={blogs}/>
        </Route>
        <Route path="/authors">
          <Authors onHistory={handleClick}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
