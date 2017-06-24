import React, {Component} from 'react';
import RedditService from './RedditService';

class Content extends Component {
    private props: any;
    public state: any;
    public setState: any;

    async componentDidMount() {
        let res = await RedditService.get('pics');
        const posts = res.data.children.map(obj => obj.data);
        console.log(posts);
        this.setState({posts});
    }

    render() {
        const self = this;
        if (this.state && this.state.posts) {
            return (
                <div>{
                    self.state.posts.map(function (post, i) {
                        return <div>{self.state.posts[i].title}</div>;
                    })
                }</div>
            );
        }
        return <div></div>;
    }
}

export default Content;
