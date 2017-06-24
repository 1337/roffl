import React, {Component} from 'react';
import request from 'request/request';

class Content extends Component {
    private props: any;

    async componentDidMount() {
        let res = await request.get(`http://www.reddit.com/r/${this.props.subreddit}.json`);
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({posts});
    }

    render() {
        return (
            <h1>Hello world!</h1>
        );
    }
}

export default Content;
