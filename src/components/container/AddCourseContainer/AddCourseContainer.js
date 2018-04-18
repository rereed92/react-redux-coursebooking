import React, { Component } from 'react';
import { connect } from 'react-redux';

import categoryApi from '../../../api/categories';

import { addCourse } from '../../../actions/courseActions';

import TextInput from '../../presentational/common/TextInput';
import SelectInput from '../../presentational/common/SelectInput';
import Loading from '../../presentational/Loading/Loading';

class AddCourseContainer extends Component {
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
    }

    handleInputChange = (e) => {
        this.setState({
            course: {
              ...this.state.course,
              [e.target.name]: e.target.value
            },
        });
    };

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
    };

    render() { 
        const { course, categories, loading } = this.state; 

        if (loading) {
            return ( <Loading /> );
        }

        return (
            <div>
                <h3>Add Course</h3>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.addNewCourse(course);
                        this.setState({
                            id: '',
                            title: '',
                            watchHref: '',
                            author: '',
                            length: '',
                            category: ''
                        });
                    }}>

                    <TextInput
                        name="title"
                        label="Title"
                        placeholder="title"
                        value={course.title} 
                        onChange={this.handleInputChange}/>

                    <TextInput
                        name="watchHref"
                        label="Watch Href"
                        placeholder="href"
                        value={course.watchHref} 
                        onChange={this.handleInputChange}/>
                    
                    <TextInput
                        name="author"
                        label="Author"
                        placeholder="author"
                        value={course.author} 
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

                    <button>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewCourse: (course) => {
            course.category = categoryApi.getCategoryTitle(course.category);
            dispatch(addCourse(course))
        },
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(AddCourseContainer);