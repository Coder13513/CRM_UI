import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap';
import { API_PATH } from "../components/Global";

export class ArchiveEdit extends Component {
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


            categoryL: [],
            Owner: [],
            Archives: [],
            isAddArchive: false,
            editMode: '',

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


    

    onAdd() {
        this.setState({
            isAddArchive: !this.state.isAddArchive
        })
    }


    componentDidMount() {
        this.fetchArchives();
        // this.Select();
        // this.OwnerSelect();
    }

    // OwnerSelect() {
    //     const ticket = localStorage.getItem("authToken")

    //    let Owner:[];

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
    //           Owner: Archives
    //         })
    //         console.log(Owner)
    //         console.log(Owner.id)
    //     })
    //         .catch(error => {
    //             console.log('failure:' + JSON.stringify(this.state));
    //             console.log(error)
    //         })
    // }

    // Select() {
    //     const ticket = localStorage.getItem("authToken")
    //     let CategoryList=[];


    //     axios({
    //         method: 'GET',
    //         url: API_PATH.URL + "livetv/channels/",
    //                     headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer '+ticket

    //         },
    //     })
    //         .then(response => {

    //             let Categories = response.data.results;
    //             CategoryList= Categories.map((categ)=>{
    //                 return categ
    //             });
    //             console.log(CategoryList)
    //             this.setState({
    //                 categoryL:CategoryList
    //             })
    //         })
    //         .catch(error => {
    //             console.log('failure:' + JSON.stringify(this.state));
    //             console.log(error)
    //         })


    // }
    // -------------------------get------------------------- 
    fetchArchives() {
        // const ticket = localStorage.getItem("authToken")
        axios({
            method: 'GET',
            url: API_PATH.URL + "services/plan/",
            // url: 'http://127.0.0.1:8000/api/services/plan/',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer' + ticket
            },
        })
            .then(response => {
                console.log(response);
                alert(response)
                let Archives = response.data;
                this.setState({
                    Archives: Archives
                })
            })
            .catch(error => {
                console.log('failure:' + JSON.stringify(this.state));
                console.log(error)
            })
    }
    // -------------------------edit  --------------------------
    editArchive = (Id) => {

        console.log(Id)
        this.setState({
            editMode: Id
        })
        let editingItem = this.state.Archives.find(Archive => { return Archive.id === Id; })

        this.setState({

            planId: editingItem.planId,
            Type: editingItem.Type,
            duration: editingItem.duration,
            dateOfCreation: editingItem.dateOfCreation,
            validity: editingItem.validity,
            billingCycle: editingItem.billingCycle,
            dueDate: editingItem.dueDate,
            terms: editingItem.terms,


        })
    }

    updateHandler = (e) => {
        const ticket = localStorage.getItem("authToken")
        console.log("event", e)
        e.preventDefault();
        let id = this.state.editMode;

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
            method: 'PUT',
            url: API_PATH.URL + "services/plan/" + id + '/',
            // url: 'http://127.0.0.1:8000/api/services/plan/' + id + '/',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ticket
            },
            data: fd
        })
            .then(response => {
                console.log('succes:' + fd);
                console.log(response)
            })
            .catch(error => {
                console.log('failure:' + JSON.stringify(this.state));
                console.log(error)
            })
    }

    // -------------------delete-----------------------
    deleteArchive = (id) => {
        const ticket = localStorage.getItem("authToken")
        axios({
            method: 'DELETE',
            // url: 'http://127.0.0.1:8000/api/services/plan/' + id + '/',
            url: API_PATH.URL + "services/plan/" + id + "/",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ticket
            }
        })
            .then(response => {
                console.log(response)
                this.fetchArchives()

            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { planId, Type, duration, dateOfCreation, validity, billingCycle, dueDate, terms } = this.state

        // let optionItmes = categoryL.map((categ) =>
        //     <option key={categ.id} value={categ.id}>{categ.name}</option>
        // );
        const archivesItems = this.state.Archives.map(Archive => {
            return (
                <li key={Archive.id}>{Archive.planId}
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    <button className="btn btn-myedit " type="submit" onClick={() => this.editArchive(Archive.id)}  >Edit</button>
                                    <button className="btn btn-mydelete " type="submit" onClick={() => this.deleteArchive(Archive.id)}  >Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            )
        }
        );


        return (


            <div >
                <form class="List">
                    <h2>List of Plans</h2>
                </form >
                <ul class="itemsList">{archivesItems} </ul>
                {/* -------------------------------edit form----------------------------- */}
                <form onSubmit={this.updateHandler} class="edit"  >
                    <div class="col-sm-5 col-form-label mt-4">
                        <h2>Edit </h2>
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
                                <select class="myselect"  onChange={this.typechange}>
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

    )
    }
}
export default ArchiveEdit;

