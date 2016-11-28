import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        console.log('---------------------')
        console.log('this.props in renderPost() = ')
        console.log(this.props)
        return setTimeout(this.props.posts.map((post) =>{
            return (
                <li className='list-group-item' key={post.id} >
                    <span className='pull-xs-right' >{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
            )
        }), 2000);
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('---------------------')
    console.log('current State = ')
    console.log(state)
    return { posts: state.posts.all };
}


// import { bindActionCreators } from 'redux';
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch)
// }

// export default connect(null, {mapDispatchToProps})(PostsIndex)

// _______________________ above == below _________________________

// export default connect(null, {fetchPosts: fetchPosts })(PostsIndex)

// ______(furthermore)____ above == below _________________________


export default connect(mapStateToProps, {fetchPosts })(PostsIndex)