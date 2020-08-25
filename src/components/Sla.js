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
 
import SlaForm from "../components/SlaForm";
import SlaList from "../components/SlaList";
import SlaEdit from "../components/SlaEdit";
import HistoryForm from "../components/HistoryForm";
import HList from "../components/HList";
import HEdit from "../components/HEdit";






export default function RadioFunction() {

    let { path, url } = useRouteMatch();
    let [archivecount, setArchivecount] = useState('')
    let [channelcount, setChannelcount] = useState('')


    useEffect(() => {
        const ticket = localStorage.getItem("authToken")
        axios({
            method: 'GET',
            url: API_PATH.URL + "sla/SLA/",
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
                url: API_PATH.URL + "sla/History/",
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
                    <a><img src="sla.png" alt="icon" width="50px" height="50px" /></a>
                    <a class="count">
                        {archivecount}
                    </a>
                    <a class="option">SLA</a>
                </div>
                <div class="div2">
                    <Link to={`${url}/SLAEdit`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
   </Link>
                    <Link to={`${url}/SLAAdd`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                    </Link>
                    <Link to={`${url}/SLAList`}>
                        < a role="button" class="btn action-btns"><i class="fa fa-list" >List</i></a>
                    </Link>
                </div>
            </div>

            <div class="box">
                <div class="div1" >
                    <a><img src="h.png" alt="icon" width="50px" height="50px" /></a>
                    <a class="count">
                        {channelcount}
                    </a>
                    <a class="option">History</a>
                </div>

                <div class="div2">
                    <Link to={`${url}/ChannelEdit`}>
                        <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
                    </Link>
                    <Link to={`${url}/HistoryAdd`}>

                        <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                    </Link>
                    <Link to={`${url}/HistoryList`}>
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

        if (topicId === "SLAAdd") {
            return <SlaForm />
        }
        if (topicId === "SLAList") {
            return <SlaList />
        }
        if (topicId === "SLAEdit") {
            return <SlaEdit />
        }
        if (topicId === "HistoryAdd") {
            return <HistoryForm />
        }
        if (topicId === "HistoryList") {
            return <HList />
        }
    //     if (topicId === "ChannelEdit") {
    //         return <RadioChannelEdit />
    //     }
      
    }




