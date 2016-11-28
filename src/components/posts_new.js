import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    
    // get context from global router
    // static declaration on the class
    // gets 
    static contextTypes = {
        router: PropTypes.object
    };


    // create the blog post has been created, navigate the user to the index
    // we navigate by calling this.context.router.push with the new path
    onSubmit(props) {
        // console.log(this.props)
        //console.log(Object.values(this.props.createPost(props).payload))
        this.props.createPost(props)
        // Object.values(this.props.createPost(props)[1].indexOf("resolved") != -1 ?
            this.context.router.push('/')
        //     : console.log("error submiting")
    }

    render() {
        // const  handleSubmit  = this.props.handleSubmit;    // ===  //const { handleSubmit } = this.props;
        
        const { fields: {title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <h3>Create A New Post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help" >
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`} >
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help" >
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`} >
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help" >
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {

    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter at least one category';
    }
    if (!values.content) {
        errors.content = 'Enter some content!!';
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost})(PostsNew);
