import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {
  static contextTypes = {
      router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }


  onDeleteClick() {
    this.props.deletePost(this.props.params.id, () => { this.context.router.push('/') });
  }
          // this.props.createPost(props, () => this.context.router.push('/') );
  onEditClick() {
    this.context.router.push('/posts/edit/' + this.props.params.id);
  }

  render() {
    const { post } = this.props;

    if (!this.props.post) {
      return <div>Loading...</div>
    }

    return (
      <div> 
        <Link to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          style={{'left': '80%'}}
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <button
          className="btn btn-warning pull-xs-right"
          style={{'left': '30%'}}
          onClick={this.onEditClick.bind(this)}>
          Edit Post
        </button>
      </div>
      )
  }
}

function mapStateToProps(state) {
    return { post: state.posts.post }; 
}


export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);