import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectInput from '../../presentational/common/SelectInput';

let sortByOptions = [];
let sortByTypes = [];

class SortByContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: '',
            type: ''
        };
        
        this.handleSortBy = this.handleSortBy.bind(this);
    }

    handleSortBy = (e) => {
        this.setState({ [ e.target.name ]: e.target.value });
        this.props.onSortBy(this.state.option, this.state.type);
    };

    render() { 

        sortByOptions = this.props.sortBy[1].options.map(category => {
            return {
                value: category.id,
                text: category.option
            };
        });

        sortByTypes = this.props.sortBy[0].types.map(option => {
            return {
                value: option.id,
                text: option.type
            };
        });

        return (
            <div>
                <h3>Sort Courses</h3>

                <SelectInput
                    name="option"
                    label="Sort by"
                    value={this.state.option}
                    defaultOption="Select Sort By"
                    options={sortByOptions}
                    onChange={this.handleSortBy} />

                <SelectInput
                    name="type"
                    label="Sort by type"
                    value={this.state.type}
                    defaultOption="Select Sort By Type"
                    options={sortByTypes}
                    onChange={this.handleSortBy} />
            </div>
        );
    }
}

SortByContainer.propTypes = {
    sortBy: PropTypes.array.isRequired,
    onSortBy: PropTypes.func.isRequired
};
 
export default SortByContainer;