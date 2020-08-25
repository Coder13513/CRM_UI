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

import ServiceForm from "../components/ServiceForm";
import ServiceList from "../components/ServiceList";
import ServiceEdit from "../components/ServiceEdit";
import PlanForm from "../components/PlanForm";
import PlanList from "../components/PlanList";
import PlanEdit from "../components/PlanEdit";
import ProductForm from "../components/ProductForm";
import ProductEdit from "../components/ProductEdit";
import ProductList from "../components/ProductList";






export default function RadioFunction() {

    let { path, url } = useRouteMatch();
    let [archivecount, setArchivecount] = useState('')
    let [channelcount, setChannelcount] = useState('')
    let [servicecount, setServicecount] = useState('')


    useEffect(() => {
        const ticket = localStorage.getItem("authToken")
        axios({
            method: 'GET',
            url: API_PATH.URL + "services/plan/",
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
                url: API_PATH.URL + "services/product/",
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
                axios({
                    method: 'GET',
                    url: API_PATH.URL + "services/service/",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer'+ticket 
                    },
                })
                    .then(response => {
                        console.log(response);
                        let Archives = response.data;
                        servicecount = (Archives.length)
                        setServicecount(servicecount);
    
    
                    })
    });

    return (
        <div>
            <div class="container mt-5 ">

                <div class="box">
                    <div class="div1" >
                        <a><img src="plc.png" alt="icon" width="50px" height="50px" /></a>
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
                        <a><img src="pro.png" alt="icon" width="50px" height="50px" /></a>
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
                        <a><img src="ser.png" alt="icon" width="50px" height="50px" /></a>
                        <a class="count">
                            {servicecount}
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




