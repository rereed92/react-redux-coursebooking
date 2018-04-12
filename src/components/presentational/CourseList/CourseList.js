import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const CourseList = ({ course, onRemoveClick }) => {
    return (
        <li key={course.id}>
            <h4>{course.title}</h4>
            <Link to={"/course/" + course.id}>View Course</Link>
        </li>
    );
};

CourseList.propTypes = {
    course: PropTypes.object.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};
 
export default CourseList;