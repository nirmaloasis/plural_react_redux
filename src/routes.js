import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import About from './components/about/About'
import CoursePage from './components/courses/CoursePage'
export default (
            <Route path='/' component={App}>
             <IndexRoute component={HomePage}></IndexRoute>
             <Route path="courses" component={CoursePage}></Route>
             <Route path="about" component={About}></Route>
            </Route>
);
 