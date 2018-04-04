import React from 'react';
import PropTypes from 'prop-types';

const CourseList = ({ course, onRemoveClick }) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><button onClick={() => onRemoveClick(course.id)}>Remove</button></td>
        </tr>
    );
};

CourseList.propTypes = {
    course: PropTypes.object.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};
 
export default CourseList;