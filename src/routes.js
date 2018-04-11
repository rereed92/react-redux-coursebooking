import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeContainer from './components/container/HomeContainer/HomeContainer';
import AboutContainer from './components/container/AboutContainer/AboutContainer';
import CoursesContainer from './components/container/CoursesContainer/CoursesContainer'; 
import AddCourseContainer from './components/container/AddCourseContainer/AddCourseContainer'; 

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="about" component={AboutContainer} />
        <Route path="courses" component={CoursesContainer} />
        <Route path="courses/add-course" component={AddCourseContainer} />
    </Route>
);