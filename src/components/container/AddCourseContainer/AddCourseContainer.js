import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addCourse } from '../../../actions/courseActions';

import TextInput from '../../presentational/common/TextInput';
import SelectInput from '../../presentational/common/SelectInput';

let allCategories = [];

class AddCourseContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            watchHref: '',
            authorId: '',
            length: '',
            category: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    findSelectValue = (value) => {
        for (let key in allCategories) {
            if (allCategories[key].value === value) return allCategories[key].text;
        }
    };

    handleInputChange = (e) => {
        const value = e.target.type === 'text' ? e.target.value : this.findSelectValue(e.target.value);
        this.setState({ [e.target.name]: value });
    };

    render() { 

        allCategories = this.props.categories.map(category => {
            return {
                value: category.id,
                text: category.title
            };
        });

        return (
            <div>
                <h3>Add Course</h3>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.dispatch(addCourse(this.state));
                        this.setState({
                            id: '',
                            title: '',
                            watchHref: '',
                            authorId: '',
                            length: '',
                            category: ''
                        });
                    }}>

                    <TextInput
                        name="title"
                        label="Title"
                        placeholder="title"
                        value={this.state.title} 
                        onChange={this.handleInputChange}/>

                    <TextInput
                        name="watchHref"
                        label="Watch Href"
                        placeholder="href"
                        value={this.state.watchHref} 
                        onChange={this.handleInputChange}/>
                    
                    <TextInput
                        name="authorId"
                        label="Author"
                        placeholder="author"
                        value={this.state.authorId} 
                        onChange={this.handleInputChange}/>

                    <TextInput
                        name="length"
                        label="Length"
                        placeholder="length"
                        value={this.state.length} 
                        onChange={this.handleInputChange}/>

                    <SelectInput
                        name="category"
                        label="Category"
                        value={this.state.category}
                        defaultOption="Select Category"
                        options={allCategories}
                        onChange={this.handleInputChange} />

                    <button>Add</button>
                </form>
            </div>
        );
    }
}

AddCourseContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};
 
export default connect()(AddCourseContainer);