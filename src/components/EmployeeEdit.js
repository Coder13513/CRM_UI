import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap';
// import { API_PATH } from "../components/Global";

export class ArchiveEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            username: '1',
            email_id: '',
            dob: '',
            contact: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            country: '',
            zip_code: '',
            govt_id: '',
            id_no: '',
            employee_id: '',
            p_id1: '',
            p_id2: '',
            upload_documents: '',
            position: '',
            staff: '',
            admin: '',
            hr: '',
            manager: '',
            company_code: '',
            categoryL: [],
            Owner: [],
            Archives: [],
            isAddArchive: false,
            editMode: '',

        }
        this.FirstNamehandleChange = this.FirstNamehandleChange.bind(this);
        this.LastNamehandleChange = this.LastNamehandleChange.bind(this);

        this.UsernamehandleChange = this.UsernamehandleChange.bind(this);

        this.EmailhandleChange = this.EmailhandleChange.bind(this);
        this.GovthandleChange = this.GovthandleChange.bind(this);
        this.IDhandleChange = this.IDhandleChange.bind(this);
        this.PIDhandleChange = this.PIDhandleChange.bind(this);
        this.PLINKhandleChange = this.PLINKhandleChange.bind(this);
        this.ContacthandleChange = this.ContacthandleChange.bind(this);
        this.ADD1handleChange = this.ADD1handleChange.bind(this);
        this.ADD2handleChange = this.ADD2handleChange.bind(this);
        this.CityhandleChange = this.CityhandleChange.bind(this);
        this.StatehandleChange = this.StatehandleChange.bind(this);
        this.CountryhandleChange = this.CountryhandleChange.bind(this);
        this.ZiphandleChange = this.ZiphandleChange.bind(this);
        this.CompanyhandleChange = this.CompanyhandleChange.bind(this);

        this.dobhandleChange = this.dobhandleChange.bind(this);
        this.emplidhandleChange = this.emplidhandleChange.bind(this);
        this.documentshandleChange = this.documentshandleChange.bind(this);
        this.positionhandleChange = this.positionhandleChange.bind(this);
        this.staffhandleChange = this.staffhandleChange.bind(this);
        this.adminhandleChange = this.adminhandleChange.bind(this);
        this.hrhandleChange = this.hrhandleChange.bind(this);
        this.managerhandleChange = this.managerhandleChange.bind(this);


    }


    FirstNamehandleChange(event) {
        this.setState({
            first_name: event.target.value,
        });
    }
    LastNamehandleChange(event) {
        this.setState({
            last_name: event.target.value,
        });
    }
    UsernamehandleChange(event) {
        this.setState({
            username: event.target.value,
        });
    }
    EmailhandleChange(event) {
        this.setState({
            email_id: event.target.value,
        });
    }
    GovthandleChange(event) {
        this.setState({
            govt_id: event.target.value,
        });
    }
    IDhandleChange(event) {
        this.setState({
            id_no: event.target.value,
        });
    }
    PIDhandleChange(event) {
        this.setState({
            p_id1: event.target.value,
        });
    }
    PLINKhandleChange(event) {
        this.setState({
            p_id2: event.target.value,
        });
    }
    ContacthandleChange(event) {
        this.setState({
            contact: event.target.value,
        });
    }
    ADD1handleChange(event) {
        this.setState({
            address_1: event.target.value,
        });
    }
    ADD2handleChange(event) {
        this.setState({
            address_2: event.target.value,
        });
    }
    CityhandleChange(event) {
        this.setState({
            city: event.target.value,
        });
    }
    StatehandleChange(event) {
        this.setState({
            state: event.target.value,
        });
    }
    CountryhandleChange(event) {
        this.setState({
            country: event.target.value,
        });
    }
    ZiphandleChange(event) {
        this.setState({
            zip_code: event.target.value,
        });
    }
    CompanyhandleChange(event) {
        this.setState({
            company_code: event.target.value,
        });
    }
    emplidhandleChange(event) {
        this.setState({
            emplidhandleChange: event.target.value,
        });
    }
  
    positionhandleChange(event) {
        this.setState({
            position: event.target.value,
        });
    }
    dobhandleChange(event) {
        this.setState({
            dob: event.target.value,
        });
    }
    staffhandleChange(event) {
        this.setState({
            staff: event.target.value,
        });
    }
    adminhandleChange(event) {
        this.setState({
            admin: event.target.value,
        });
    }
    hrhandleChange(event) {
        this.setState({
            hr: event.target.value,
        });
    }
    managerhandleChange(event) {
        this.setState({
            manager: event.target.value,
        });
    }
    documentshandleChange(event) {
        this.setState({
           upload_documents: event.target.files[0],
        });
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
            url: 'http://127.0.0.1:8000/api/auth/employee/',
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
            first_name: editingItem.first_name,
            last_name: editingItem.last_name,
            username: editingItem.username,
            email_id: editingItem.email_id,
            dob: editingItem.dob,
            contact: editingItem.contact,
            address_1: editingItem.address_1,
            address_2: editingItem.address_2,
            city: editingItem.city,
            state: editingItem.state,
            country: editingItem.country,
            zip_code: editingItem.zip_code,
            govt_id: editingItem.govt_id,
            id_no: editingItem.id_no,
            employee_id: editingItem.employee_id,
            p_id1: editingItem.p_id1,
            p_id2: editingItem.p_id2,
            upload_documents: editingItem.upload_documents,
            position: editingItem.position,
            staff: editingItem.staff,
            admin: editingItem.admin,
            hr: editingItem.hr,
            manager: editingItem.manager,
            company_code: editingItem.company_code,

        })
    }

    updateHandler = (e) => {
        const ticket = localStorage.getItem("authToken")
        console.log("event", e)
        e.preventDefault();
        let id = this.state.editMode;

        let fd = new FormData()
        fd.append("first_name", this.state.first_name)
        fd.append("last_name", this.state.last_name)
        fd.append("email_id", this.state.email_id)
        fd.append("govt_id", this.state.govt_id)
        fd.append("id_no", this.state.id_no)
        fd.append("p_id1", this.state.p_id1)
        fd.append("p_id2", this.state.p_id2)
        fd.append("contact", this.state.contact)
        fd.append("address_1", this.state.address_1)
        fd.append("address_2", this.state.address_2)
        fd.append("city", this.state.city)
        fd.append("state", this.state.state)
        fd.append("country", this.state.country)
        fd.append("zip_code", this.state.zip_code)
        fd.append("company_code", this.state.company_code)
        fd.append("username", this.state.username)
        fd.append("employee_id", this.state.employee_id)
        fd.append("upload_documents", this.state.upload_documents)
        fd.append("position", this.state.position)
        fd.append("dob", this.state.dob)
        fd.append("staff", this.state.staff)
        fd.append("hr", this.state.hr)
        fd.append("admin", this.state.admin)
        fd.append("manager", this.state.manager)


        axios({
            method: 'PUT',
            // url: API_PATH.URL + "archive/" + id + '/',
            url: 'http://127.0.0.1:8000/api/auth/employee/' + id + '/',

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
            url: 'http://127.0.0.1:8000/api/auth/employee/' + id + '/',
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
        const { first_name, last_name, email_id, govt_id, id_no, p_id1, p_id2, contact, address_1, address_2, city, state, country, zip_code, company_code, username, employee_id, dob, staff, hr, manager, admin, upload_documents, position ,categoryL} = this.state
        // let optionItmes = categoryL.map((categ) =>
        //     <option key={categ.id} value={categ.id}>{categ.name}</option>
        // );
        const archivesItems = this.state.Archives.map(Archive => {
            return (
                <li key={Archive.id}>{Archive.first_name}
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
                    <h2>List of Employess</h2>
                </form >
                <ul class="itemsList">{archivesItems} </ul>
                {/* -------------------------------edit form----------------------------- */}
                <form onSubmit={this.updateHandler} class="edit"  >
                    <div class="col-sm-5 col-form-label mt-4">
                        <h2>Edit </h2>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label  mt-4" for="usr">First Name:</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={first_name} onChange={this.FirstNamehandleChange} />

                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Last Name:</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={last_name} onChange={this.LastNamehandleChange} />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-1" for="usr">Username </label>
                        <div class="col-sm-7">
                            <select class="myselect" onChange={this.usernamehandleChange}>
                                <option value="1">1</option>

                                {/* <option value="aadhar">Aadhar</option>
                  <option value="other">Other</option> */}
                                {/* <option value="4">4</option> */}
                                {/* {optionItmesO} */}
                                {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Email Id:</label>
                        <div class="col-sm-7">
                            <input type="email" name="name" class="form-control mt-4" value={email_id} onChange={this.EmailhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Dob:</label>
                        <div class="col-sm-7">
                            <input type="date" name="name" class="form-control mt-4" value={dob} onChange={this.dobhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Contact</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={contact} onChange={this.ContacthandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Address 1</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={address_1} onChange={this.ADD1handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Address 2</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={address_2} onChange={this.ADD2handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">City</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={city} onChange={this.CityhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">State</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={state} onChange={this.StatehandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Country</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={country} onChange={this.CountryhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Zip Code</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={zip_code} onChange={this.ZiphandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-1" for="usr">Govt Id</label>
                        <div class="col-sm-7">
                            <select class="myselect" onChange={this.GovthandleChange}>
                                <option value="passport">Passport</option>

                                <option value="aadhar">Aadhar</option>
                                <option value="other">Other</option>
                                {/* <option value="4">4</option> */}
                                {/* {optionItmesO} */}
                                {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr"></label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control mt-4" value={id_no} onChange={this.IDhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Personal Id</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={p_id1} onChange={this.PIDhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr"></label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control mt-4" value={p_id2} onChange={this.PLINKhandleChange} />
                        </div>
                    </div>


                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="file"> Upload Documents</label>
                        <div class="col-sm-7">
                            <input type="file"  class="form-control-file border" onChange={this.documentshandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Company Code:</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={company_code} onChange={this.CompanyhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Position</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={position} onChange={this.positionhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row" >
                        <label class="col-sm-3 col-form-label" for="file">Staff</label>
                        <div class="col-sm-7">
                            <input type="checkbox" class="mycheck" onChange={this.staffhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row" >
                        <label class="col-sm-3 col-form-label" for="file">HR</label>
                        <div class="col-sm-7">
                            <input type="checkbox" class="mycheck" onChange={this.hrhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row" >
                        <label class="col-sm-3 col-form-label" for="file">Admin</label>
                        <div class="col-sm-7">
                            <input type="checkbox" class="mycheck" onChange={this.adminhandleChange} />
                        </div>
                    </div>
                    <div class="form-group row" >
                        <label class="col-sm-3 col-form-label" for="file">Manager</label>
                        <div class="col-sm-7">
                            <input type="checkbox" class="mycheck" onChange={this.managerhandleChange} />
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

