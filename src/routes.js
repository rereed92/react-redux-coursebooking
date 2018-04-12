import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeContainer from './components/container/HomeContainer/HomeContainer';
import AboutContainer from './components/container/AboutContainer/AboutContainer';
import CoursesContainer from './components/container/CoursesContainer/CoursesContainer'; 
import AddCourseContainer from './components/container/AddCourseContainer/AddCourseContainer'; 
import CourseContainer from './components/container/CourseContainer/CourseContainer'; 
import EditCourseContainer from './components/container/EditCourseContainer/EditCourseContainer'; 

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="about" component={AboutContainer} />
        <Route path="courses" component={CoursesContainer} />
        <Route path="add-course" component={AddCourseContainer} />
        <Route path="course/:id" component={CourseContainer} />
        <Route path="course/:id/edit" component={EditCourseContainer} />
    </Route>
);