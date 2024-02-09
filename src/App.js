// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import VerifyEmail from './components/VerifyEmail';
import AccountCreated from './components/AccountCreated';
import CreatePost from './components/CreatePost';
import AllPosts from './components/AllPosts';
import PostDetails from './components/PostDetails';
import Forum from './components/Forum';

import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Forum} />
          <Route path="/create_account" component={CreateAccount} />
          <Route path="/verify_email" component={VerifyEmail} />
          <Route path="/account_created" component={AccountCreated} />
          <Route path="/create_post" component={CreatePost} />
          <Route path="/post_details" component={PostDetails}/>
          <Route path="/all_posts" component={AllPosts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
