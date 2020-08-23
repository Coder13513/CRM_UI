import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap';
// import { API_PATH } from "../components/Global";

export class ArchiveEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {

            city: '',

            country: '',
            zip_code: '',

            company_Name: '',
            company_Address1: '',
            company_Address2: '',
            company_Phone: '',
            company_EmailId: '',


            categoryL: [],
            Owner: [],
            Archives: [],
            isAddArchive: false,
            editMode: '',

        }

        this.CityhandleChange = this.CityhandleChange.bind(this);

        this.CountryhandleChange = this.CountryhandleChange.bind(this);
        this.ZiphandleChange = this.ZiphandleChange.bind(this);
        this.CompanynameChange = this.CompanynameChange.bind(this);
        this.CompanyaddChange = this.CompanyaddChange.bind(this);
        this.CompanyaddrChange = this.CompanyaddrChange.bind(this);
        this.CompanyphoneChange = this.CompanyphoneChange.bind(this);
        this.CompanyemailChange = this.CompanyemailChange.bind(this);


    }



    CityhandleChange(event) {
        this.setState({
            city: event.target.value,
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
    CompanynameChange(event) {
        this.setState({
            company_Name: event.target.value,
        });
    }
    CompanyaddChange(event) {
        this.setState({
            company_Address1: event.target.value,
        });
    }

    CompanyaddrChange(event) {
        this.setState({
            company_Address2: event.target.value,
        });
    }

    CompanyphoneChange(event) {
        this.setState({
            company_Phone: event.target.value,
        });
    }

    CompanyemailChange(event) {
        this.setState({
            company_EmailId: event.target.value,
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
            url: 'http://127.0.0.1:8000/api/auth/company/',
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

            city: editingItem.city,

            country: editingItem.country,
            zip_code: editingItem.zip_code,



            company_EmailId: editingItem.company_EmailId,

            company_Address1: editingItem.company_Address1,

            company_Address2: editingItem.company_Address2,

            company_Name: editingItem.company_Name,

            company_Phone: editingItem.company_Phone,


        })
    }

    updateHandler = (e) => {
        const ticket = localStorage.getItem("authToken")
        console.log("event", e)
        e.preventDefault();
        let id = this.state.editMode;

        let fd = new FormData()
        fd.append("city", this.state.city)

        fd.append("country", this.state.country)
        fd.append("zip_code", this.state.zip_code)

        fd.append("company_Name", this.state.company_Name)
        fd.append("company_Address1", this.state.company_Address1)
        fd.append("company_Address2", this.state.company_Address2)
        fd.append("company_Phone", this.state.company_Phone)
        fd.append("company_EmailId", this.state.company_EmailId)

        axios({
            method: 'PUT',
            // url: API_PATH.URL + "archive/" + id + '/',
            url: 'http://127.0.0.1:8000/api/auth/company/' + id + '/',

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
            url: 'http://127.0.0.1:8000/api/auth/company/' + id + '/',
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
        const { first_name, last_name, email_id, govt_id, id_no, p_id1, p_id_link, contact, address_1, address_2, city, state, country, zip_code, company_Name, company_EmailId, company_Phone, company_Address2, company_Address1 } = this.state

        // let optionItmes = categoryL.map((categ) =>
        //     <option key={categ.id} value={categ.id}>{categ.name}</option>
        // );
        const archivesItems = this.state.Archives.map(Archive => {
            return (
                <li key={Archive.id}>{Archive.company_Name}
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
                    <h2>List of Companies</h2>
                </form >
                <ul class="itemsList">{archivesItems} </ul>
                {/* -------------------------------edit form----------------------------- */}
                <form onSubmit={this.updateHandler} class="edit"  >
                    <div class="col-sm-5 col-form-label mt-4">
                        <h2>Edit </h2>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Company Name</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={company_Name} onChange={this.CompanynameChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Company Address1</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={company_Address1} onChange={this.CompanyaddChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">Company Address2</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={company_Address2} onChange={this.CompanyaddrChange} />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label mt-4" for="usr">City</label>
                        <div class="col-sm-7">
                            <input type="text" name="name" class="form-control mt-4" value={city} onChange={this.CityhandleChange} />
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

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Company Phone</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={company_Phone} onChange={this.CompanyphoneChange} />
                            </div>
                        </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Company Email</label>
                            <div class="col-sm-7">
                                <input type="email" name="name" class="form-control mt-4" value={company_EmailId} onChange={this.CompanyemailChange} />
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

