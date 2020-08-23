import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { API_PATH } from "../components/Global"

class HistoryForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customer_name: '1',
            // issue: '',

            // ticket: '',

            Archives: [],
            // categoryL:[],

        }
    }
    customernamechange = (event) => {
        this.setState({
            customer_name: event.target.value
        })
    }
    // issuechange = (event) => {
    //     this.setState({
    //         issue: event.target.value
    //     })
    // }


    // ticketchange = (event) => {
    //     this.setState({
    //         ticket: event.target.value

    //     })
    // }



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
        fd.append("customer_name", this.state.customer_name)
        // fd.append("issue", this.state.description)

        // fd.append("ticket", this.state.ticket)

        axios({
            method: 'POST',
            // url: API_PATH.URL + "archives/",
            // url: API_PATH.URL + "sla/History/",
            url:'http://127.0.0.1:8000/api/sla/History/',
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
        const { customer_name, issue, ticket } = this.state
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
                            <h2>Add History</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-1" for="usr">Customer Name:</label>

                            <div class="col-sm-7">
                                <select class="myselect"  onChange={this.customernamechange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="4">5</option>
                                </select>
                            </div>
                        </div>
                        {/* <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Issue:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={issue} onChange={this.issuechange} />
                                </div>
                            </div>
                          
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Ticket:</label>
                                <div class="col-sm-7">
                                    <input type="number" name="name" class="form-control mt-4" value={ticket} onChange={this.ticketchange} />
                                </div>
                            </div>
 */}


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


export default HistoryForm;

