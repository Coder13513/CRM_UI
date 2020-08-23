import React, { Component } from 'react'
import axios from 'axios'
import { API_PATH } from "../components/Global";

export class SubscribersForm extends Component {

    constructor(props) {
        super(props)

        this.state = {

            // role: 'Viewer',
            // is_staff: false,

            username: '',
            password: '',
            confirm_password: '',
            first_name: '',
            last_name: '',
            email: '',           
            


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
   

  
    submitHandler = (event) => {
        
        alert(event)
        event.preventDefault()

        let fd = new FormData()

        // fd.append("role", this.state.role)
        fd.append("first_name", this.state.first_name)
        fd.append("last_name", this.state.last_name)
        fd.append("email", this.state.email)
        fd.append("phone", this.state.phone)
        fd.append("password", this.state.password)
        fd.append("confirmed_password", this.state.confirmed_password)
        fd.append("username", this.state.username)
        // fd.append("parental_lock", this.state.parental_lock)
        // fd.append("recording_time", this.state.recording_time)
        // fd.append("channel_packages", this.state.channel_packages)
        // fd.append("security_question", this.state.security_question)
        // fd.append("security_answer", this.state.security_answer)

        alert(JSON.stringify(fd));
        const ticket = localStorage.getItem("authToken")
        axios({
            method: 'POST',
            // url: API_PATH.URL +"auth/register/",
            url: 'http://127.0.0.1:8000/api/auth/user/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ticket             },
            data: fd
        })
            .then(response => {
                console.log(response+JSON.stringify(this.state))

            })
            .catch(error => {
                console.log('failure:' + JSON.stringify(this.state));
                console.log(error)
            })

    }


    render() {
        const { first_name, last_name, email,username, password,confirmed_password , parental_lock, recording_time, phone,image, security_question,security_answer,channel_packages } = this.state
        return (
            <div>


                <form onSubmit={this.submitHandler} class="archive"  >
                    <div >
                    <h2>User </h2>
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
                         <button className="btn btn-mycancel " type="submit">Cancel</button> 
                    </div>

                </form>
            </div>




        )
    }
}

export default SubscribersForm;

