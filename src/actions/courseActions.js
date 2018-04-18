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
    course.id = course.title ? (course.title).replace(' ', '-') : courseIndex++;
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

export function addCourseSuccess(course) {
    return {
        type: types.ADD_COURSE,
        course
    };
}

export function updateCourse(course) {
    return function(dispatch) {
        return courseApi.updateCourse(course)
            .then(course => {
                dispatch(updateCourseSuccess(course));
                dispatch(push(`/courses/${course.id}`));
            }).catch(error => {
                throw(error);
            });
    };
}

export function updateCourseSuccess(course) {
    return {
        type: types.UPDATE_COURSE,
        course
    };
}

export function removeCourse(id) {
    return function(dispatch) {
        return courseApi.removeCourse(id)
            .then(id => {
                dispatch(removeCourseSuccess(id));
                dispatch(push('/courses'));
            }).catch(error => {
                throw(error);
            });
    };
}

export function removeCourseSuccess(id) {
    return {
        type: types.REMOVE_COURSE,
        id
    };
}

export function sortCourse(option, order) {
    return function(dispatch) {
        return courseApi.sortCourse(option, order)
            .then((op, or) => {
                dispatch(sortCourseSuccess(option, order));
            }).catch(error => {
                throw(error);
            });
    };
}

export function sortCourseSuccess(option, order) {
    return {
        type: types.SORT_COURSE,
        option,
        order
    };
}
