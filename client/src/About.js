import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";

// import { Switch } from "react-router-dom";

function About() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <code> BÁO CÁO ĐỒ ÁN TỐT NGHIỆP</code><br/>
                    <code> Đề tài: ỨNG DỤNG BLOCKCHAIN TRONG PHÂN PHỐI VIDEO</code><br/>
                    <code>Sinh viên thực hiện: Nguyễn Hoài Nam - N15DCVT36</code><br/>
                    <code>Giáo viên hướng dẫn</code>
                </p>
                <a
                    className="App-link"
                    href="/" // url 
                    // target="_blank" // new tab
                    rel="noopener noreferrer"
                >
                    WELCOME
            </a>
            </header>

            <Router>
                <div>                   
                    <Switch>                  
                        <Route path="/" >
                            {/* <Home /> */}
                            {/* <Link to="/">Home</Link> */}
                        </Route>
                    </Switch>
                </div>
            </Router>

        </div>
    );
}

export default About;

// function Home() {
//     return <p> </p>
// }