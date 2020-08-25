import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { API_PATH } from "../components/Global";

class PoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            from_company: '',
            vendor_name: '',           
            PO_Number: '',
         
            PO_Date:'',
            // Total:'',
            // vendor_ID:'',
            Product:'1',
            description:'',
            rate:'',
          
            Qty:'',
            Discount:'',
            Tax:'',
            Archives: [],
            // categoryL:[],

        }
    }

    fromcompanychange = (event) => {
        this.setState({
            from_company: event.target.value
        })
    }
    vendornamechange = (event) => {
        this.setState({
            vendor_name: event.target.value
        })
    }

  
   POnumberchange = (event) => {
        this.setState({
            PO_Number: event.target.value

        })
    }
    POdatechange = (event) => {
        this.setState({
            PO_Date: event.target.value

        })
    }
   
    Totalchange = (event) => {
        this.setState({
            Total: event.target.value

        })
    }
     
    vendorIDchange = (event) => {
        this.setState({
            vendor_ID: event.target.value

        })
    }
    Productchange = (event) => {
        this.setState({
            Product: event.target.value

        })
    }
    descriptionchange = (event) => {
        this.setState({
            description: event.target.value

        })
    }
    ratechange = (event) => {
        this.setState({
            rate: event.target.value

        })
    }
    Qtychange = (event) => {
        this.setState({
            Qty: event.target.value

        })
    }
    Discountchange = (event) => {
        this.setState({
            Discount: event.target.value

        })
    }
    Taxchange = (event) => {
        this.setState({
            Tax: event.target.value

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

        fd.append("from_company", this.from_company)
        fd.append("vendor_name", this.state.vendor_name)       
        fd.append("PO_Number", this.state.PO_Number)
        fd.append("PO_Date", this.state.PO_Date)
        // fd.append("Total", this.state.Total)
        // fd.append("vendor_ID", this.state.vendor_ID)
        fd.append("Product", this.state.Product)
        fd.append("description", this.state.description)
        fd.append("rate", this.state.rate)
        fd.append("Qty", this.state.Qty)
        fd.append("Discount", this.state.Discount)
        fd.append("Tax", this.state.Tax)

        axios({
            method: 'POST',
            url: API_PATH.URL + "finance/po/",
            // url:'http://127.0.0.1:8000/api/finance/po/',
            headers: {
                'Content-Type': 'application/json',
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
        const {from_company,vendor_name,PO_Date,PO_Number,Total,vendor_ID,Product,description,rate,Qty,Discount,Tax } = this.state
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
                            <h2>Add Purchase Order</h2>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-4" for="usr">From Company:</label>
                            <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={from_company} onChange={this.fromcompanychange} />
                                </div>
                               
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Vendor Name:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={vendor_name} onChange={this.vendornamechange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">PO  No:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={PO_Number} onChange={this.POnumberchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">PO Date:</label>
                                <div class="col-sm-7">
                                    <input type="date" name="name" class="form-control mt-4" value={PO_Date} onChange={this.POdatechange} />
                                </div>
                            </div>
  
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Total:</label>
                                <div class="col-sm-7">
                                    <input type="number" step="any" name="name" class="form-control mt-4" value={Total} onChange={this.Totalchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Vendor ID:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={vendor_ID} onChange={this.vendorIDchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-2" for="usr">Product:</label>                               
                                <div class="col-sm-7">
                                <select class="myselect"  value={Product} onChange={this.Productchange}>
                                <option value="1">1</option>                                    
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="4">5</option>
                                {/* {optionItmesO} */}
                              {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                                </select>
                                    
                                </div>
                            </div>
                          
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Description:</label>
                                <div class="col-sm-7">
                                    <input type="text" name="name" class="form-control mt-4" value={description} onChange={this.descriptionchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Rate:</label>
                                <div class="col-sm-7">
                                    <input type="number" step="any" name="name" class="form-control mt-4" value={rate} onChange={this.ratechange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Qty:</label>
                                <div class="col-sm-7">
                                    <input type="number" step="any" name="name" class="form-control mt-4" value={Qty} onChange={this.Qtychange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Tax:</label>
                                <div class="col-sm-7">
                                    <input type="number" step="any" name="name" class="form-control mt-4" value={Tax} onChange={this.Taxchange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label mt-4" for="usr">Discount:</label>
                                <div class="col-sm-7">
                                    <input type="number" step="any" name="name" class="form-control mt-4" value={Discount} onChange={this.Discountchange} />
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


export default PoForm;

