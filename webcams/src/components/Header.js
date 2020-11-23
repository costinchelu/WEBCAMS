import React, {Component} from 'react';
import "../style/Header.css";

// componenta pentru afișarea header-ului aplicației
class Header extends Component {

    render() {
        return (
             <header className="tc pv4 pv5-ns header1">
                 <img
                     src="https://image.flaticon.com/icons/svg/718/718806.svg"
                      className="br-100 pa1 ba b--black-10 h3 w3"
                      alt="avatar"/>
                     <h1
                         className="f5 f4-ns fw6 mid-gray">Proiect la tehnologii web</h1>
                     <h2
                         className="f6 gray fw2 ttu tracked">Webcams streams on location</h2>
             </header>
        )
    }
}


export default Header
