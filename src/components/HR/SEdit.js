import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap';
// import { API_PATH } from "../components/Global";

export class ArchiveEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            EmpId: '',
            department: '',
            packageId: '',
            no_of_holidays_allowed: '',
            package: '',
            Joining_date: '',
            description: '',
          

            categoryL: [],
            Owner: [],
            Archives: [],
            isAddArchive: false,
            editMode: '',

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
            url: 'http://127.0.0.1:8000/api/hr/staff/',
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

            EmpId: editingItem.EmpId,
            department: editingItem.department,
            packageId: editingItem.packageId,
            no_of_holidays_allowed: editingItem.no_of_holidays_allowed,
            package: editingItem.package,
            Joining_date: editingItem.Joining_date,
            description: editingItem.description,            

        })
    }

    updateHandler = (e) => {
        const ticket = localStorage.getItem("authToken")
        console.log("event", e)
        e.preventDefault();
        let id = this.state.editMode;

        let fd = new FormData()
          fd.append("EmpId", this.EmpId)
        fd.append("department", this.state.department)
      
        fd.append("no_of_holidays_allowed", this.state.no_of_holidays_allowed)
        fd.append("salary_package", this.state.salary_package)
        fd.append("Joining_date", this.state.Joining_date)
        fd.append("description", this.state.description)
       
        

        axios({
            method: 'PUT',
            // url: API_PATH.URL + "archive/" + id + '/',
            url: 'http://127.0.0.1:8000/api/hr/staff/' + id + '/',

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
            url: 'http://127.0.0.1:8000/api/hr/staff/' + id + '/',
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
        const { EmpId,department,packageId,no_of_holidays_allowed,salary_package,Joining_date,description } = this.state

        // let optionItmes = categoryL.map((categ) =>
        //     <option key={categ.id} value={categ.id}>{categ.name}</option>
        // );
        const archivesItems = this.state.Archives.map(Archive => {
            return (
                <li key={Archive.id}>{Archive.department}
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
                    <h2>List of Staff Profiles</h2>
                </form >
                <ul class="itemsList">{archivesItems} </ul>
                {/* -------------------------------edit form----------------------------- */}
                <form onSubmit={this.updateHandler} class="edit"  >
                    <div class="col-sm-5 col-form-label mt-4">
                        <h2>Edit </h2>
                    </div>
                    <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-1" for="usr">EmpId:</label>                           
                                <div class="col-sm-7">
                                    <select class="myselect" value={EmpId} onChange={this.EmpIdchange}>
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

    )
    }
}
export default ArchiveEdit;

