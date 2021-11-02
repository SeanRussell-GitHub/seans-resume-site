import React from "react";
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState } from 'react';
import coding from '../views/coding.gif'
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_iYEHtYDrtpk7gBe0kcaRU");

// CONTACT ME Page
function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        send(
            'service_x93h436',
            'template_al9qs7r',
            toSend,
            'user_iYEHtYDrtpk7gBe0kcaRU'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <div className='App'>
                            <form onSubmit={onSubmit}>
                                <h1 className="h1 col-lg-6 text-center font-weight-normal mb-3">Write to me</h1>
                                <h5>
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                    Your name
                                </label>
                                <input
                                    type='text'
                                    name='from_name'
                                    placeholder='from name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                /><br />
                                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                    Your email
                                </label>
                                <input
                                    type='text'
                                    name='reply_to'
                                    placeholder='you@email.com'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                /><br />
                                <input
                                    type='text'
                                    name='message'
                                    placeholder='Type your message here...'
                                    value={toSend.message}
                                    onChange={handleChange}
                                /><br /><br />
                                <Button className="mr-1" type='submit'>Submit</Button>
                                </h5>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h1 className="h1 col-lg-1 text-center font-weight-normal mb-3">Other Contact Methods</h1>
                        <div id="contact-me" className="contact">
                            <ul>
                                <h5>
                                <li><a href="mailto:emailseanrussell@gmail.com?subject=Testing out mailto!">Email</a></li>
                                <li><a href="https://github.com/SeanRussell-GitHub" target="_blank" rel="noopener noreferrer">
                                    <span>GitHub Profile</span>
                                </a>
                                </li>
                                <li><a href="https://www.linkedin.com/in/sean-russell-32880a210/" target="_blank" rel="noopener noreferrer">
                                    <span >LinkedIn Profile</span>
                                </a>
                                </li>
                                <li><a href="https://my.indeed.com/p/seanr-flh388m" target="_blank" rel="noopener noreferrer">
                                    <span >Resume on Indeed</span>
                                </a>
                                </li>
                                </h5>
                            </ul>
                        </div>
                    </div>
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src={coding}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;