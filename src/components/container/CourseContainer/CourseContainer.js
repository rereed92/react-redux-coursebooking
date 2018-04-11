import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
        console.log('course', courseId);
        console.log(courseApi.getCourse(courseId));
    }

    render() { 
        return (
            <div>
                <h2>Manage {this.props.params.id}</h2>
            </div>
        );
    }
}

CourseContainer.propTypes = {
};

export default connect()(CourseContainer);