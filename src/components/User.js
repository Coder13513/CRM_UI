import React, { Component, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
 import axios from 'axios';

import Api from "../components/Api"
import { API_PATH } from "../components/Global";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import UserEdit from "../components/UserEdit";
// import ArchiveList from "../components/ArchiveList";
// import ArchiveEdit from "../components/ArchiveEdit";

export default function ArchiveFunction() {

    let { path, url } = useRouteMatch();
    let [archivecount, setArchivecount] = useState('')
    
    const ticket = localStorage.getItem("authToken")


    useEffect(() => {
        axios({
            method: 'GET',
            url:  API_PATH.URL + "auth/user/",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ticket 
            },
        })
            .then(response => {
                console.log(response);
                let Archives = response.data;
                archivecount = (Archives.length)
                setArchivecount(archivecount);


            })
    }
    );

    return (
        <div>
            <div class="container mt-5 ">
                <div class="box">
                    <div class="div1" >
                        <a class="image"><img src="U.png" alt="icon" width="50px" height="50px" /></a>
                        <a class="count">
                            {archivecount}
                        </a>
                        <a class="option">User</a>
                    </div>
                    <div class="div2">
                        <Link to={`${url}/Edit`}>
                            <a role="button" class="btn action-btns" ><i class="fa fa-edit" >Edit</i></a>
                        </Link>

                        <Link to={`${url}/Add`}>
                            <a role="button" class="btn action-btns" ><i class="fa fa-plus" >Add</i></a>
                        </Link >
                        <Link to={`${url}/List`}>
                            <a role="button" class="btn action-btns"><i class="fa fa-list" >List</i></a>
                        </Link>
                    </div>
                </div>
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

        if (topicId === "Add") {
            return <UserForm />
        }
        if (topicId === "Edit") {
            return <UserEdit />
        }
        if (topicId === "List") {
            return <UserList />
        }
        // else{
        //     return    <h2> No</h2>    
        // }
    }