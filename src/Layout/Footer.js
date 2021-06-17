import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

            <div>
                {/*Site Footer One Start*/}
                <footer
                    className="site-footer"
                    style={{
                        backgroundImage: "url(assets/images/backgrounds/site_footer_bg.jpg)",
                    }}
                >
                    <div className="container">
                        <div className="site-footer__one-top">
                            <div className="row">
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="00ms"
                                >
                                    <div className="footer-widget__column footer-widget__about">
                                        <div className="footer-widget__logo">
                                            <a href="/">
                                                <img src="assets/images/resources/footer-logo.png" alt />
                                            </a>
                                        </div>
                                        <p className="footer-widget__text">
                                            Karunyanidhi is the project launched by the diocese as part of
                                            its social responsibility for charitable activities among the
                                            sick people.
                </p>
                                        <div className="site-footer__social">
                                            <a href="#" className="clr-fb">
                                                <i className="fab fa-facebook-square" />
                                            </a>
                                            <a href="#" className="clr-dri">
                                                <i className="fab fa-google" />
                                            </a>
                                            <a href="#" className="clr-ins">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="200ms"
                                >
                                    <div className="footer-widget__column footer-widget__explore clearfix">
                                        <h3 className="footer-widget__title">Explore</h3>
                                        <ul className="footer-widget__explore-list list-unstyled">
                                            <li>
                                                <a href="/donate">Donate</a>
                                            </li>
                                            <li>
                                                <a href="#">Campaigns</a>
                                            </li>
                                            <li>
                                                <a href="#">Fundraise</a>
                                            </li>
                                            <li>
                                                <a href="#">Volunteers</a>
                                            </li>
                                            <li>
                                                <a href="#">Sponsors</a>
                                            </li>
                                        </ul>
                                        <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                                            <li>
                                                <a href="#">Fundraising</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                            <li>
                                                <a href="#">Help</a>
                                            </li>
                                            <li>
                                                <a href="#">Faqs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="300ms"
                                >
                                    <div className="footer-widget__column footer-widget__contact">
                                        <h3 className="footer-widget__title">Contact</h3>
                                        <ul className="list-unstyled footer-widget__contact-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-phone-square-alt" />
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        <a href="tel:000-111-22222">000 111 2222</a>
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
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt" />
                                                </div>
                                                <div className="text">
                                                    <p>666 road, Street Name , Adilabad, Telengana</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="400ms"
                                >
                                    <div className="footer-widget__column footer-widget__support">
                                        <h3 className="footer-widget__title">Support</h3>
                                        <p className="footer-widget__support-text">
                                            Lorem ipsum dolor sit ame consect etur pisicing elit sed do
                                            eiusmod tempor incididunt ut labore.
                </p>
                                        <div className="footer-widget__support-btn">
                                            <a href="/donate">
                                                <i className="fas fa-heart" />
                    Donate
                  </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*Site Footer One End*/}
                {/*Site Footer Bottom Start*/}
                <div className="site-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-bottom__inner">
                                    <div className="site-footer-bottom__left">
                                        <p>
                                            © Copyright 2021 by <a href="#">Karunyanidhi</a>
                                        </p>
                                    </div>
                                    <ul className="site-footer-bottom__menu list-unstyled">
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <a href="#">Terms of Condition</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Site Footer Bottom End*/}
            </div>
        )
    }
}

export default Footer