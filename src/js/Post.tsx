import React, {Component} from 'react';

class Post extends Component {
    private props: any;

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let imgTag;
        let post = this.props.post;
        if (post.preview && post.preview.images) {
            imgTag = <img src={post.preview.images[0].source.url} alt=""/>;
        }
        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            {imgTag}
                            <span className="card-title">{post.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
