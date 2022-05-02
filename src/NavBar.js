import React, {Component} from 'react';
import {Route,NavLink,BrowserRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
class NavBar extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className='header'>
                    <ul>
                        <li><NavLink to="/">Početna</NavLink></li>
                        <li><NavLink to="/About">O nama</NavLink></li>
                        <li><NavLink to="/Contact">Kontakt</NavLink></li>
                    </ul>
                </div> 
                <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Contact" component={Contact}/>
                    </div>         
            </BrowserRouter>
        );
    }
}
export default NavBar;