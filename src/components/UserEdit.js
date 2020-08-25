import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap';
import { API_PATH } from "../components/Global";

export class ArchiveEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {

          
            username: '',
            password: '',
            confirmed_password: '',
            first_name: '',
            last_name: '',
            email: '',           
            

            categoryL: [],
            Owner: [],
            Archives: [],
            isAddArchive: false,
            editMode: '',

        }

      


    }

    FirstNamechange = (event) => {
        this.setState({
            first_name: event.target.value
        })

    }

    LastNamechange = (event) => {
        this.setState({
            last_name: event.target.value
        })

    }
    Emailchange = (event) => {
        this.setState({
            email: event.target.value

        })
    }

    Usernamechange = (event) => {
        this.setState({
            username: event.target.value

        })
    }

    Passwordchange = (event) => {
        this.setState({
            password: event.target.value

        })
    }
    ConfirmPasswordchange = (event) => {
        this.setState({
           confirmed_password: event.target.value

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
            url: API_PATH.URL + "auth/user/",
            // url: 'http://127.0.0.1:8000/api/auth/user/',
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

            username: editingItem.username,
            password: editingItem.password,
            confirmed_password: editingItem.confirmed_password,
            first_name: editingItem.first_name,
            last_name: editingItem.last_name,
            email: editingItem.email,           
            

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
        fd.append("email", this.state.email)
        fd.append("phone", this.state.phone)
        fd.append("password", this.state.password)
        fd.append("confirmed_password", this.state.confirmed_password)
        fd.append("username", this.state.username)
        axios({
            method: 'PUT',
            url: API_PATH.URL + "auth/user/" + id + '/',
            // url: 'http://127.0.0.1:8000/api/auth/user/' + id + '/',

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
            // url: 'http://127.0.0.1:8000/api/auth/usr/' + id + '/',
            url: API_PATH.URL + "auth/user/" + id + "/",
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
        const { first_name, last_name, email,username, password,confirmed_password , parental_lock, recording_time, phone,image, security_question,security_answer,channel_packages } = this.state

        // let optionItmes = categoryL.map((categ) =>
        //     <option key={categ.id} value={categ.id}>{categ.name}</option>
        // );
        const archivesItems = this.state.Archives.map(Archive => {
            return (
                <li key={Archive.id}>{Archive.email}
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
                    <h2>List of Users</h2>
                </form >
                <ul class="itemsList">{archivesItems} </ul>
                {/* -------------------------------edit form----------------------------- */}
                <form onSubmit={this.updateHandler} class="edit"  >
                    <div class="col-sm-5 col-form-label mt-4">
                        <h2>Edit </h2>
                    </div>
                   
                    
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label  mt-4" for="usr">Username:</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control mt-4 " value={username} onChange={this.Usernamechange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="usr">Password:</label>
                        <div class="col-sm-7">
                            <input type="password"  autocomplete='false' class="form-control" value={password} onChange={this.Passwordchange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label " for="usr">Confirm Password:</label>
                        <div class="col-sm-7">
                            <input type="password"   autocomplete='false'  class="form-control" value={confirmed_password} onChange={this.ConfirmPasswordchange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label " for="usr">First Name:</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control " value={first_name} onChange={this.FirstNamechange} />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label " for="usr">Last Name:</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" value={last_name} onChange={this.LastNamechange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label " for="usr">Email:</label>
                        <div class="col-sm-7">
                            <input type="email" class="form-control " value={email} onChange={this.Emailchange} />
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

