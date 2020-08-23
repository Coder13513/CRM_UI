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

import ServiceForm from "../components/ServiceForm";
import ServiceList from "../components/Services/ServiceList";
import ServiceEdit from "../components/Services/ServiceEdit";
import PlanForm from "../components/PlanForm";
import PlanList from "../components/Services/PlanList";
import PlanEdit from "../components/Services/PlanEdit";
import ProductForm from "../components/ProductForm";
import ProductEdit from "../components/Services/ProductEdit";
import ProductList from "../components/Services/ProductList";






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
                        <a class="option">Plan</a>
                    </div>
                    <div class="div2">
                        <Link to={`${url}/PlanEdit`}>
                            <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
                        </Link>
                        <Link to={`${url}/PlanAdd`}>
                            <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                        </Link>
                        <Link to={`${url}/PlanList`}>
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
                        <a class="option">Product</a>
                    </div>

                    <div class="div2">
                        <Link to={`${url}/ProductEdit`}>
                            <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
                        </Link>
                        <Link to={`${url}/ProductAdd`}>

                            <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                        </Link>
                        <Link to={`${url}/ProductList`}>
                            <a role="button" class="btn action-btns"><i class="fa fa-list" >List</i></a>
                        </Link>
                    </div>
                </div>
                <div class="box">
                    <div class="div1" >
                        <a><img src="Chan.png" alt="icon" width="50px" height="50px" /></a>
                        <a class="count">
                            {channelcount}
                        </a>
                        <a class="option">Services</a>
                    </div>

                    <div class="div2">
                        <Link to={`${url}/ServiceEdit`}>
                            <a role="button" class="btn action-btns"><i class="fa fa-edit" >Edit</i></a>
                        </Link>
                        <Link to={`${url}/ServiceAdd`}>

                            <a role="button" class="btn action-btns"><i class="fa fa-plus" >Add</i></a>
                        </Link>
                        <Link to={`${url}/ServiceList`}>
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

    if (topicId === "ServiceAdd") {
        return <ServiceForm />
    }
        if (topicId === "ServiceList") {
            return <ServiceList />
        }
        if (topicId === "ServiceEdit") {
            return <ServiceEdit />
        }
    if (topicId === "PlanAdd") {
        return <PlanForm />
    }
    if (topicId === "PlanList") {
        return <PlanList />
    }
    if (topicId === "PlanEdit") {
        return <PlanEdit />
    }
    if (topicId === "ProductAdd") {
        return <ProductForm />
    }

    if (topicId === "ProductList") {
        return <ProductList />
    }

    if (topicId === "ProductEdit") {
        return <ProductEdit />
    }

}




