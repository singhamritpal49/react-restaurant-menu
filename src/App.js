import React, { Component } from 'react';
import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory';




class App extends React.Component {
    render() {

        return (
            <div className="catch-of-the-day">

                <div className="menu">
                    <Header tagline="AMRIT IS COOL"/>
                    </div>
                    <Order />
                    <Inventory />
                
            </div>
        );
    }
}

export default App;