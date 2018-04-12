import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import courseApi from '../../../api/courses';
import categoryApi from '../../../api/categories';

import { updateCourse } from '../../../actions/courseActions';

import TextInput from '../../presentational/common/TextInput';
import SelectInput from '../../presentational/common/SelectInput';

class EditCourseContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            course: {
                id: '',
                title: '',
                watchHref: '',
                author: '',
                length: '',
                category: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentDidMount() {
        this.getCourse(this.props.params.id);
        this.getCategories();
    } 

    findSelectValue = (value) => {
        for (let key in this.state.categories) {
            if (this.state.categories[key].value === value) return this.state.categories[key].text;
        }
    };

    handleInputChange = (e) => {
        const value = e.target.type === 'text' ? e.target.value : this.findSelectValue(e.target.value);
        this.setState({
            course: {
              ...this.state.course,
              [e.target.name]: value
            },
        });
    };


    getCourse(courseId) {
        const course = courseApi.getCourse(courseId);
        this.setState({
            course: course[0]
        });
    }

    getCategories() {
        categoryApi.getCategories().then(categories => {
            const formattedCategories = categories.map(category => {
                return {
                    value: category.id,
                    text: category.title
                };
            });
            this.setState({
                categories: formattedCategories
            });
        });
    }

    render() { 
        const { course, categories } = this.state; 
        return (
            <div>
                <h2>Edit { course.title }</h2>

                <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.updateCurrentCourse(course)
                    }}>

                    <TextInput
                        name="title"
                        label="Title"
                        placeholder="title"
                        value={course.title} 
                        onChange={this.handleInputChange}/>

                    <TextInput
                        name="author"
                        label="Author"
                        placeholder="author"
                        value={course.author} 
                        onChange={this.handleInputChange}/>

                    <TextInput
                        name="watchHref"
                        label="Watch Href"
                        placeholder="href"
                        value={course.watchHref} 
                        onChange={this.handleInputChange}/>

                    <TextInput
                        name="length"
                        label="Length"
                        placeholder="length"
                        value={course.length} 
                        onChange={this.handleInputChange}/>

                    <SelectInput
                        name="category"
                        label="Category"
                        value={course.category}
                        defaultOption="Select Category"
                        options={categories}
                        onChange={this.handleInputChange} />

                    <button>Save</button>
                </form>


            </div>
        );
    }
}

EditCourseContainer.propTypes = {
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateCurrentCourse: (course) => {
            dispatch(updateCourse(course))
        },
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(EditCourseContainer);