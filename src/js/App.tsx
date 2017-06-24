import React, { Component } from 'react';

import NavBar from './NavBar';
import SideMenu from './SideMenu';
import Content from './Content';


function App() {
    return (
        <div>
            <NavBar></NavBar>
            <SideMenu></SideMenu>
            <Content></Content>
        </div>
    );
}

export default App;
