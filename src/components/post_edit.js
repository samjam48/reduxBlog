import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createPost, fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class editPost extends Component {
    // constructor(props){
    //     super(props);


    //     this.props.fetchPost(this.props.params.id);
    //     console.log(this.props.title)
    //     this.state = { title: this.props.title, categories: '', content: ''}
    // }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
        // this.setState({ title: this.props.title })
    }

    onSubmit(props) {
        this.props.createPost(props, 
            (this.props.deletePost(this.props.params.id,
                () => { this.context.router.push('/') }) ) );
    }


    render() {

        const { post } = this.props;
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
                <div> 
                    <Link to="/">Back To Index</Link>
                </div>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                    <h3>Edit Post</h3>

                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
                        <label>Title</label>
                        <input type="text" className="form-control" {...title} defaultValue={post.title}/>
                        <div className="text-help" >
                            {title.touched ? title.error : ''}
                        </div>
                    </div>

                    <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`} >
                        <label>Categories</label>
                        <input type="text" className="form-control" {...categories} defaultValue={post.categories}/>
                        <div className="text-help" >
                            {categories.touched ? categories.error : ''}
                        </div>
                    </div>

                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`} >
                        <label>Content</label>
                        <textarea className="form-control" {...content} defaultValue={post.content} />
                        <div className="text-help" >
                            {content.touched ? content.error : ''}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={`/posts/${post.id}`} className="btn btn-danger">Cancel</Link>
                </form>

            </div>
        )
    }

    // onInputChange(title) {
    //     this.setState({title});
    //     console.log(state)
    // }
}

function mapStateToProps(state) {
    return { post: state.posts.post }; 
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'touch box to confirm value is correct';
  }
  if (!values.categories) {
    errors.categories = 'touch box to confirm value is correct';
  }
  if(!values.content) {
    errors.content = 'touch box to confirm value is correct';
  }

  return errors;
}


export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, mapStateToProps, { fetchPost, createPost, deletePost })(editPost);



                            // Value={this.state.title}
                            // onChange={event => this.onInputChange( event.target.value) } />


                    // <h3>{post.title}</h3>
                    // <h6>Categories: {post.categories}</h6>
                    // <p>{post.content}</p>

                // <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                //     <h3>Edit Post</h3>

                //     <div className="form-group" >
                //         <label>Title</label>
                //         <input type="text" className="form-control" {...title} />
                //         <div className="text-help" >
                //         </div>
                //     </div>

                //     <div className="form-group" >
                //         <label>Categories</label>
                //         <input type="text" className="form-control" {...categories} />
                //         <div className="text-help" >
                //         </div>
                //     </div>

                //     <div className="form-group" >
                //         <label>Content</label>
                //         <textarea className="form-control" {...content} />
                //         <div className="text-help" >
                //         </div>
                //     </div>

                //     <button type="submit" className="btn btn-primary">Submit</button>
                //     <Link to={`/posts/${post.id}`} className="btn btn-danger">Cancel</Link>
                // </form>