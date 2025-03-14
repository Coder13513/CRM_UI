import React, { Component, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import axios from 'axios'
import { API_PATH } from "../components/Global";
 
import DeptForm from "../components/DeptForm"; 
import DList from "../components/DList"; 
import DEdit from "../components/DEdit";
import StaffForm from "../components/StaffForm";
import SList  from "../components/SList";
import SEdit from "../components/SEdit";



export default function RadioFunction() {

    let { path, url } = useRouteMatch();
    let [archivecount, setArchivecount] = useState('')
    let [channelcount, setChannelcount] = useState('')


    useEffect(() => {
        const ticket = localStorage.getItem("authToken")
        axios({
            method: 'GET',
            url: API_PATH.URL + "hr/dept/",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ticket             },
        })
            .then(response => {
                console.log(response);
                let Archives = response.data;
                archivecount = (Archives.length)
                setArchivecount(archivecount);


            })
            axios({
                method: 'GET',
                url: API_PATH.URL + "hr/staff/",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer'+ticket 
                },
            })
                .then(response => {
                    console.log(response);
                    let Archives = response.data;
                    channelcount = (Archives.length)
                    setChannelcount(channelcount);
    
    
                })
    });

    return (
        <div>
        <div class="container mt-5 ">

            <div class="box">
                <div class="div1" >
                    <a><img src="de.png" alt="icon" width="50px" height="50px" /></a>
                    <a class="count">
                        {archivecount}
                    </a>
                    <a class="option">Department</a>
                </div>
                <div class="div2">
                    <Link to={`${url}/DepartmentEdit`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
   </Link>
                    <Link to={`${url}/DepartmentAdd`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                    </Link>
                    <Link to={`${url}/DepartmentList`}>
                        < a role="button" class="btn action-btns"><i class="fa fa-list" >List</i></a>
                    </Link>
                </div>
            </div>

            <div class="box">
                <div class="div1" >
                    <a><img src="sp.png" alt="icon" width="50px" height="50px" /></a>
                    <a class="count">
                        {channelcount}
                    </a>
                    <a class="option">Staff Profile</a>
                </div>

                <div class="div2">
                    <Link to={`${url}/StaffEdit`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
                    </Link>
                    <Link to={`${url}/staffAdd`}>

                        <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                    </Link>
                    <Link to={`${url}/StaffList`}>
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

        if (topicId === "DepartmentAdd") {
            return <DeptForm />
        }
        if (topicId === "DepartmentList") {
            return <DList />
        }
        if (topicId === "DepartmentEdit") {
            return <DEdit />
        }
        if (topicId === "staffAdd") {
            return <StaffForm />
        }
        if (topicId === "StaffList") {
            return <SList />
        }
        if (topicId === "StaffEdit") {
            return <SEdit />
        }
      
    }




