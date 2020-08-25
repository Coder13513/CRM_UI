import React, { Component } from 'react'
 import axios from 'axios'
import { Form } from 'react-bootstrap'
 import { API_PATH } from "../components/Global";

class PlanForm extends Component {

    constructor(props) {
        super(props)
        this.state = {


            planId: '',
            Type: 'PREPAID',
            duration: '',
            dateOfCreation: '',
            validity: '',
            billingCycle: '',
            dueDate: '',
            terms: '',


            Archives: [],
            // categoryL:[],

        }
    }


    planidchange = (event) => {
        this.setState({
            planId: event.target.value
        })
    }
    typechange = (event) => {
        this.setState({
            Type: event.target.value
        })
    }
    durationchange = (event) => {
        this.setState({
            duration: event.target.value

        })
    }


    dateofcreationchange = (event) => {
        this.setState({
            dateOfCreation: event.target.value

        })
    }
    validitychange = (event) => {
        this.setState({
            validity: event.target.value

        })
    }
    billingchange = (event) => {
        this.setState({
            billingCycle: event.target.value

        })
    }
    duedatechange = (event) => {
        this.setState({
            dueDate: event.target.value

        })
    }
    termschange = (event) => {
        this.setState({
            terms: event.target.value

        })
    }






    handleBack() {
        this.props.history.goBack()
    }

    componentDidMount() {
        this.fetchArchives();
        this.OwnerSelect();
        // this.submitHandler;
    }


    OwnerSelect() {
        const ticket = localStorage.getItem("authToken")



        //     axios({
        //         method: 'GET',
        //         url: API_PATH.URL +"auth/profile/",
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer'+ticket            
        //          },
        //     })
        //     .then(response => {
        //         console.log(response);
        //         let Archives = response.data.data.profile;
        //         // alert(Archives)
        //         this.setState({
        //             Archives: Archives
        //         })
        //         console.log(Archives)
        //         console.log(Archives.id)
        //     })
        //         .catch(error => {
        //             console.log('failure:' + JSON.stringify(this.state));
        //             console.log(error)
        //         })
    }



    fetchArchives() {
        const ticket = localStorage.getItem("authToken")
        let CategoryList = [];


        // axios({
        //     method: 'GET',
        //     url: API_PATH.URL + "livetv/channels/",
        //                 headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer '+ticket

        //     },
        // })
        //     .then(response => {
        //         console.log(response)

        //         let Categories = response.data.results;
        //         CategoryList= Categories.map((categ)=>{
        //             return categ
        //         });
        //         console.log(CategoryList)
        //         this.setState({
        //             categoryL:CategoryList
        //         })
        //     })
        //     .catch(error => {
        //         console.log('failure:' + JSON.stringify(this.state));
        //         console.log(error)
        //     })


    }

    submitHandler = (event) => {
        const ticket = localStorage.getItem("authToken")
        event.preventDefault()

        let fd = new FormData()
        
        fd.append("planId", this.state.planId)
        fd.append("Type", this.state.Type)
        fd.append("duration", this.state.duration)
        fd.append("dateOfCreation", this.state.dateOfCreation)
        fd.append("validity", this.state.validity)
        fd.append("billingCycle", this.state.billingCycle)
        fd.append("dueDate", this.state.dueDate)
        fd.append("terms", this.state.terms)


        axios({
            method: 'POST',
            url: API_PATH.URL + "services/plan/",
            // url:'http://127.0.0.1:8000/api/services/plan/',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer'+ticket 
            },
            data: fd
        })
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log('failure:' + JSON.stringify(this.state));
                console.log(error)
            })

    }

    render() {
        const { planId, Type, duration, dateOfCreation, validity, billingCycle, dueDate, terms } = this.state
        // let optionItmes = categoryL.map((categ)=>
        // <option key={categ.id} value={categ.id}>{categ.name}</option>
        // );
        // let optionItmesO(categ=>
        // <option key={categ.id} value={categ.id}>{categ.email}</option>
        // );
        return (
            <div>
                <div>
                    <form onSubmit={this.submitHandler} class="archive"  >


                        <div >
                            <h2> Add Plan</h2>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Plan Id</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={planId} onChange={this.planidchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-2" for="usr">Type:</label>
                            <div class="col-sm-7">
                                <select class="myselect" onChange={this.typechange}>
                                <option value="PREPAID">Prepaid</option>
                                    <option value="POSTPAID">Postpaid</option>
                                    {/* {optionItmesO} */}
                                    {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                                </select>

                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Duration:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={duration} onChange={this.durationchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Date of Creation:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={dateOfCreation} onChange={this.dateofcreationchange} />
                            </div>
                        </div>


                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Validity:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={validity} onChange={this.validitychange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Billing Cycle :</label>
                            <div class="col-sm-7">
                                <input type="date" step="any" name="name" class="form-control mt-4" value={billingCycle} onChange={this.billingchange} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Due Date :</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={dueDate} onChange={this.duedatechange} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr"> Terms:</label>
                            <div class="col-sm-7">
                                <textarea rows="4" cols="40" name="name" class="form-control mt-4" value={terms} onChange={this.termschange} />
                            </div>
                        </div>


                        <div class="mybuttons">
                            <button className="btn btn-mysave " type="submit">Save</button>
                            <button className="btn btn-mycancel " type="submit" onClick={() => this.handleBack()}>Cancel</button>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}


export default PlanForm;

