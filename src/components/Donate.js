import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const TITLE = 'Donate || Karunyanidhi'
export class Donate extends Component {
    static displayName = Donate.name;
    constructor(props) {
        super(props);
        this.state = { resp: [], loading: true };
    }

    async handleRazorpayPayment(e) {
        e.preventDefault();
        console.log("Test");
       await axios.post('https://localhost:44321/api/payment/initialize').then(res => {
        const options = {
            key: 'rzp_test_fuvkKJZqahJhLD',
            amount: 200,
            name: 'KarunyaNidhi',
            description: 'Pro Membership',
            image: '/your_logo.png',
            order_id: res.id,
            handler: (response) => {
              axios.post('https://localhost:44321/api/payment/confirm', response)
              .then(response=>alert(response.data))
              .catch((err)=>console.log(err))
            },
            prefill: {
              name: "FJTechnology",
              email: "fjtechnologies2021@mail.com",
            },
            theme: {
              color: '#F37254'
            }
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        });
 console.log("test end");
 
 };


    render() {
        return (
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                {/*Page Header Start*/}
                <section
                    className="page-header"
                    style={{
                        backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
                    }}
                >
                    <div className="container">
                        <div className="page-header__inner">
                            <h2>Donate</h2>
                            <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <span>/</span>
                                </li>
                                <li>Donate</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*Page Header End*/}
                {/*donate Page Start*/}
                <section className="donate-page">
                    <div className="container">
                        <div className="block-title text-center">
                            <h4>Donate Now</h4>
                            <h2>We’re Helping People in Need</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="donate-form">
                                    <form action className="donate-form-validated donate-one__form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="First name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="email" placeholder="Last name" name="name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="PAN number" name="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="Amount" name="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="email"
                                                        placeholder="Email address"
                                                        name="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="text"
                                                        placeholder="Mobile number"
                                                        name="phone"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="City" name="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="text"
                                                        id="dob"
                                                        name="date of birth"
                                                        placeholder="Date of birth"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="exampleCheck1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="exampleCheck1"
                                                    >
                                                        I have read through the website.......
                      </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <button type="submit" className="thm-btn donate-form__btn" onClick={this.handleRazorpayPayment} >
                                                    Donate
                    </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Donate Page End*/}
                </div>
        );
    }
}

export default Donate
