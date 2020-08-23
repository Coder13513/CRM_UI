import React, { Component } from 'react'
 import axios from 'axios'
import { Form } from 'react-bootstrap'
// import { API_PATH } from "../components/Global";

class BusinessForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project_name:'',
            description:'',
            company_name:'',
            address:'',
            contact_person:'',
            email_id:'',
            phone_no:'',
            additional_contact:'',
            details:'',
            start_date:'',
            deadline:'',
            responsible_person:'1',
            followup_date:'',
            followup_message:'',
            upload_documents:'',            
            Archives:[],           
            // categoryL:[],
           
        }   
     

    }


    projectnamechange = (event) => {
        this.setState({
            project_name: event.target.value
        })
    }


    descriptionchange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    companynamechange = (event) => {
        this.setState({
            company_name: event.target.value

        })
    }

    addresschange = (event) => {
        this.setState({
            address: event.target.value

        })
    }
    contactpersonchange = (event) => {
        this.setState({
            contact_person: event.target.value

        })
    }
 
    emailidchange = (event) => {
        this.setState({
            email_id: event.target.value

        })
    }
    phonenochange = (event) => {
        this.setState({
            phone_no: event.target.value

        })
    }
    additionalcontactchange = (event) => {
        this.setState({
            additional_contact: event.target.value

        })
    }
    detailschange = (event) => {
        this.setState({
            details: event.target.value

        })
    }
    startdatechange = (event) => {
        this.setState({
            start_date: event.target.value

        })
    }
    deadlinechange = (event) => {
        this.setState({
            deadline: event.target.value

        })
    }
    responsiblepersonchange = (event) => {
        this.setState({
            responsible_person: event.target.value

        })
    }
    followupdatechange = (event) => {
        this.setState({
           followup_date : event.target.value

        })
    }
    followupmessagechange = (event) => {
        this.setState({
            followup_message: event.target.value

        })
    }



    fileSelectHandler = (event) => {
        this.setState({
            upload_documents: event.target.files[0]
        })

    }
    handleBack(){
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
        let CategoryList=[];

       
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
        fd.append("project_name", this.state.project_name)
        fd.append("description", this.state.description)
        fd.append("company_name", this.state.company_name)
        fd.append("address", this.state.address)
        fd.append("contact_person", this.state.contact_person)
        fd.append("email_id", this.state.email_id)
        fd.append("phone_no", this.state.phone_no)
        fd.append("additional_contact", this.state.additional_contact)
        fd.append("details", this.state.details)
        fd.append("start_date", this.state.start_date)
        fd.append("deadline", this.state.deadline)
        fd.append("responsible_person", this.state.responsible_person)
        fd.append("followup_date", this.state.followup_date)
        fd.append("followup_message", this.state.followup_message)
        fd.append("upload_documents", this.state.upload_documents)


        axios({
            method: 'POST',
            // url: API_PATH.URL + "archives/",
            url:'http://127.0.0.1:8000/api/pm/BO/',
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
        const { project_name,description,company_name,address,contact_person,email_id,phone_no,additional_contact,details,start_date,deadline,responsible_person,followup_date,followup_message,upload_documents} = this.state
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
                            <h2>Add Business Opportunity</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Project Name:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={project_name} onChange={this.projectnamechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Description:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={description} onChange={this.descriptionchange} />
                            </div>
                        </div>  
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Company Name:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={company_name} onChange={this.companynamechange} />
                            </div>
                        </div>                  
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Address:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={address} onChange={this.addresschange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Contact Person:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={contact_person} onChange={this.contactpersonchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Email Id:</label>
                            <div class="col-sm-7">
                                <input type="email" name="name" class="form-control mt-4" value={email_id} onChange={this.emailidchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Phone No:</label>
                            <div class="col-sm-7">
                                <input type="tel" name="name" class="form-control mt-4" value={phone_no} onChange={this.phonenochange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Additional Contact:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={additional_contact} onChange={this.additionalcontactchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr"></label>                           
                             <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={details} onChange={this.detailschange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Start date:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={start_date} onChange={this.startdatechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Deadline:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={this.deadline} onChange={this.deadlinechange} />
                            </div>
                        </div>                    
                      
                   
                      
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-1" for="sel1">Responsible Person:</label>
                            <div class="col-sm-7">
                                <select class="myselect"  onChange={this.responsiblepersonchange}>
                                    <option value="1">1</option>
                                    
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                {/* {optionItmesO} */}
                              {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Followup date:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={this.followup_date} onChange={this.followupdatechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Followup Message:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={followup_message} onChange={this.followupmessagechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="file"> Upload Documents:</label>
                            <div class="col-sm-7">
                                <input type="file" name="myimage"  class="form-control-file border" onChange={this.fileSelectHandler} />
                            </div>
                        </div>
                        <div class="mybuttons">
                            <button className="btn btn-mysave " type="submit">Save</button>
                            <button className="btn btn-mycancel " type="submit"  onClick={()=>this.handleBack()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}


export default BusinessForm;

