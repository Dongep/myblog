import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../login/login';
// import Content from '../content/content';

export default class Container extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>奥利bama的博客</h1>
                <header>奥利bama的博客</header>
                <Login></Login>
                {/* <Content></Content> */}
            </div>
        )

    }

}

