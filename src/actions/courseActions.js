import { push } from 'react-router-redux';
import * as types from './actionTypes';

import courseApi from '../api/courses';

let courseIndex = 0;

export function loadCourses() {
    return function(dispatch) {
        return courseApi.getCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            }).catch(error => {
                throw(error);
            });
    };
    
}

export function loadCoursesSuccess(courses) {
    return { 
        type: types.LOAD_COURSES_SUCCESS,
        courses 
    };
}

export function addCourse(course) {
    return function(dispatch) {
        return courseApi.addCourse(course)
            .then(newCourse => {
                dispatch(addCourseSuccess(course));
                dispatch(push('/courses'));
            }).catch(error => {
                throw(error);
            });
    };
}

export function addCourseSuccess(courseDetails) {
    return {
        type: types.ADD_COURSE,
        id: courseDetails.title ? (courseDetails.title).replace(' ', '-') : courseIndex++,
        title: courseDetails.title,
        watchHref: courseDetails.watchHref,
        authorId: courseDetails.authorId,
        length: courseDetails.length,
        category: courseDetails.category
    };
}

export function removeCourse() {
    return function(dispatch) {
        // return courseApi.addCourse(course)
        //     .then(newCourse => {
        //         dispatch(addCourseSuccess(course));
        //         dispatch(push('/courses'));
        //     }).catch(error => {
        //         throw(error);
        //     });
    };
}

export function removeCourseSuccess(id) {
    return {
        type: types.REMOVE_COURSE,
        id
    };
}


export function sortCourse(option, sorttype) {
    return {
        type: types.SORT_COURSE,
        option,
        sorttype
    };
}
