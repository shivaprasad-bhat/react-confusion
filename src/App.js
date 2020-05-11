import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import { DISHES } from './shared/Dishes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Restronate Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} />
            </div>
        );
    }
}

export default App;
