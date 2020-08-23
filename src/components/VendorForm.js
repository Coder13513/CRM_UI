import React, { Component } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';
import { API_PATH } from "../components/Global"


class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email_id: '',
      govt_id: '',
      id_no: '',
      p_id1: '',
      p_id_link: '',
      contact: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      country: '',
      zip_code: '',
      company_Name: '',
      company_Address1:'',
      company_Address2:'',
      company_Phone:'',
      company_EmailId:''
    }


    this.FirstNamehandleChange = this.FirstNamehandleChange.bind(this);
    this.LastNamehandleChange = this.LastNamehandleChange.bind(this);
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
    this.CompanynameChange = this.CompanynameChange.bind(this);
    this.CompanyaddChange = this.CompanyaddChange.bind(this);
    this.CompanyaddrChange = this.CompanyaddrChange.bind(this);
    this.CompanyphoneChange = this.CompanyphoneChange.bind(this);
    this.CompanyemailChange = this.CompanyemailChange.bind(this);
    //   this.handleSubmitForm        = this.handleSubmitForm.bind(this);
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
      p_id_link: event.target.value,
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
    fd.append("first_name", this.state.first_name)
    fd.append("last_name", this.state.last_name)
    fd.append("email_id", this.state.email_id)
    fd.append("govt_id", this.state.govt_id)
    fd.append("id_no", this.state.id_no)
    fd.append("p_id1", this.state.p_id1)
    fd.append("p_id_link", this.state.p_id_link)
    fd.append("contact", this.state.contact)
    fd.append("address_1", this.state.address_1)
    fd.append("address_2", this.state.address_2)
    fd.append("city", this.state.city)
    fd.append("state", this.state.state)
    fd.append("country", this.state.country)
    fd.append("zip_code", this.state.zip_code)
    fd.append("company_Name", this.state.company_Name)
    fd.append("company_Address1", this.state.company_Address1)
    fd.append("company_Address2", this.state.company_Address2)
    fd.append("company_Phone", this.state.company_Phone)
    fd.append("company_EmailId", this.state.company_EmailId)



    axios({
      method: 'POST',
      // url: API_PATH.URL + "auth/customer/",
      url: 'http://127.0.0.1:8000/api/auth/vendor/',
      headers: {
        'Content-Type': 'application/json',
        //  'Content-Type':'multipart/form-data',
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
    const { first_name, last_name, email_id, govt_id, id_no, p_id1, p_id_link, contact, address_1, address_2, city, state, country, zip_code, company_Name,company_EmailId,company_Phone,company_Address2,company_Address1 } = this.state
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
              <h2>Add Vendor</h2>
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
              <label class="col-sm-3 col-form-label mt-4" for="usr">Email Id:</label>
              <div class="col-sm-7">
                <input type="email" name="name" class="form-control mt-4" value={email_id} onChange={this.EmailhandleChange} />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3 col-form-label mt-1" for="usr">Govt Id</label>
              <div class="col-sm-7">
                <select class="myselect"  onChange={this.GovthandleChange}>
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
                <input type="text"  class="form-control mt-4" value={id_no} onChange={this.IDhandleChange} />
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
                <input type="text"  class="form-control mt-4" value={p_id_link} onChange={this.PLINKhandleChange} />
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
              <label class="col-sm-3 col-form-label mt-4" for="usr">Company Phone</label>
              <div class="col-sm-7">
                <input type="text" name="name" class="form-control mt-4" value={company_Phone} onChange={this.CompanyphoneChange} />
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
      </div >
    )
  }
}


export default CustomForm;
