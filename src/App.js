import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';

function App() {
    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Restronate Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu />
        </div>
    );
}

export default App;
