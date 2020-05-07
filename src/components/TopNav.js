import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

class TopNav extends Component {
    state = {
        collapse: false,
        active: "home"
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    setActive = (newActiveState) => {
        this.setState({
            active: newActiveState
        })
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar color="grey" className="flexible-navbar darken-2" dark expand="md" scrolling>
                <MDBNavbarBrand href="/google-maps-high-charts">
                    <strong>Google Maps High Charts</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active={this.state.active === "home"}>
                            <MDBNavLink to="/google-maps-high-charts" onClick={() => this.setActive("home")}>Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active={this.state.active === "map"}>
                            <MDBNavLink to="/google-maps-high-charts/map" onClick={() => this.setActive("map")}>Map</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active={this.state.active === "chart"}>
                            <MDBNavLink to="/google-maps-high-charts/chart" onClick={() => this.setActive("chart")}>Chart</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNav;