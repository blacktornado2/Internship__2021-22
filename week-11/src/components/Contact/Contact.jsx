import React, { Component } from "react";
import axios from "axios";
import "./Contact.scss";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            message: ""
        };
    }

    onSubmitClick = e => {
        e.preventDefault();
        const submitData = { ...this.state };
        axios
            .post("https://reqres.in/invalid-url", submitData)
            .then(response => console.log(response))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error("There was an error!", error);
            });
    };

    render() {
        return (
            <div className='contact-us'>
                <form className='contact-form'>
                    <div className='form-item form-heading'>Contact Us</div>
                    <div className='form-item'>
                        <input
                            value={this.state.name}
                            onChange={e =>
                                this.setState({ name: e.target.value })
                            }
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Enter Name'
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            value={this.state.email}
                            onChange={e =>
                                this.setState({ email: e.target.value })
                            }
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter E-mail'
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            value={this.state.phoneNumber}
                            onChange={e =>
                                this.setState({ phoneNumber: e.target.value })
                            }
                            type='number'
                            name=''
                            id=''
                            placeholder='Enter Phone Number'
                        />
                    </div>
                    <div className='form-item'>
                        <input
                            value={this.state.message}
                            onChange={e =>
                                this.setState({ message: e.target.value })
                            }
                            type='text'
                            name='message'
                            id='message'
                            placeholder='Enter Message'
                        />
                    </div>

                    <div className='form-item'>
                        <input
                            type='submit'
                            className='btn'
                            value='SUBMIT'
                            onClick={e => this.onSubmitClick(e)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
