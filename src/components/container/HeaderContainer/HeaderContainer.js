import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class HeaderContainer extends Component {
    render() {
        return (
            <div>
                <h1>Coursebooking</h1>

                <nav>  
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    {" | "}
                    <Link to="/about" activeClassName="active">About</Link>
                    {" | "}
                    <Link to="/courses" activeClassName="active">Courses</Link>
                </nav>
            </div>
        );
    };
};

export default HeaderContainer;