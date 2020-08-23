import React, { Component } from 'react'
import axios from 'axios';
// import { API_PATH } from "../components/Global";


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
            // url: API_PATH.URL + "archives/",
            url: 'http://127.0.0.1:8000/api/pm/Project/',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer' + ticket
            },
        })
            .then(response => {
                // alert(response)
                console.log(response);
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
                
                    <h2>List of Projects</h2>
               

                    <table class="table table-borderedList">
                        <thead>
                            <tr>
                               
                                                               <th>Project Name</th>
                                                               <th>Owner</th>
                                {/* <th>Channel</th>
                                <th>No of days</th> */}
                            </tr>
                        </thead>

                        {Archives.map(Archive => (
                            <tbody>
                            <tr key={Archive.id}>
                            <td>{Archive.project_name}</td>
                                <td>{Archive.owner}</td>
                               
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

