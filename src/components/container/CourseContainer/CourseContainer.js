import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import courseApi from '../../../api/courses';

class CourseContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            course: {}
        };
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

    render() { 
        const { course } = this.state; 
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
                    <dd>{ course.watchHref }</dd>
                    <dt>Course Length</dt>
                    <dd>{ course.length }</dd>
                </dl>

                <Link to={"/course/" + course.id + "/edit"}>Edit Course</Link>
            </div>
        );
    }
}

CourseContainer.propTypes = {
    params: PropTypes.object.isRequired
};

export default connect()(CourseContainer);