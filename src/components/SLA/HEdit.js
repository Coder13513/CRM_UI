import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap';
// import { API_PATH } from "../components/Global";

export class ArchiveEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {

            customer_name: '1',
            issue: '',
            priority: 'HIGH',
            date: '',
            responsible_person: '1',
            status: 'IN PROGRESS',
            solution_details: '',
           


            categoryL: [],
            Owner: [],
            Archives: [],
            isAddArchive: false,
            editMode: '',

        }

       


    }



    customernamechange = (event) => {
        this.setState({
            customer_name: event.target.value
        })
    }
    issuechange = (event) => {
        this.setState({
            issue: event.target.value
        })
    }

    prioritychange = (event) => {
        this.setState({
            priority: event.target.value

        })
    }
    datechange = (event) => {
        this.setState({
            date: event.target.value

        })
    }
    reponsiblepersonchange = (event) => {
        this.setState({
            responsible_person: event.target.value

        })
    }

    statuschange = (event) => {
        this.setState({
            status: event.target.value

        })
    }
    solutiondetailschange = (event) => {
        this.setState({
            solution_details: event.target.value

        })
    }
    ticketchange = (event) => {
        this.setState({
            ticket: event.target.value

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
            // url: API_PATH.URL + "archives/",
            url: 'http://127.0.0.1:8000/api/sla/SLA/',
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
            customer_name: editingItem.customer_name,
            issue: editingItem.issue,
            priority: editingItem.priority,
            date: editingItem.data,
            responsible_person: editingItem.responsible_person,
            status: editingItem.status,
            solution_details: editingItem.solution_details,
            


        })
    }

    updateHandler = (e) => {
        const ticket = localStorage.getItem("authToken")
        console.log("event", e)
        e.preventDefault();
        let id = this.state.editMode;

        let fd = new FormData()

        fd.append("customer_name", this.state.customer_name)
        fd.append("issue", this.state.issue)
        fd.append("priority", this.state.priority)
        fd.append("date", this.state.date)
        fd.append("responsible_person", this.state.responsible_person)
        fd.append("status", this.state.status)
        fd.append("solution_details", this.state.solution_details)
        fd.append("ticket", this.state.ticket)

        axios({
            method: 'PUT',
            // url: API_PATH.URL + "archive/" + id + '/',
            url: 'http://127.0.0.1:8000/api/sla/SLA/' + id + '/',

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
            url: 'http://127.0.0.1:8000/api/sla/SLA/' + id + '/',
            // url: API_PATH.URL + "archives/" + id + "/",
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
        const { customer_name, issue, priority, date, responsible_person, status, solution_details, ticket } = this.state

        // let optionItmes = categoryL.map((categ) =>
        //     <option key={categ.id} value={categ.id}>{categ.name}</option>
        // );
        const archivesItems = this.state.Archives.map(Archive => {
            return (
                <li key={Archive.id}>{Archive.issue}
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
                    <h2>List of SLA</h2>
                </form >
                <ul class="itemsList">{archivesItems} </ul>
                {/* -------------------------------edit form----------------------------- */}
                <form onSubmit={this.updateHandler} class="edit"  >
                    <div class="col-sm-5 col-form-label mt-4">
                        <h2>Edit </h2>
                    </div>
                    <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-1" for="usr">Customer Name:</label>
                           
                                <div class="col-sm-7">
                                    <select class="myselect" value={customer_name} onChange={this.customernamechange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4">5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Issue:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={issue} onChange={this.issuechange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-1 " for="usr">Priority:</label>
                                <div class="col-sm-7">
                                    <select class="myselect"  onChange={this.prioritychange}>
                                        <option value="HIGH">High</option>
                                        <option value="LOW">Low</option>
                                        <option value="MODERATE">Moderate</option>

                                    </select>
                                </div>

                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Date:</label>
                                <div class="col-sm-7">
                                    <input type="date" name="name" class="form-control mt-4" value={date} onChange={this.datechange} />
                                </div>
                            </div>



                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-1 " for="usr">Responsible Person:</label>
                                <div class="col-sm-7">
                                    <select class="myselect" value={responsible_person} onChange={this.responsiblepersonchange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4">5</option>
                                        {/* {optionItmesO} */}
                                        {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                                    </select>
                                </div>

                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-1 " for="usr">Status:</label>
                                <div class="col-sm-7">
                                    <select class="myselect"  onChange={this.statuschange}>
                                        <option value="INITIATED">Initiated</option>
                                        <option value="IN PROGRESS">In progress</option>
                                        <option value="RESOLVED">Resolved</option>

                                        {/* {optionItmesO} */}
                                        {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                                    </select>
                                </div>

                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Solution Details</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={solution_details} onChange={this.solutiondetailschange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Ticket:</label>
                                <div class="col-sm-7">
                                    <input type="number" name="name" class="form-control mt-4" value={ticket} onChange={this.ticketchange} />
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

