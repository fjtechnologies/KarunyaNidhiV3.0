import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            {/* Main Slider Start */}
            <section className="main-slider">
                <div
                    className="swiper-container thm-swiper__slider"
                    data-swiper-options='{"slidesPerView": 1, "loop": true,
                          "effect": "fade",
                          "pagination": {
                          "el": "#main-slider-pagination",
                          "type": "bullets",
                          "clickable": true
                          },
                          "navigation": {
                          "nextEl": ".main-slider-button-next",
                          "prevEl": ".main-slider-button-prev",
                          "clickable": true
                          },
                          "autoplay": {
                          "delay": 5000
                          }}'
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div
                                className="image-layer"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/main-slider/slider-1-1.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="swiper-slide__inner">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <p>Helping Hands</p>
                                            <h2>
                                                Help the Poor <br /> in Need
                    </h2>
                                            <a href="#" className="thm-btn">
                                                Learn More
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="image-layer"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/main-slider/slider-1-2.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="swiper-slide__inner">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <p>Helping Them Today</p>
                                            <h2>
                                                Help the Poor <br /> in Need
                    </h2>
                                            <a href="#" className="thm-btn">
                                                Learn More
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="image-layer"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/main-slider/slider-1-3.jpg)",
                                }}
                            />
                            <div className="container">
                                <div className="swiper-slide__inner">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <p>Helping Them Today</p>
                                            <h2>
                                                Help the Poor <br /> in Need
                    </h2>
                                            <a href="about.html" className="thm-btn">
                                                Learn More
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" id="main-slider-pagination" />
                    <div className="main-slider-nav">
                        <div className="main-slider-button-prev">
                            <span className="icon-right-arrow" />
                        </div>
                        <div className="main-slider-button-next">
                            <span className="icon-right-arrow" />{" "}
                        </div>
                    </div>
                </div>
            </section>
            {/* Main Slider End */}
            {/*Three Icon Start*/}
            <section className="feature-one">
                <div className="container">
                    <div className="feature-one__inner">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                {/*Three Icon Single*/}
                                <div className="feature-one__single feature-one__single-first-item">
                                    <div className="feature-one__icon-wrap">
                                        <div className="feature-one__icon-box">
                                            <span className="icon-heart" />
                                            <div className="feature-one__icon-box-img">
                                                <img
                                                    src="assets/images/resources/three_iocn_box_bg.png"
                                                    alt
                                                />
                                            </div>
                                        </div>
                                        <div className="feature-one__icon-text-box">
                                            <h4>
                                                Become <br /> Volunteer
                    </h4>
                                        </div>
                                    </div>
                                    <p className="feature-one__icons-single-text">
                                        There are many of lorem Ipsum, but the majori have suffered
                                        alteration in some form.
                </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/*Three Icon Single*/}
                                <div className="feature-one__single feature-one__single-second-item">
                                    <div className="feature-one__icon-wrap">
                                        <div className="feature-one__icon-box feature-one__icon-box-two">
                                            <span className="icon-wallet-filled-money-tool" />
                                            <div className="feature-one__icon-box-img">
                                                <img
                                                    src="assets/images/resources/three_iocn_box_bg-2.png"
                                                    alt
                                                />
                                            </div>
                                        </div>
                                        <div className="feature-one__icon-text-box">
                                            <h4>
                                                Quick <br /> Fundraise
                    </h4>
                                        </div>
                                    </div>
                                    <p className="feature-one__icons-single-text">
                                        There are many of lorem Ipsum, but the majori have suffered
                                        alteration in some form.
                </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/*Three Icon Single*/}
                                <div className="feature-one__single feature-one__single-third-item">
                                    <div className="feature-one__icon-wrap">
                                        <div className="feature-one__icon-box feature-one__icon-box-three">
                                            <span className="icon-charity" />
                                            <div className="feature-one__icon-box-img">
                                                <img
                                                    src="assets/images/resources/three_iocn_box_bg-3.png"
                                                    alt
                                                />
                                            </div>
                                        </div>
                                        <div className="feature-one__icon-text-box">
                                            <h4>
                                                Start <br /> Donating
                    </h4>
                                        </div>
                                    </div>
                                    <p className="feature-one__icons-single-text">
                                        There are many of lorem Ipsum, but the majori have suffered
                                        alteration in some form.
                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Three Icon End*/}
            {/*Welcome One Start*/}
            <section
                className="welcome-one"
                style={{
                    backgroundImage: "url(assets/images/backgrounds/welcome_one_bg.jpg)",
                }}
            >
                <div
                    className="welcome-one-hands"
                    style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/welcome_one_hands.png)",
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome-one__left">
                                <div
                                    className="welcome-one__img wow slideInLeft"
                                    data-wow-delay="100ms"
                                >
                                    <img src="assets/images/resources/welcome_one_img_1.jpg" alt />
                                    <div className="welcome-one__badge">
                                        <img
                                            src="assets/images/resources/welcome_one_badge.png"
                                            alt
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome-one__right">
                                <div className="block-title text-left">
                                    <h4>About Us</h4>
                                    <h2>Karunyanidhi</h2>
                                </div>
                                <p className="welcome-one__text">
                                    Karunyanidhi is the project launched by the diocese of Adilabad
                                    as part of its social responsibility for charitable activities
                                    among the sick people. It is playing a vital role during this
                                    unfortunate time of pandemic by functioning as the instrument
                                    with which the community is reached out to.
              </p>
                                <div className="flex-container">
                                    <div className="welcome-one__campaigns">
                                        <div className="iocn">
                                            <span className="icon-vegetable" />
                                        </div>
                                        <div className="text">
                                            <article>
                                                <h2 className="counter">1000</h2>
                                                <span>+</span>
                                            </article>
                                            <p>COVID-19 Relief Meals</p>
                                        </div>
                                    </div>
                                    <div className="welcome-one__campaigns">
                                        <div className="iocn">
                                            <i className="fas fa-smile-beam" />
                                        </div>
                                        <div className="text">
                                            <article>
                                                <h2 className="counter">800</h2>
                                                <span>+</span>
                                            </article>
                                            <p>Happiness Kits</p>
                                        </div>
                                    </div>
                                    <div className="welcome-one__campaigns">
                                        <div className="iocn">
                                            <i className="fas fa-hamburger" />
                                        </div>
                                        <div className="text">
                                            <article>
                                                <h2 className="counter">400</h2>
                                                <span>+</span>
                                            </article>
                                            <p>Mid-Day Meals</p>
                                        </div>
                                    </div>
                                    <div className="welcome-one__campaigns">
                                        <div className="iocn">
                                            <i className="fas fa-concierge-bell" />
                                        </div>
                                        <div className="text">
                                            <article>
                                                <h2 className="counter">200</h2>
                                                <span>+</span>
                                            </article>
                                            <p>Anganwadi Meals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Welcome One End*/}
            {/*Popular Causes Start*/}
            <section className="popular-causes">
                <div className="container">
                    <div className="block-title text-left">
                        <h4>Help the People</h4>
                        <h2>Our Popular Campaigns</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="popular-causes__carousel owl-theme owl-carousel">
                                {/*Campaigns Single*/}
                                <div className="popular-causes__sinlge">
                                    <div className="popular-causes__img">
                                        <img
                                            src="assets/images/resources/popular-causes-img-3.jpg"
                                            alt
                                        />
                                        <div className="popular-causes__category">
                                            <p>Education</p>
                                        </div>
                                    </div>
                                    <div className="popular-causes__content">
                                        <div className="popular-causes__title">
                                            <h3>
                                                <a href="campaign-details.html">Smile</a>
                                            </h3>
                                            <p>
                                                Aliq is notm hendr erit a augue insu image pellen tes.
                    </p>
                                        </div>
                                        <div className="popular-causes__progress">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="36%">
                                                    <div className="count-text">36%</div>
                                                </div>
                                            </div>
                                            <div className="popular-causes__goals">
                                                <p>
                                                    <span>₹ 32625.00</span> Raised
                      </p>
                                                <p>
                                                    <span> ₹ 10000.00</span> Goal
                      </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Campaigns Single*/}
                                <div className="popular-causes__sinlge">
                                    <div className="popular-causes__img">
                                        <img
                                            src="assets/images/resources/popular-causes-img-2.jpg"
                                            alt
                                        />
                                        <div className="popular-causes__category">
                                            <p>Education</p>
                                        </div>
                                    </div>
                                    <div className="popular-causes__content">
                                        <div className="popular-causes__title">
                                            <h3>
                                                <a href="campaign-details.html">
                                                    Education for Poor Children
                      </a>
                                            </h3>
                                            <p>
                                                Aliq is notm hendr erit a augue insu image pellen tes.
                    </p>
                                        </div>
                                        <div className="popular-causes__progress">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="36%">
                                                    <div className="count-text">36%</div>
                                                </div>
                                            </div>
                                            <div className="popular-causes__goals">
                                                <p>
                                                    <span>₹ 32625.00</span> Raised
                      </p>
                                                <p>
                                                    <span> ₹ 10000.00</span> Goal
                      </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Campaigns Single*/}
                                <div className="popular-causes__sinlge">
                                    <div className="popular-causes__img">
                                        <img
                                            src="assets/images/resources/popular-causes-img-1.jpg"
                                            alt
                                        />
                                        <div className="popular-causes__category">
                                            <p>Food</p>
                                        </div>
                                    </div>
                                    <div className="popular-causes__content">
                                        <div className="popular-causes__title">
                                            <h3>
                                                <a href="campaign-details.html">Let's help India</a>
                                            </h3>
                                            <p>
                                                Aliq is notm hendr erit a augue insu image pellen tes.
                    </p>
                                        </div>
                                        <div className="popular-causes__progress">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="36%">
                                                    <div className="count-text">36%</div>
                                                </div>
                                            </div>
                                            <div className="popular-causes__goals">
                                                <p>
                                                    <span>₹ 32625.00</span> Raised
                      </p>
                                                <p>
                                                    <span> ₹ 10000.00</span> Goal
                      </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Popular Causes One End*/}
            {/*We Are Helping Start*/}
            <section
                className="we-are-helping jarallax"
                data-jarallax
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                    backgroundImage: "url(assets/images/backgrounds/we_are_helping_bg.jpg)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="we-are-helping__left">
                                <div className="block-title text-left">
                                    <h4>Helping Today</h4>
                                    <h2>We’re Helping People in Need Around the World</h2>
                                </div>
                                <div className="we-are-helping__points ml-0">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-stethoscope" />
                                            </div>
                                            <div className="text">
                                                <h4>Covid Care Centre</h4>
                                                <p>
                                                    Offers Covid care centre where extremely poor, affected
                                                    villagers can stay in isolation with dignity thus
                                                    stifling the rapid spread of the disease in the villages
                      </p>
                                                <a
                                                    href="assets/Brochure Covid 19 Response_compressed.pdf"
                                                    target="_blank"
                                                    download
                                                >
                                                    <img
                                                        src="assets/images/resources/pdf-icon.png"
                                                        alt="Brochure"
                                                    />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="we-are-helping__points">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-vegetable" />
                                        </div>
                                        <div className="text">
                                            <h4>Hunger free adilabad diocese program</h4>
                                            <p>
                                                People can make calls to a toll free number and grocery
                                                kits will be at their doorstep on the same day.
                    </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-help" />
                                        </div>
                                        <div className="text">
                                            <h4>Medical team to the villages</h4>
                                            <p>
                                                A medical team was formed when the pandemic became
                                                uncontrollably widespread in the region with the help of
                                                Sister Doctors’ Association.
                    </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*We Are Helping End*/}
            {/*We Need Help Start*/}
            <section className="we-need-help">
                <div className="we-nned-help-bg">
                    <img src="assets/images/resources/we_need_help.jpg" alt />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="we-need-help__left">
                                <div className="block-title text-left">
                                    <h4>Show your care and support</h4>
                                    <h2>Make your own day of charity</h2>
                                </div>
                                <div className="you-can-help__left">
                                    <h3>Choose an occassion</h3>
                &nbsp;
                <div className="you-can-help__three-icon">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-donation" />
                                                </div>
                                                <div className="text">
                                                    <p>Celebration</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-donation" />
                                                </div>
                                                <div className="text">
                                                    <p>In honour of</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-donation" />
                                                </div>
                                                <div className="text">
                                                    <p>In memory of</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="we-need-help__right">
                                <div className="we-need-help__img">
                                    <img src="assets/images/resources/we_need_help_img.jpg" alt />
                                    <a className="we-need-help__give" href="donate.html">
                                        <div className="icon">
                                            <span className="icon-charity-1" />
                                        </div>
                                        <div className="text">
                                            <h4>
                                                Let’s Give us your <br /> Helping Hand
                    </h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*We Need Help End*/}
            {/*Testimonials One Start*/}
            <section className="testimonials-one">
                <div
                    className="testimonials-one-bg"
                    style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/testimonials_one_bg.jpg)",
                    }}
                />
                <div className="testimonials-one__container-box">
                    <div className="block-title text-center">
                        <h4>Happy People</h4>
                        <h2>What They Say</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div
                                className="thm-swiper__slider swiper-container"
                                data-swiper-options='{"spaceBetween": 100, "slidesPerView": 4, "autoplay": { "delay": 5000 }, "pagination": {
                                      "el": "#testimonials-one__pagination",
                                      "type": "bullets",
                                      "clickable": true
                                      },
                                      "navigation": {
                                      "nextEl": ".latest_properties_next",
                                      "prevEl": ".latest_properties_prev",
                                      "clickable": true
                                      },
                                      "breakpoints": {
                                      "0": {
                                      "spaceBetween": 30,
                                      "slidesPerView": 1
                                      },
                                      "425": {
                                      "spaceBetween": 30,
                                      "slidesPerView": 1
                                      },
                                      "575": {
                                      "spaceBetween": 30,
                                      "slidesPerView": 1
                                      },
                                      "767": {
                                      "spaceBetween": 30,
                                      "slidesPerView": 2
                                      },
                                      "991": {
                                      "spaceBetween": 20,
                                      "slidesPerView": 3
                                      },
                                      "1289": {
                                      "spaceBetween": 30,
                                      "slidesPerView": 3
                                      },
                                      "1440": {
                                      "spaceBetween": 30,
                                      "slidesPerView": 3
                                      }
                                      }}'
                            >
                                <div className="swiper-wrapper testimonial_wrapper">
                                    <div className="swiper-slide">
                                        {/*Testimonials One Single*/}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__quote">
                                                <img
                                                    src="assets/images/testimonials/testimonials-one-icon-1.png"
                                                    alt
                                                />
                                            </div>
                                            <div className="testimonials-one__text">
                                                <p>
                                                    There are many variations of passages of lorem ipsum
                                                    available but the majority have suffered alteration in
                                                    some form.
                      </p>
                                                <h3>- Jaison Joy</h3>
                                            </div>
                                            <div className="testimonials-one__author-img">
                                                <img
                                                    src="assets/images/testimonials/testimonials_one_au_img_1.png"
                                                    alt
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        {/*Testimonials One Single*/}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__quote">
                                                <img
                                                    src="assets/images/testimonials/testimonials-one-icon-1.png"
                                                    alt
                                                />
                                            </div>
                                            <div className="testimonials-one__text">
                                                <p>
                                                    There are many variations of passages of lorem ipsum
                                                    available but the majority have suffered alteration in
                                                    some form.
                      </p>
                                                <h3>- Jomy Joy</h3>
                                            </div>
                                            <div className="testimonials-one__author-img">
                                                <img
                                                    src="assets/images/testimonials/testimonials_one_au_img_1.png"
                                                    alt
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        {/*Testimonials One Single*/}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__quote">
                                                <img
                                                    src="assets/images/testimonials/testimonials-one-icon-1.png"
                                                    alt
                                                />
                                            </div>
                                            <div className="testimonials-one__text">
                                                <p>
                                                    There are many variations of passages of lorem ipsum
                                                    available but the majority have suffered alteration in
                                                    some form.
                      </p>
                                                <h3>- Yohan Adilabad</h3>
                                            </div>
                                            <div className="testimonials-one__author-img">
                                                <img
                                                    src="assets/images/testimonials/testimonials_one_au_img_1.png"
                                                    alt
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        {/*Testimonials One Single*/}
                                        <div className="testimonials-one__single">
                                            <div className="testimonials-one__quote">
                                                <img
                                                    src="assets/images/testimonials/testimonials-one-icon-1.png"
                                                    alt
                                                />
                                            </div>
                                            <div className="testimonials-one__text">
                                                <p>
                                                    There are many variations of passages of lorem ipsum
                                                    available but the majority have suffered alteration in
                                                    some form.
                      </p>
                                                <h3>- Jomy Joy</h3>
                                            </div>
                                            <div className="testimonials-one__author-img">
                                                <img
                                                    src="assets/images/testimonials/testimonials_one_au_img_1.png"
                                                    alt
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="swiper-pagination"
                                id="testimonials-one__pagination"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*Testimonials One End*/}
            {/*News One Start*/}
            <section className="news-one">
                <div className="news-one-bg" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="block-title text-left">
                                <h4>From the Blog</h4>
                                <h2>News &amp; Articles</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="news-one__top-text">
                                <p>
                                    There are many variations of passages of lorem available but the
                                    majority have suffered in some form.
              </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            {/*News One Single*/}
                            <div
                                className="news-one__single wow fadeInUp"
                                data-wow-delay="100ms"
                            >
                                <div className="news-one__img">
                                    <div className="news-one__img-box">
                                        <img src="assets/images/blog/news_one_img_1.jpg" alt />
                                        <a href="#" />
                                    </div>
                                    <div className="news-one__date-box">
                                        <p>
                                            23 <br /> Dec
                  </p>
                                    </div>
                                </div>
                                <div className="news-one__content">
                                    <ul className="list-unstyled news-one__meta">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-user-circle" /> Admin
                    </a>
                                        </li>
                                        <li>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-comments" /> 2 Comments
                    </a>
                                        </li>
                                    </ul>
                                    <div className="news-one__title">
                                        <h3>
                                            <a href="#">Grocery kits will be at your doorstep</a>
                                        </h3>
                                    </div>
                                    <a href="#" className="thm-btn news-one__btn">
                                        More
                </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            {/*News One Single*/}
                            <div
                                className="news-one__single wow fadeInUp"
                                data-wow-delay="200ms"
                            >
                                <div className="news-one__img">
                                    <div className="news-one__img-box">
                                        <img src="assets/images/blog/news_one_img_2.jpg" alt />
                                        <a href="#" />
                                    </div>
                                    <div className="news-one__date-box">
                                        <p>
                                            23 <br /> Dec
                  </p>
                                    </div>
                                </div>
                                <div className="news-one__content">
                                    <ul className="list-unstyled news-one__meta">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-user-circle" /> Admin
                    </a>
                                        </li>
                                        <li>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-comments" /> 2 Comments
                    </a>
                                        </li>
                                    </ul>
                                    <div className="news-one__title">
                                        <h3>
                                            <a href="#">Hunger free Adilabad diocese program</a>
                                        </h3>
                                    </div>
                                    <a href="#" className="thm-btn news-one__btn">
                                        More
                </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            {/*News One Single*/}
                            <div
                                className="news-one__single wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="news-one__img">
                                    <div className="news-one__img-box">
                                        <img src="assets/images/blog/news_one_img_3.jpg" alt />
                                        <a href="#" />
                                    </div>
                                    <div className="news-one__date-box">
                                        <p>
                                            23 <br /> Dec
                  </p>
                                    </div>
                                </div>
                                <div className="news-one__content">
                                    <ul className="list-unstyled news-one__meta">
                                        <li>
                                            <a href="#">
                                                <i className="far fa-user-circle" /> Admin
                    </a>
                                        </li>
                                        <li>
                                            <span>/</span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-comments" /> 2 Comments
                    </a>
                                        </li>
                                    </ul>
                                    <div className="news-one__title">
                                        <h3>
                                            <a href="#">Medical team to the village</a>
                                        </h3>
                                    </div>
                                    <a href="#" className="thm-btn news-one__btn">
                                        More
                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*News One End*/}
            {/*Gallery One Start*/}
            <section className="gallery-one">
                <div className="gallery-one__container-box clearfix">
                    <div
                        className="thm-swiper__slider swiper-container gallery-one__content"
                        data-swiper-options='{"spaceBetween": 20, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                  "0": {
                  "spaceBetween": 10,
                  "slidesPerView": 1
                  },
                  "375": {
                  "spaceBetween": 20,
                  "slidesPerView": 1
                  },
                  "575": {
                  "spaceBetween": 20,
                  "slidesPerView": 2
                  },
                  "767": {
                  "spaceBetween": 20,
                  "slidesPerView": 3
                  },
                  "991": {
                  "spaceBetween": 20,
                  "slidesPerView": 4
                  },
                  "1199": {
                  "spaceBetween": 20,
                  "slidesPerView": 5
                  }
                  }}'
                    >
                        {/* swiper wrapper start */}
                        <div className="swiper-wrapper gallery-wrapper">
                            <div className="swiper-slide">
                                <div className="gallery-one__img-box">
                                    <img src="assets/images/gallery/gallery_one_img_1.jpg" alt />
                                    <div className="gallery-one__iocn">
                                        <a
                                            href="assets/images/gallery/gallery_one_img_1.jpg"
                                            className="img-popup"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-one__img-box">
                                    <img src="assets/images/gallery/gallery_one_img_2.jpg" alt />
                                    <div className="gallery-one__iocn">
                                        <a
                                            href="assets/images/gallery/gallery_one_img_2.jpg"
                                            className="img-popup"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-one__img-box">
                                    <img src="assets/images/gallery/gallery_one_img_3.jpg" alt />
                                    <div className="gallery-one__iocn">
                                        <a
                                            href="assets/images/gallery/gallery_one_img_3.jpg"
                                            className="img-popup"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-one__img-box">
                                    <img src="assets/images/gallery/gallery_one_img_4.jpg" alt />
                                    <div className="gallery-one__iocn">
                                        <a
                                            href="assets/images/gallery/gallery_one_img_4.jpg"
                                            className="img-popup"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-one__img-box">
                                    <img src="assets/images/gallery/gallery_one_img_5.jpg" alt />
                                    <div className="gallery-one__iocn">
                                        <a
                                            href="assets/images/gallery/gallery_one_img_5.jpg"
                                            className="img-popup"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.swiper-wrapper */}
                    </div>
                    {/* end .swiper-container */}
                </div>
            </section>
            {/*Gallery One End*/}
        </div>
    );
  }
}

export default Home
