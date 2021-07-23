import React from "react";

function Header(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-brand">Welcome</div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">User Form</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/stopwatch">StopWatch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/todos">Todos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Header;