import React from 'react';
import PropTypes from 'prop-types';

import ModalPortal from '../../portal/ModalPortal/ModalPortal';

const RemoveCourse = ({ course, removeCourse, hideModal }) => {
    return (
        <ModalPortal>
            <p>Are you sure you want to remove {course.title}?</p>
            <button onClick={removeCourse}>Yes</button>
            <button onClick={hideModal}>No, I made a mistake</button>
        </ModalPortal>
    );
};

RemoveCourse.propTypes = {
    course: PropTypes.object.isRequired,
    removeCourse: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
};
 
export default RemoveCourse;