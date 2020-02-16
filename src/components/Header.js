import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="inner">
					<nav id="nav" className="headernav">
                    <ul>
                        <li><a className="active" href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
					</nav>
					<a href="#navPanel" class="navPanelToggle"><span className="fa fa-bars"></span></a>
				</div>
        </div>
    );
};

export default Header;