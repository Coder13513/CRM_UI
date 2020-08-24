import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
// import { API_PATH } from "../components/Global";

class DeptForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deptId: '',
            dept_name: '',           
            branch: '',

            Archives: [],
            // categoryL:[],

        }
    }
    deptIDchange = (event) => {
        this.setState({
            deptId: event.target.value
        })
    }
    deptnamechange = (event) => {
        this.setState({
            dept_name: event.target.value
        })
    }

  
    branchchange = (event) => {
        this.setState({
            branch: event.target.value

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
        fd.append("deptId", this.state.deptId)
        fd.append("dept_name", this.state.dept_name)
       
        fd.append("branch", this.state.branch)

        axios({
            method: 'POST',
            // url: API_PATH.URL + "archives/",
            url: 'http://127.0.0.1:8000/api/hr/dept/',
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
        const { deptId, dept_name,  branch } = this.state
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
                            <h2>Add Department</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-4" for="usr">Department ID:</label>
                            <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={deptId} onChange={this.deptIDchange} />
                                </div>
                               
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Department Name:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={dept_name} onChange={this.deptnamechange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Branch:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={branch} onChange={this.branchchange} />
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


export default DeptForm;

