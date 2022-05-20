import React, { Component } from 'react'
import logo1 from '../assets/image/weather.png'
import { Navbar, NavbarBrand } from 'reactstrap'
import '../assets/style/navi.css';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar
                    color="info"
                    expand="md"
                    fixed="top"
                >
                    <NavbarBrand href="/">
                        <div class="row">
                            <div class="col">
                                <img src={logo1} alt="logo" className='logo'></img>
                            </div>
                            <div class="col">
                            <h2>Hava Nasıl?</h2>
                            </div>
                        </div>
                    </NavbarBrand>
                </Navbar>
            </div>
        )
    }
}
