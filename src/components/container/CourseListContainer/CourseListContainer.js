import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CourseList from '../../presentational/CourseList/CourseList';

class CourseListContainer extends Component {
    handleRemoveClick = (id) => {
        this.props.onRemoveClick(id);
    };

    render() { 
        return (
            <div>
                <h3>Listed Courses</h3>
                <ul>
                    {this.props.courses.map(course =>
                        <CourseList key={course.id} course={course} onRemoveClick={this.handleRemoveClick} />
                    )}
                </ul>    
            </div>
        );
    }
}

CourseListContainer.propTypes = {
    courses: PropTypes.array.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};

export default connect()(CourseListContainer);