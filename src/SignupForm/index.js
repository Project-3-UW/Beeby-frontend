import React from 'react';
import "./style.css"

export default function SignupForm(props) {
    return(
        <>
        <form onSubmit={props.submit} className="SignupForm">
            <input onChange={props.change} name="email" value={props.loginState.email} placeholder="email"/>
            <input onChange={props.change} name="password" value={props.loginState.password} placeholder="password"/>
            <button>Signup</button>
        </form>
        </>
    )
}