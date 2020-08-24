import React, { useState, useEffect, Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";

// import { Redirect } from "react-router-dom";
import Finance from './Finance';
import Hr from './Hr';
import Payroll from './Payroll';
import Project from './Project';
import Sla from './Sla';
import Services from './Services';
import Employee from './Employee';
import Company from './Company';
import Customer from './Customer';
import Vendor from './Vendor';
import User from './User';
import BusinessForm from './BusinessForm';
import Breadcrumb from '../components/Breadcrumb';

export class Nav extends Component {

    constructor(props) {
        super(props)

        const ticket = localStorage.getItem("authToken")
    
        // let LogIn=true

       

        // if (ticket == null) {
          
        //     LogIn = false
          
        // }

        // this.state = {
        //     LogIn 
        //    }
             
    
}

//  logout=()=>{
//        localStorage.removeItem("authToken");
//     this.props.history.push("/logout");
// };


render() {
    // if (this.state.LogIn === false) {
    //     return < Redirect to="/" />
    // }

    return (

        <Router>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-2" >
                        <div className="sidebar">
                            <div className="btn-group-vertical">
                                <div className="logo_image">
                                <a ><img alt="logo" src="logo_white.png" width="100%" height=" 20%" /></a>
                                </div>
                                <div class="menu">
                                {/* <Link to="/Donut">
                                        <a type="button" className="btn text-light"><i class="fa fa-home"></i> Home</a>
                                    </Link> */}
                                    <Link to="/User">
                                        <a type="button" className="btn text-light"><i className="fa fa-user-plus mr-3"></i> User</a>
                                    </Link>
                                    <Link to="/Employee">
                                        <a type="button" className="btn text-light"><i className="fa fa-black-tie mr-3" ></i>Employee </a>
                                    </Link>
                                    <Link to="/Customer">
                                        <a type="button" className="btn text-light"><i className="fa fa-user mr-3"></i> Customer</a>
                                    </Link>
                                    <Link to="/Company">
                                        <a type="button" className="btn text-light"><i className="fa fa-industry mr-3"></i>Company</a>
                                    </Link>
                                    <Link to="/Vendor">
                                        <a type="button" className="btn text-light"><i className="fa fa-user-o mr-3"></i>Vendor</a>
                                    </Link>                             
                                  
                                   
                                    <Link to="/Finance">
                                        <a type="button" className="btn text-light"><i className="fa fa-money mr-3"></i> Finance</a>
                                    </Link>
                                    <Link to="/Hr">
                                        <a type="button" className="btn text-light"><i className="fa fa-user-circle-o mr-3"></i> HR</a>
                                    </Link>
                                    <Link to="/Payroll">
                                        <a type="button" className="btn text-light"><i className="fa fa-rupee mr-3"></i>Payroll</a>
                                    </Link>
                                    <Link to="/Project">
                                        <a type="button" className="btn text-light"><i className="fa fa-check-square-o mr-3"></i>PM</a>
                                    </Link>                                
                                  
                                   
                                    <Link to="/Sla">
                                        <a type="button" className="btn text-light"><i className="fa fa-handshake-o mr-3"></i>SLA </a>
                                    </Link>
                                    <Link to="/Services">
                                        <a type="button" className="btn text-light"><i className="fa fa-gears mr-3"></i> Services</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10" >
                        <nav class="navbar navbar-expand-sm ">
                            <ul class="navbar-nav">
                                <Breadcrumb />
                            </ul>
                            <ul class="navbar-nav mx-auto  ">
                                <div class="maintitle">
                                    <h1>CRM</h1>
                                    <p>Management Dashboard </p>
                                </div>
                            </ul>
                            <ul class="navbar-nav ml-auto">

                                <li>
                                    {/* <Link to="/logout"> */}
                                        <button className="btn btn-mylogout " onClick={this.logout}><i class=" fa fa-sign-out"></i> Logout</button>
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            {/* <Route path="/Donut"> <Stack/>  </Route> */}
                            <Route path="/User"> <User /> </Route>  
                            <Route path="/Employee"> <Employee /> </Route>
                            <Route path="/Company"> <Company />  </Route>                
                            <Route path="/Customer"> <Customer />  </Route>
                            <Route path="/Vendor"> <Vendor />  </Route>
                            <Route path="/Finance"> <Finance /> </Route>
                            <Route path="/Hr"> <Hr />  </Route>                
                            <Route path="/Payroll"> <Payroll />  </Route>
                            <Route path="/Project"> <Project />  </Route>
                            <Route path="/Sla"> <Sla />  </Route>
                            <Route path="/Services"> <Services />  </Route>
                                                 

                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}
}


export default Nav