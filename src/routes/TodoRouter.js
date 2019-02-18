import React from 'react';
import Todo from '../components/Todo';  //be mindful of the paths
import LikesApp from '../components/Likes';
import LocalStorage from '../components/LocalStorage';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const TodoRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component = {Todo} exact = { true }/>
      <Route path="/likesApp" component = {LikesApp}/>
      <Route path="/localstorage" component = {LocalStorage}/>
      <Route component = {NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

export default TodoRouter;



