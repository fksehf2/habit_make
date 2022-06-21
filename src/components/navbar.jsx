import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className='navbar'>
                <i className='navbar-logo fa-regular fa-bell'></i>
                <span>Make a habit!</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar; 