import React, { Component } from 'react'
import "./home.css";
import {Navigate} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="navbar">
        <div id="left">
            <img src="#" alt="Logo"/>
        </div>
        <div id="mid">
            <ul>
                <li className="item"><a href="/">HOME</a></li>
                <li className="item"><a href="#about">ABOUT US</a></li>
                <li className="item"><a href="/details">ADD DETAILS</a></li>
                <li className="item"><a href="/">CONTACT US</a></li>
                <li className="item"><a href="/Faqmain">FAQ</a></li>

            </ul>
        </div>
        <div id ='last'>
            <ul>
                <li className="item">
                    <form action="/Login">
                            <button id="log-in" onClick={() => Navigate("/Login")} >Log In</button>
                    </form>
                </li>
                <li className="item">
                    <form action="/Register">
                        <button id="log-in" onClick={() => Navigate("/Register")} >Sign In</button>
                    </form>
                </li>
            </ul>

        </div>
        </nav>
      </div>
    )
  }
}
