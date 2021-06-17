import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './components/Home'
import Donate from './components/Donate'
export default class App extends Component {
  static displayName = App.name;
    loading = () => <div className="preloader">
        <img
            src="assets/images/Christian cross.gif"
            className="preloader__image"
            alt
        />
    </div>
  render () {
      return (          
          <Router>
              <this.loading></this.loading>
              <div className="page-wrapper">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/donate" component={Donate}/>                    
                </Switch>                
                <Footer/>
                  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                    <i className="fa fa-angle-up" />
                </a>
                <div className="mobile-nav__wrapper">
                    <div className="mobile-nav__overlay side-menu__toggler mobile-nav__toggler" />
                    <div className="mobile-nav__content">
                        <span className="mobile-nav__close side-menu__toggler mobile-nav__toggler">
                            <i className="fa fa-times" />
                        </span>
                        <div className="logo-box">
                            <a href="/" aria-label="logo image">
                                <img src="assets/images/resources/footer-logo.png" alt />
                            </a>
                        </div>
                        {/* /.logo-box */}
                        <div className="mobile-nav__container clearfix" />
                        {/* /.mobile-nav__container */}
                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="fas fa-envelope" />
                                <a href="mailto:info@karunyanidhi.com">info@karunyanidhi.com</a>
                            </li>
                            <li>
                                <i className="fas fa-phone-square-alt" />
                                <a href="tel:000-111-0000">000 111 0000</a>
                            </li>
                        </ul>
                        {/* /.mobile-nav__contact */}
                        <div className="mobile-nav__top">
                            <div className="mobile-nav__social">
                                <a href="#" aria-label="twitter">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#" aria-label="facebook">
                                    <i className="fab fa-facebook-square" />
                                </a>
                                <a href="#" aria-label="pinterest">
                                    <i className="fab fa-pinterest-p" />
                                </a>
                                <a href="#" aria-label="instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                            {/* /.mobile-nav__social */}
                        </div>
                        {/* /.mobile-nav__top */}
                    </div>
                  </div>
              </div>
        </Router>
        
    );
  }
}
