import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CourseListContainer from '../CourseListContainer/CourseListContainer';
import SortByContainer from '../SortByContainer/SortByContainer';
import SortBy from '../../presentational/SortBy/SortBy';

import sortApi from '../../../api/sortBy';

import { removeCourse, sortCourse } from '../../../actions/courseActions';
import { updateSortOption } from '../../../actions/sortByActions';


class CoursesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
        };
    }

    componentDidMount() {
        this.getSortOptions();
    }

    getSortOptions() {
        sortApi.getSortOptions().then(options => {
            const sortOptions = options.map(option => {
                return {
                    value: option.id,
                    text: option.option
                };
            });
            this.setState({
                options: sortOptions,
            }, (() => this.handleSortCourses(this.props.sort.option)));
        });
    }

    handleRemoveClick = (id) => {
        this.props.onRemoveClick(id);
    };

    handleSortCourses = (sortOption) => {
        this.props.sortCourses(sortOption);
    }

    render() { 
        return (
            <div>
                <h2>Courses</h2>
                <Link to="/add-course">Add Course</Link>
                <SortBy options={this.state.options} option={this.props.sort.option} sortCourses={this.handleSortCourses} />
                <CourseListContainer courses={this.props.courses} onRemoveClick={this.handleRemoveClick} />
            </div>
        );
    }
}

CoursesContainer.propTypes = {
    courses: PropTypes.array.isRequired,
    sort: PropTypes.object.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    sortCourses: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        sort: state.sort
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemoveClick: (id) => {
            dispatch(removeCourse(id));
        },
        sortCourses: (sortOption) => {
            dispatch(sortCourse(sortOption.split('-')[0], sortOption.split('-')[1]));
            dispatch(updateSortOption(sortOption));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);