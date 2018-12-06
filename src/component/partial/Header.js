import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    showLink = () => {
        var link = window.location.pathname;
        if(link === '/'){
            return (
                <ul className="link-list">
                    <li className='link-item home active'><Link to= {{pathname: '/'}}>Home</Link></li>
                    <li className="link-item"><Link to= {{pathname: '/projects'}}>Project</Link></li>
                    <li className="link-item"><Link to= {{pathname: '/users'}}>User</Link></li>
                </ul>
            )
        }
        if(link === '/users'){
            return (
                <ul className="link-list">
                    <li className='link-item home'><Link to= {{pathname: '/'}}>Home</Link></li>
                    <li className="link-item "><Link to= {{pathname: '/projects'}}>Project</Link></li>
                    <li className="link-item active"><Link to= {{pathname: '/users'}}>User</Link></li>
                </ul>
            )
        }
        if(link === '/projects'){
            return (
                <ul className="link-list">
                    <li className='link-item home'><Link to= {{pathname: '/'}}>Home</Link></li>
                    <li className="link-item active"><Link to= {{pathname: '/projects'}}>Project</Link></li>
                    <li className="link-item "><Link to= {{pathname: '/users'}}>User</Link></li>
                </ul>
            )
        }
    }


    render() {
        return (
            <div className="navbar-header">
                <div className="container">
                    {this.showLink()}
                </div>
            </div>
        )
    }
}
export default connect(null, null)(Header);