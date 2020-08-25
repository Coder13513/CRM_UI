import React, { Component } from 'react'
import axios from 'axios';
import { API_PATH } from "../components/Global";


export class ArchiveList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Archives: [],
           

        }
        this.handleBack=this.handleBack.bind(this)

    }
    
    componentDidMount() {
        this.fetchArchives();
    }
    handleBack(){
        this.props.history.goBack()
    }

    fetchArchives() {
        const ticket = localStorage.getItem("authToken")
        axios({
            method: 'GET',
            url: API_PATH.URL + "auth2/employee/",
            // url: 'http://127.0.0.1:8000/api/auth/employee/',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer' + ticket
            },
        })
            .then(response => {
                // console.log(response);
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


    render() {
        const { Action, Archives } = this.state
     
        return (
            <div >
                 <form class="List">
                
                    <h2>List of Employees</h2>
               

                    <table class="table table-borderedList">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Id</th>
                                {/* <th>Channel</th>
                                <th>No of days</th> */}
                            </tr>
                        </thead>

                        {Archives.map(Archive => (
                            <tbody>
                            <tr key={Archive.id}>
                                <td>{Archive.first_name}</td>
                                <td>{Archive.employee_id}</td>
                                {/* <td>{Archive.num_of_days}</td> */}
                            </tr>
                            </tbody>
                        ))}
                    </table>
                </form>
            </div >
        )
    }
}

export default ArchiveList;

