import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import courseApi from '../../../api/courses';

import { removeCourse } from '../../../actions/courseActions';

import RemoveCourse from '../../presentational/RemoveCourse/RemoveCourse';

class CourseContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            course: {},
            showModal: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
      }

    componentDidMount() {
        this.getCourse(this.props.params.id);
    } 

    getCourse(courseId) {
        const course = courseApi.getCourse(courseId);
        this.setState({
            course: course[0]
        });
    }

    showModal() {
        this.setState({showModal: true});
    }
      
    hideModal() {
        this.setState({showModal: false});
    }

    handleRemoveClick() {
        this.props.removeCurrentCourse(this.state.course.id);
    }

    render() { 
        const { course, showModal } = this.state; 

        const removeCourseModal = showModal ? (
            <RemoveCourse course={course} removeCourse={this.handleRemoveClick} hideModal={this.hideModal} />
        ) : null;

        return (
            <div>
                <h2>Manage { course.title }</h2>

                <dl>
                    <dt>Title</dt>
                    <dd>{ course.title }</dd>
                    <dt>Author</dt>
                    <dd>{ course.author }</dd>
                    <dt>Category</dt>
                    <dd>{ course.category }</dd>
                    <dt>Course URL</dt>
                    <dd><a href={course.watchHref} target="_blank">{course.watchHref}</a></dd>
                    <dt>Course Length</dt>
                    <dd>{ course.length }</dd>
                </dl>

                <ul>    
                    <li><Link to="/courses">Go back to Courses</Link></li>
                    <li><Link to={"/course/" + course.id + "/edit"}>Edit Course</Link></li>
                    <li><button onClick={this.showModal}>Remove Course</button></li>
                    { removeCourseModal }
                </ul>
            </div>
        );
    }
}

CourseContainer.propTypes = {
    params: PropTypes.object.isRequired,
    removeCurrentCourse: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeCurrentCourse: (courseId) => {
            dispatch(removeCourse(courseId));
        },
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);