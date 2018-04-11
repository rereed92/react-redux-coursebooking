import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CourseListContainer from '../CourseListContainer/CourseListContainer';
import AddCourseContainer from '../AddCourseContainer/AddCourseContainer';
import SortByContainer from '../SortByContainer/SortByContainer';

import { removeCourse, sortCourse } from '../../../actions/courseActions';


class CourseContainer extends Component {
    handleRemoveClick = (id) => {
        this.props.onRemoveClick(id);
    };

    handleSortBy = (option, sorttype) => {
        this.props.onSortBy(option, sorttype)
    };

    render() { 
        return (
            <div>
                <h2>Courses</h2>
                <AddCourseContainer categories={this.props.categories} />
                <SortByContainer sortBy={this.props.sortBy} onSortBy={this.handleSortBy} />
                <CourseListContainer courses={this.props.courses} onRemoveClick={this.handleRemoveClick} />
            </div>
        );
    }
}

CourseContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onSortBy: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        categories: state.categories,
        sortBy: state.sortBy
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemoveClick: (id) => {
            dispatch(removeCourse(id));
        },
        onSortBy: (option, sorttype) => {
            dispatch(sortCourse(option, sorttype));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);