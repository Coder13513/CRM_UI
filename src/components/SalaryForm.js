import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
// import { API_PATH } from "../components/Global";

class SalaryForm extends Component {

    constructor(props) {
        super(props)
        this.state = {


            EmpId: '1',
            salaryMonth: '',
            unpaid_leaves: '',
            paid_leaves: '',
            activeDays: '',
            workingDays: '',
            total_Salary_Amount: '',

            Archives: [],
            // categoryL:[],

        }
    }

   
    empidchange = (event) => {
        this.setState({
            EmpId: event.target.value
        })
    }
    salaryidchange = (event) => {
        this.setState({
            salaryId: event.target.value
        })
    }

    salarymonthchange = (event) => {
        this.setState({
            salaryMonth: event.target.value

        })
    }
   

    unpaidchange = (event) => {
        this.setState({
            unpaid_leaves: event.target.value

        })
    }
    paidchange = (event) => {
        this.setState({
            paid_leaves: event.target.value

        })
    }
    activechange = (event) => {
        this.setState({
            activeDays: event.target.value

        })
    }
    workingchange = (event) => {
        this.setState({
            workingDays: event.target.value

        })
    }
    totalchange = (event) => {
        this.setState({
            total_Salary_Amount: event.target.value

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

       
        fd.append("EmpId", this.state.EmpId)
        // fd.append("salaryId", this.state.salaryId)
        fd.append("salaryMonth", this.state.salaryMonth)
        fd.append("activeDays", this.state.activeDays)
        fd.append("workingDays", this.state.workingDays)
        fd.append("unpaid_leaves", this.state.unpaid_leaves)
        fd.append("paid_leaves", this.state.paid_leaves)
        fd.append("total_Salary_Amount", this.state.total_Salary_Amount)


        axios({
            method: 'POST',
            // url: API_PATH.URL + "archives/",
            url: "http://127.0.0.1:8000/api/payroll/monthsal/", 
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
        const { EmpId,salaryMonth,salaryId,activeDays,workingDays, unpaid_leaves, paid_leaves, total_Salary_Amount } = this.state
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
                            <h2> Monthly Salary</h2>
                     </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-2" for="usr">Emp Id:</label>
                            <div class="col-sm-7">
                                <select class="myselect"  onChange={this.empidchange}>
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
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Salary Month:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={salaryMonth} onChange={this.salarymonthchange} />
                            </div>
                        </div>
                        {/* <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-1" for="usr">Salary  Id:</label>
                            <div class="col-sm-7">
                                <select class="myselect" value={salaryId} onChange={this.salaryidchange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="4">5</option>
                                    {/* {optionItmesO} */}
                                    {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                                {/* </select>

                            </div>
                        </div> */} 
                      

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Unpaid Leaves :</label>
                            <div class="col-sm-7">
                                <input type="number" name="name" class="form-control mt-4" value={unpaid_leaves} onChange={this.unpaidchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Paid Leaves :</label>
                            <div class="col-sm-7">
                                <input type="number" step="any" name="name" class="form-control mt-4" value={paid_leaves} onChange={this.paidchange} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Active Days :</label>
                            <div class="col-sm-7">
                                <input type="number" name="name" class="form-control mt-4" value={activeDays} onChange={this.activechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Working Days:</label>
                            <div class="col-sm-7">
                                <input type="number" step="any" name="name" class="form-control mt-4" value={workingDays} onChange={this.workingchange} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Total Salary Amount:</label>
                            <div class="col-sm-7">
                                <input type="text" step="any" name="name" class="form-control mt-4" value={total_Salary_Amount} onChange={this.totalchange} />
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


export default SalaryForm;

