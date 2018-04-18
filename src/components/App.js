import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from './container/HeaderContainer/HeaderContainer';

class App extends Component {
    render() { 
        return (
            <div>
                <HeaderContainer />
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
 
export default App;