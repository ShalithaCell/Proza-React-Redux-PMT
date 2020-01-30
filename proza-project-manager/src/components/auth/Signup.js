import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : ''
    }

    SubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    TextChangeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
        return (
            <div className="container col s4">
                <form onSubmit={this.SubmitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label> 
                        <input type="email" id="email" onChange={this.TextChangeHandler} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label> 
                        <input type="password" id="password" onChange={this.TextChangeHandler} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label> 
                        <input type="text" id="firstName" onChange={this.TextChangeHandler} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last name</label> 
                        <input type="text" id="lastName" onChange={this.TextChangeHandler} required/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
