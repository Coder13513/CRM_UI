import React, { Component } from 'react'
 import axios from 'axios'
import { Form } from 'react-bootstrap'
// import { API_PATH } from "../components/Global";

class ServiceForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            serviceId: '',
            name_c: '',           
            Type: '',
            description:'',
            cost:'',           

            Archives: [],
            // categoryL:[],

        }
    }

    serviceidchange = (event) => {
        this.setState({
            serviceId: event.target.value
        })
    }
    namechange = (event) => {
        this.setState({
            name_c: event.target.value
        })
    }

  
    typechange = (event) => {
        this.setState({
            Type: event.target.value

        })
    }
    descriptionchange = (event) => {
        this.setState({
            description: event.target.value

        })
    }
    costchange = (event) => {
        this.setState({
            cost: event.target.value

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
        fd.append("serviceId", this.state.serviceId)
        fd.append("name_c", this.state.name_c)
        fd.append("Type", this.state.Type)
        fd.append("description", this.state.description)
        fd.append("cost", this.state.cost)

        axios({
            method: 'POST',
            // url: API_PATH.URL + "archives/",
            url:'http://127.0.0.1:8000/api/services/service/',
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
        const { serviceId,name_c,Type,description,cost} = this.state
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
                            <h2>Add Service</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-4" for="usr">Service ID:</label>
                            <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={serviceId} onChange={this.serviceidchange} />
                                </div>
                               
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Company Name:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={name_c} onChange={this.namechange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Type:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={Type} onChange={this.typechange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Description:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={description} onChange={this.descriptionchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Cost:</label>
                                <div class="col-sm-7">
                                    <input type="number" step="any" name="name" class="form-control mt-4" value={cost} onChange={this.costchange} />
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


export default ServiceForm;

