import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1> Tandori Hut</h1> 
                <h3 className="tagline"> 
                    <span>Authentic Indian</span>
                </h3>

            </header>
        );
    }
}

export default Header;