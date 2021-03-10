import React,{Component} from 'react';
import './Homepage.css'
import Subjects from '../Subjects/Subjects.js';
import {questionData} from "./questions";
class Homepage extends Component
{
    render()
    {
        const subjects=[
            {subjectName:"Computer Network" ,duration:"40 min",questionCount:10,icon:'fas fa-network-wired',url: '/ComputerNetworksQuiz',questions: questionData},
            {subjectName:"Operating System" ,duration:"30 min",questionCount:10,icon:'fab fa-windows',url: '/',questions: ""},
            {subjectName:"JavaScript" ,duration:"40 min",questionCount:10,icon:'fab fa-js',url: '/',questions: ""}
        ];
        return(
            <div className="background box-overlay container-fluid" data-aos="zoom-in-up" data-aos-delay='200' >
                <nav className="navbar navbar-expand-lg navbar-light" data-aos="zoom-in" data-aos-delay='500' data-aos-duration="">
                    <p className="navbar-brand " style={{paddingTop:'10px'}}>
                        <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" data-target="#dropdownmenu" style={{marginRight:'10px'}}>
                            <i className="fas fa-bars " style={{fontSize:'24 px'}}></i>
                            <ul className="dropdown-menu" id="dropdownmenu">
                                <h5 className="dropdown-header">Subject Available</h5>
                                <li className="dropdown-item">Computer Network</li>
                                <li className="dropdown-item">Operating System</li>
                                <li className="dropdown-item">JavaScript</li>
                                <li className="dropdown-divider"></li>
                                <h5 className="dropdown-header">Useful links</h5>
                                <li className="dropdown-item">About Us</li>
                            </ul>
                        </button>
                        Our Services
                    </p>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <i className="fas fa-bars " style={{fontSize:'24 px', float:'left'}}></i>
                    </button>
                    <div className="collapse navbar-collapse flex flex-row-reverse " id="navb">
                        <ul className="navbar-nav  ">
                            <li className="nav-item"> 
                                <a className="nav-link" href="#"><button className="btn"><span><i className="far fa-file"></i></span>My Quizzes</button></a>
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#"><button className="btn"><span><i className="fas fa-user-plus"></i></span>Register/Login</button></a>
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#"><button className="btn"><span><i className="fas fa-id-badge"></i></span>About Us</button></a>
                            </li>
                        </ul>
                    </div>
                </nav> 
                <div className="container">
                    <div className="row">
                        {
                            subjects.map((elements,index)=>
                            <Subjects key={elements.subjectName} data={elements} index={index}/>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Homepage;