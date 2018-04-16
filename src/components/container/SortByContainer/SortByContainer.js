import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectInput from '../../presentational/common/SelectInput';

import { sortCourse } from '../../../actions/courseActions';

class SortByContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: '',
            options: []
        };
        
        this.handleSortBy = this.handleSortBy.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state, this.props, prevProps);
        if (this.props.sortOptions !== prevProps.sortOptions) {
            this.sort();
        }
    }

    handleSortBy = (e) => {
        this.setState({ 
            option: e.target.value 
        }, (() => this.props.sortCourses(this.state.option)));
    };

    sort() {
        const options = this.props.sortOptions.map(option => {
            return {
                value: option.id,
                text: option.option
            };
        });

        this.setState({
            option: options[0].value,
            options: options,
        }, (() => this.props.sortCourses(this.state.option)));
    }

    render() { 
        return (
            <div>
                <h3>Sort Courses</h3>

                <SelectInput
                    name="sortOption"
                    label="Sort by"
                    value={this.state.option}
                    options={this.state.options}
                    onChange={this.handleSortBy} />
            </div>
        );
    }
}

SortByContainer.propTypes = {
    sortOptions: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        sortOptions: state.sortOptions
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sortCourses: (sortOption) => {
            const option = sortOption.split('-')[0];
            const order = sortOption.split('-')[1];
            dispatch(sortCourse(option, order))
        },
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(SortByContainer);