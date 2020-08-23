import React, { Component, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
// import axios from 'axios'
// import { API_PATH } from "../components/Global";
 
import PackageForm from "../components/PackageForm";
import EEdit from "../components/Payroll/EEdit";
import EList from "../components/Payroll/EList";



import SalaryForm from "../components/SalaryForm";
import SList from "../components/Payroll/SList";
import SEdit from "../components/Payroll/SEdit";



export default function RadioFunction() {

    let { path, url } = useRouteMatch();
    let [archivecount, setArchivecount] = useState('')
    let [channelcount, setChannelcount] = useState('')


    useEffect(() => {
        const ticket = localStorage.getItem("authToken")
        // axios({
        //     method: 'GET',
        //     url: API_PATH.URL + "radio/categories/",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer'+ticket             },
        // })
        //     .then(response => {
        //         console.log(response);
        //         let Archives = response.data.results;
        //         archivecount = (Archives.length)
        //         setArchivecount(archivecount);


        //     })
        //     axios({
        //         method: 'GET',
        //         url: API_PATH.URL + "radio/channels/",
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer'+ticket 
        //         },
        //     })
        //         .then(response => {
        //             console.log(response);
        //             let Archives = response.data.results;
        //             channelcount = (Archives.length)
        //             setChannelcount(channelcount);
    
    
        //         })
    });

    return (
        <div>
        <div class="container mt-5 ">

            <div class="box">
                <div class="div1" >
                    <a><img src="category.png" alt="icon" width="50px" height="50px" /></a>
                    <a class="count">
                        {archivecount}
                    </a>
                    <a class="option">Employee Salary</a>
                </div>
                <div class="div2">
                    <Link to={`${url}/PackageEdit`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
   </Link>
                    <Link to={`${url}/PackageAdd`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                    </Link>
                    <Link to={`${url}/PackageList`}>
                        < a role="button" class="btn action-btns"><i class="fa fa-list" >List</i></a>
                    </Link>
                </div>
            </div>

            <div class="box">
                <div class="div1" >
                    <a><img src="Chan.png" alt="icon" width="50px" height="50px" /></a>
                    <a class="count">
                        {channelcount}
                    </a>
                    <a class="option">Monthly Salary</a>
                </div>

                <div class="div2">
                    <Link to={`${url}/SalaryEdit`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
                    </Link>
                    <Link to={`${url}/SalaryAdd`}>

                        <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                    </Link>
                    <Link to={`${url}/SalaryList`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-list" >List</i></a>
                    </Link>
                </div>
            </div>



                {/* ------close container/div---- */}
            </div>
      




        <Switch>
            <Route path={`${path}/:topicId`}>
                <Topic />
            </Route>
        </Switch>
    </div>



    );
}

    function Topic() {

        let { topicId } = useParams();

        if (topicId === "PackageAdd") {
            return <PackageForm />
        }
        if (topicId === "PackageList") {
            return <EList />
        }
        if (topicId === "PackageEdit") {
            return <EEdit />
        }
        if (topicId === "SalaryAdd") {
            return <SalaryForm/>
        }
        if (topicId === "SalaryList") {
            return <SList />
        }
        if (topicId === "SalaryEdit") {
            return <SEdit />
        }
      
    }




