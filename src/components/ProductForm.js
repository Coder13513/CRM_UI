import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
// import { API_PATH } from "../components/Global";

class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Product_no: '',
            Product_name: '',
            Company_name: '',
            Product_Description: '',
            cost: '',

            Archives: [],
            // categoryL:[],

        }
    }

    productnochange = (event) => {
        this.setState({
            Product_no: event.target.value
        })
    }
    productnamechange = (event) => {
        this.setState({
            Product_name: event.target.value
        })
    }


    companynamechange = (event) => {
        this.setState({
            Company_name: event.target.value

        })
    }
    productdescriptionchange = (event) => {
        this.setState({
            Product_Description: event.target.value

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
        fd.append("Product_no", this.state.Product_no)
        fd.append("Product_name", this.state.Product_name)
        fd.append("Company_name", this.state.Company_name)
        fd.append("Product_Description", this.state.Product_Description)
        fd.append("cost", this.state.cost)

        axios({
            method: 'POST',
            // url: API_PATH.URL + "archives/",
            url:'http://127.0.0.1:8000/api/services/product/',
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
        const { Product_name, Product_no, Company_name, Product_Description, cost } = this.state
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
                            <h2>Add Product</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-4" for="usr">Product no:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={Product_no} onChange={this.productnochange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Product Name:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={Product_name} onChange={this.productnamechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Cost:</label>
                            <div class="col-sm-7">
                                <input type="number" step="any" name="name" class="form-control mt-4" value={cost} onChange={this.costchange} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Company Name:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={Company_name} onChange={this.companynamechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr"> Product Description:</label>
                            <div class="col-sm-7">
                                <textarea rows="4" cols="40" name="name" class="form-control mt-4" value={Product_Description} onChange={this.productdescriptionchange} />
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


export default ProductForm;

