import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CourseListContainer from '../CourseListContainer/CourseListContainer';
import SortByContainer from '../SortByContainer/SortByContainer';
import SortBy from '../../presentational/SortBy/SortBy';

import sortApi from '../../../api/sortBy';

import { removeCourse, sortCourse } from '../../../actions/courseActions';


class CoursesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            option: ''
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
                option: sortOptions[0].value
            }, (() => this.handleSortCourses(this.state.option)));
        });
    }

    handleRemoveClick = (id) => {
        this.props.onRemoveClick(id);
    };

    handleSortCourses = (sortOption) => {
        const option = sortOption.split('-')[0];
        const order = sortOption.split('-')[1];

        this.setState({
            option: sortOption
        }, (() => this.props.sortCourses(option, order)));
    }

    render() { 
        return (
            <div>
                <h2>Courses</h2>
                <Link to="/add-course">Add Course</Link>
                <SortBy options={this.state.options} option={this.state.option} sortCourses={this.handleSortCourses} />
                <CourseListContainer courses={this.props.courses} onRemoveClick={this.handleRemoveClick} />
            </div>
        );
    }
}

CoursesContainer.propTypes = {
    courses: PropTypes.array.isRequired,
    sortOptions: PropTypes.array.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    sortCourses: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        sortOptions: state.sortOptions
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemoveClick: (id) => {
            dispatch(removeCourse(id));
        },
        sortCourses: (option, order) => {
            dispatch(sortCourse(option, order))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);