import React, {Component} from 'react';
import RedditService from './RedditService';

class Content extends Component {
    private props: any;

    async componentDidMount() {
        let res = await RedditService.get('pics');
        const posts = res.data.data.children.map(obj => obj.data);
        console.log(posts);
        this.setState({posts});
    }

    render() {
        return (
            <h1>Hello world!</h1>
        );
    }
}

export default Content;
