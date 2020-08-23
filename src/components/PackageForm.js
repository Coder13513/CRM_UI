import React, { Component } from 'react'
 import axios from 'axios'
import { Form } from 'react-bootstrap'
// import { API_PATH } from "../components/Global";

class PackageForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
           
            Name: '',           
            empId: '',
            packageId:'',
            salary:'',
            dateOfPayment:'',
            modeOfPayment:'',
            unpaid_leaves_allowed:'',
            paid_leaves_allowed:'',
            comments:'',       
            
            Archives: [],
            // categoryL:[],

        }
    }

    namechange = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    empidchange = (event) => {
        this.setState({
            empId: event.target.value
        })
    }
    packageidchange = (event) => {
        this.setState({
            packageId: event.target.value
        })
    }
  
   salarychange = (event) => {
        this.setState({
            salary: event.target.value

        })
    }
    dateofpaymentchange = (event) => {
        this.setState({
            dateOfPayment: event.target.value

        })
    }
   
    modeofpaymentchange = (event) => {
        this.setState({
            modeOfPayment: event.target.value

        })
    }
     
    unpaidchange = (event) => {
        this.setState({
            unpaid_leaves_allowed: event.target.value

        })
    }
    paidchange = (event) => {
        this.setState({
            paid_leaves_allowed: event.target.value

        })
    }
    commentschange = (event) => {
        this.setState({
            comments: event.target.value

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

        fd.append("Name", this.state.Name)
        fd.append("empId", this.state.empId)       
        fd.append("packageId", this.state.packageId)
        fd.append("salary", this.state.salary)
        fd.append("dateOfPayment", this.state.dateOfPayment)
        fd.append("modeOfPayment", this.state.modeOfPayment)
        fd.append("unpaid_leaves_allowed", this.state.unpaid_leaves_allowed)
        fd.append("paid_leaves_allowed", this.state.paid_leaves_allowed)
        fd.append("comments", this.state.comments)
        

        axios({
            method: 'POST',
            // url: API_PATH.URL + "archives/",
           url: "http://127.0.0.1:8000/api/payroll/empack/", 
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
        const {Name,empId,packageId,salary,dateOfPayment,modeOfPayment,unpaid_leaves_allowed,paid_leaves_allowed,comments } = this.state
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
                            <h2> Employee Salary</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-4" for="usr">Name:</label>
                            <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={Name} onChange={this.namechange} />
                                </div>
                               
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-1" for="usr">Emp Id:</label>
                                <div class="col-sm-7">
                                <select class="myselect"  value={empId} onChange={this.empidchange}>
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
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Package Id:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={packageId} onChange={this.packageidchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Salary:</label>
                                <div class="col-sm-7">
                                    <input type="number" name="name" class="form-control mt-4" value={salary} onChange={this.salarychange} />
                                </div>
                            </div>
  
                          
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Date of Payment:</label>
                                <div class="col-sm-7">
                                    <input type="date" name="name" class="form-control mt-4" value={dateOfPayment} onChange={this.dateofpaymentchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Mode of Payment:</label>
                                <div class="col-sm-7">
                                    <input type="date" name="name" class="form-control mt-4" value={modeOfPayment} onChange={this.modeofpaymentchange} />
                                </div>
                            </div>
                          
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Unpaid Leaves Allowed:</label>
                                <div class="col-sm-7">
                                    <input type="number" name="name" class="form-control mt-4" value={unpaid_leaves_allowed} onChange={this.unpaidchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Paid Leaves Allowed::</label>
                                <div class="col-sm-7">
                                    <input type="number" step="any" name="name" class="form-control mt-4" value={paid_leaves_allowed} onChange={this.paidchange} />
                                </div>
                            </div>
                          
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Comments:</label>
                                <div class="col-sm-7">
                                    <input type="text" step="any" name="name" class="form-control mt-4" value={comments} onChange={this.commentschange} />
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


export default PackageForm;

