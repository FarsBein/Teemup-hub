import React from 'react';
import {Route,Switch} from 'react-router-dom';
import feed from '../pages/feed/Feed.js'
import post from '../pages/post/Post.js'
import profile from '../pages/profile/Profile.js'
import authorization from '../pages/authorization/Auth.js'
import Navbar from '../Navbar/Navbar.js';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route name='post' component={post} path='/post' />                
                <Route name='profile' component={profile} path='/profile' />                
                <Route name='authorization' component={authorization} path='/authorization' />                
                <Route name='feed' component={feed} path='/' />                
            </Switch>
        </div>
    )
}


export default Root;