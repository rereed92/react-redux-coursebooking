import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const CourseList = ({ course, onRemoveClick }) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><Link to={"/course/" + course.id}>View Course</Link></td>
        </tr>
    );
};

CourseList.propTypes = {
    course: PropTypes.object.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};
 
export default CourseList;