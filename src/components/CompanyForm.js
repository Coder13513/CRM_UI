import React, { Component } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';
import { API_PATH } from "../components/Global"


class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      city: '',
     
      country: '',
      zip_code: '',
      company_Name: '',
      company_Address1:'',
      company_Address2:'',
      company_Phone:'',
      company_EmailId:''
    }


  
    this.CityhandleChange = this.CityhandleChange.bind(this);
   
    this.CountryhandleChange = this.CountryhandleChange.bind(this);
    this.ZiphandleChange = this.ZiphandleChange.bind(this);
    this.CompanynameChange = this.CompanynameChange.bind(this);
    this.CompanyaddChange = this.CompanyaddChange.bind(this);
    this.CompanyaddrChange = this.CompanyaddrChange.bind(this);
    this.CompanyphoneChange = this.CompanyphoneChange.bind(this);
    this.CompanyemailChange = this.CompanyemailChange.bind(this);
    //   this.handleSubmitForm        = this.handleSubmitForm.bind(this);
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
   
    fd.append("city", this.state.city)
   
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
      url: 'http://127.0.0.1:8000/api/auth/company/',
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
              <h2>Add Company</h2>
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
