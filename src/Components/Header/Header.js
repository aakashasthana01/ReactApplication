import React, { Component } from 'react';

class NavHeader extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/home">CodeGeeks</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="/home">Home</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavHeader;
