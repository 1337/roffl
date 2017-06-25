import React, {Component} from 'react';
import RedditService from './RedditService';
import Post from './Post';

class Content extends Component {
    public state: any;
    public setState: any;

    async componentDidMount() {
        let posts = await RedditService.getPosts('funny');
        console.log(posts);
        this.setState({posts});
    }

    render() {
        if (!(this.state && this.state.posts)) {
            // No posts
            return <div></div>;
        }
        return (
            <div>{
                this.state.posts.map(function (post, i) {
                    return <Post post={post} key={i}></Post>;
                })
            }</div>
        );
    }
}

export default Content;
