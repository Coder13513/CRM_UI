import React, { Component } from 'react'
 import axios from 'axios'
import { Form } from 'react-bootstrap'
import { API_PATH } from "../components/Global";

class StaffForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EmpId: '1',
            department: '',
            packageId: '',
            no_of_holidays_allowed: '',
            package: '',
            Joining_date: '',
            description: '',
            

            Archives: [],
            // categoryL:[],

        }
    }
    EmpIdchange = (event) => {
        this.setState({
            EmpId: event.target.value
        })
    }
    departmentchange = (event) => {
        this.setState({
            department: event.target.value
        })
    }

    noofholidaysallowedchange = (event) => {
        this.setState({
            no_of_holidays_allowed: event.target.value

        })
    }
    packagechange = (event) => {
        this.setState({
            salary_package: event.target.value

        })
    }

    joiningdatechange = (event) => {
        this.setState({
            Joining_date: event.target.value

        })
    }
  
    descriptionchange = (event) => {
        this.setState({
            description: event.target.value

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
        fd.append("EmpId", this.EmpId)
        fd.append("department", this.state.department)
      
        fd.append("no_of_holidays_allowed", this.state.no_of_holidays_allowed)
        fd.append("salary_package", this.state.salary_package)
        fd.append("Joining_date", this.state.Joining_date)
        fd.append("description", this.state.description)
       
        axios({
            method: 'POST',
            url: API_PATH.URL + "hr/staff/",
            // url: 'http://127.0.0.1:8000/api/hr/staff/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ticket 
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
        const { EmpId,department,packageId,no_of_holidays_allowed,salary_package,Joining_date,description } = this.state
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
                            <h2>Add Staff Profile</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-1" for="usr">EmpId:</label>                           
                                <div class="col-sm-7">
                                    <select class="myselect"  onChange={this.EmpIdchange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4">5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-1" for="usr">Department:</label>                           
                                <div class="col-sm-7">
                                    <select class="myselect" value={department} onChange={this.departmentchange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4">5</option>
                                    </select>
                                </div>
                            </div>
                          
                       
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Holidays Allowed:</label>
                                <div class="col-sm-7">
                                    <input type="number" name="name" class="form-control mt-4" value={no_of_holidays_allowed} onChange={this.noofholidaysallowedchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr"> Salary Package:</label>
                                <div class="col-sm-7">
                                    <input type="number" name="name" class="form-control mt-4" value={salary_package} onChange={this.packagechange} />
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Joining Date:</label>
                                <div class="col-sm-7">
                                    <input type="date" name="name" class="form-control mt-4" value={Joining_date} onChange={this.joiningdatechange} />
                                </div>
                            </div>



                           
                           
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Description</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={description} onChange={this.descriptionchange} />
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


export default StaffForm;

