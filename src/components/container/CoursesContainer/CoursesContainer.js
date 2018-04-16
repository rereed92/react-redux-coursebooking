import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CourseListContainer from '../CourseListContainer/CourseListContainer';
import SortByContainer from '../SortByContainer/SortByContainer';

import { removeCourse } from '../../../actions/courseActions';


class CoursesContainer extends Component {
    handleRemoveClick = (id) => {
        this.props.onRemoveClick(id);
    };

    render() { 
        return (
            <div>
                <h2>Courses</h2>
                <Link to="/add-course">Add Course</Link>
                <SortByContainer />
                <CourseListContainer courses={this.props.courses} onRemoveClick={this.handleRemoveClick} />
            </div>
        );
    }
}

CoursesContainer.propTypes = {
    courses: PropTypes.array.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemoveClick: (id) => {
            dispatch(removeCourse(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);