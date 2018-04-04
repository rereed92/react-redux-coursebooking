import * as types from './actionTypes';

import courses from '../data/courses';

let courseIndex = 0;

export function loadCourses() {
    return { 
        type: types.LOAD_COURSES_SUCCESS,
        courses 
    };
}

export function addCourse(courseDetails) {
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

export function removeCourse(id) {
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