import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App        from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew   from './components/posts_new';
import PostShow   from './components/post_show';
import PostEdit   from './components/post_edit';



export default (
    <Route path='/' component={App} >
        <IndexRoute component={PostsIndex}  />
        <Route path="posts/new" component={PostsNew}  />
        <Route path="posts/:id" component={PostShow} />
        <Route path="posts/edit/:id" component={PostEdit}  />
    </Route>
)