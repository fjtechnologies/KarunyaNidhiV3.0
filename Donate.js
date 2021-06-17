import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const TITLE = 'Donate || Karunyanidhi'
export class Donate extends Component {
    static displayName = Donate.name;
    constructor(props) {
        super(props);
        // this.state = {firstName:'',lastName:''};
        // this.handleInputChanged =()=> this.handleInputChanged();
    }

    handleInputChanged(event) {
        this.setState({
          searchQuery: event.target.value
        });
      }

    async handleRazorpayPayment(e) {
        e.preventDefault();        
        const data = new FormData(e.target);    
        console.log(data);    
       await axios.post('https://localhost:44311/api/payment/initialize',data,
       { 
           headers: { "Content-Type": "application/json" } 
        }).then(res => {
        const options = {
            key: 'rzp_test_fuvkKJZqahJhLD',
            amount: res.data.amount,
            name: 'Karunyanidhi',
            description: 'Diocese of Adilabad',
            image: 'http://localhost:3000/assets/images/favicons/android-chrome-512x512.png',
            order_id: res.id,
            handler: (response) => {
              axios.post('https://localhost:44311/api/payment/confirm', response,
              {
                  headers: {'Access-Control-Allow-Origin':true}
                },)
              .then(response=>alert(response.data))
              .catch((err)=>console.log(err))
            },
            prefill: {
              name: "",
              email: "",
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
                                    <form onSubmit={this.handleRazorpayPayment} className="donate-form-validated donate-one__form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="First name" name="FirstName" required/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="Last name" name="LastName" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row"> 
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="PAN number" name="PAN" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="number" placeholder="Amount" name="Amount" min="1" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="email"
                                                        placeholder="Email address"
                                                        name="Email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="text"
                                                        placeholder="Mobile number"
                                                        name="Mobile"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="City" name="City" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="text"
                                                        id="dob"
                                                        name="DOB"
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
                                                <button type="submit" className="thm-btn donate-form__btn" >
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