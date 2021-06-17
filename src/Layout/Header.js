import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (            
                <div className="site-header__header-one-wrap clearfix">
                    <div className="container">
                        <div className="site-header__logo-box float-left hidden-sm-down">
                            <div className="site-header__logo">
                                <a href="/">
                                    <img src="assets/images/resources/logo.png" alt />
                                </a>
                            </div>
                        </div>
                        <header className="main-nav__header-one">
                            <div className="main-nav__header-one__top clearfix">
                                <div className="main-nav__header-one__top-left">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-square-alt" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="tel:000 111 2222">000 111 2222</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <a href="mailto:needhelp@company.com">
                                                        info@karunyanidhi.com
                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-nav__header-one__top-right">
                                    <div className="main-nav__header-one__top-social">
                                        <a href="#">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-google" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <nav className="header-navigation stricky">
                                <div className="container clearfix">
                                    {/* Brand and toggle get grouped for better mobile display */}
                                    <div className="main-nav__left main-nav__left-one float-left">
                                        <a href="#" className="side-menu__toggler">
                                            <i className="fa fa-bars" />
                                        </a>
                                        <div className="main-nav__main-navigation clearfix">
                                            <ul className=" main-nav__navigation-box float-left">
                                                <li className="current">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Donations</a>
                                                </li>
                                                <li>
                                                    <a href="#">Events</a>
                                                </li>
                                                <li>
                                                    <a href="#">News</a>
                                                </li>
                                                <li>
                                                    <a href="#">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /.navbar-collapse */}
                                    </div>
                                    <div className="site-header__logo-box float-left hidden-sm-up">
                                        <div className="site-header__logo">
                                            <a href="index.html">
                                                <img src="assets/images/resources/logo.png" alt />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="main-nav__right main-nav__right-one float-right">
                                        <div className="main-nav__right__btn-one">
                                            <a href="/donate">
                                                <i className="fas fa-heart" />
                  Donate
                </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    </div>
                </div>            
        );
    }
}

export default Header