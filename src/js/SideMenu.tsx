import React, {Component} from 'react';

export default class SideMenu extends Component {
    state: {
        sub: string;
    };

    constructor(props) {
        super(props);
        this.state = {
            sub: 'all'
        };
    }

    render() {
        return (
            <div>
                {this.state.sub}
            </div>
        );
    }
}
