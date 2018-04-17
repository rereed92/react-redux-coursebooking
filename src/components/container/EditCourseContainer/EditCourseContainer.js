import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import courseApi from '../../../api/courses';
import categoryApi from '../../../api/categories';

import { updateCourse } from '../../../actions/courseActions';

import TextInput from '../../presentational/common/TextInput';
import SelectInput from '../../presentational/common/SelectInput';
import Loading from '../../presentational/Loading/Loading';

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
            },
            loading: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentDidMount() {
        this.getCategories();
        this.getCourse(this.props.params.id);
    } 

    findSelectValue = (value) => {
        console.log(value);
        for (let key in this.state.categories) {
            if (this.state.categories[key].value === value) return this.state.categories[key].text;
        }
    };

    handleInputChange = (e) => {
        // const value = e.target.type === 'text' ? e.target.value : this.findSelectValue(e.target.value);
        this.setState({
            course: {
              ...this.state.course,
              [e.target.name]: e.target.value
            },
        }, (() => console.log(this.state)));
    };

    getCourse(courseId) {
        const course = courseApi.getCourse(courseId);
        this.setState({
            course: {
                ...course[0],
                category: categoryApi.getCategoryId(course[0].category)
            }
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
        }).then(() => this.setState({ loading: false }));
    }

    render() { 
        const { course, categories, loading } = this.state; 

        if (loading) {
            return ( <Loading /> );
        }

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
            course.category = categoryApi.getCategoryTitle(course.category);
            dispatch(updateCourse(course))
        },
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(EditCourseContainer);