import React, {Component} from 'react';

export default class NavBar extends Component {
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
            <nav>
                <div class="nav-wrapper">
                    <a href="#" className="brand-logo">Roffl</a>
                </div>
            </nav>
        );
    }
}
