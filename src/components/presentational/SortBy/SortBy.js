import React from 'react';
import PropTypes from 'prop-types';

import SelectInput from '../../presentational/common/SelectInput';

const SortBy = ({options, option, sortCourses}) => {
    return (
        <div>
            <h3>Sort Courses</h3>

            <SelectInput
                name="sortOption"
                label="Sort by"
                value={option}
                options={options}
                onChange={(e) => sortCourses(e.target.value)} />
        </div>
    );
};

SortBy.propTypes = {
    options: PropTypes.array.isRequired,
    option: PropTypes.string.isRequired,
    sortCourses: PropTypes.func.isRequired
};
 
export default SortBy;