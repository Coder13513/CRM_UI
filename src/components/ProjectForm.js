import React, { Component } from 'react'
// import axios from 'axios'
import { Form } from 'react-bootstrap'
// import { API_PATH } from "../components/Global";

class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project_name:'',
            description:'',
            start_date:'',
            project_deadline:'',
            owner:'',
            project_status:'',
            team_lead:'',
            team_member:'',
            task_assigned:'',
            updates:'',
            task_deadline:'',                     
            Archives:[],           
            // categoryL:[],
           
        }
    }
    projectnamechange = (event) => {
        this.setState({
            project_name: event.target.value
        })
    }
    discriptionchange = (event) => {
        this.setState({
            discription: event.target.value
        })
    }  
   
    startdatechange = (event) => {
        this.setState({
            start_date: event.target.value

        })
    }
    projectdeadlinechnage = (event) => {
        this.setState({
            project_deadline: event.target.value

        })
    }
    ownerchange = (event) => {
        this.setState({
            owner: event.target.value

        })
    }

    projectstatuschange = (event) => {
        this.setState({
           project_status : event.target.value

        })
    }
    teamleadchange = (event) => {
        this.setState({
            team_lead: event.target.value

        })
    }
    teammemberchange = (event) => {
        this.setState({
            team_member: event.target.value

        })
    }
    taskassignedchange= (event) => {
        this.setState({
            task_assigned: event.target.value

        })
    }
    updateschange= (event) => {
        this.setState({
            updates: event.target.value

        })
    }
    taskdeadlinechange= (event) => {
        this.setState({
            task_deadline: event.target.value

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
        fd.append("project_name", this.project_name)
        fd.append("description", this.state.description)
        fd.append("start_date", this.state.start_date)
        fd.append("project_deadline", this.state.project_deadline)
        fd.append("owner", this.state.owner)
        fd.append("project_status", this.state.project_status)
        fd.append("team_lead", this.state.team_lead)
        fd.append("team_member", this.state.team_member)
        fd.append("task_assigned", this.task_assigned)
        fd.append("updates", this.state.updates)
        fd.append("task_deadline", this.state.task_deadline)
       

        // axios({
        //     method: 'POST',
        //     url: API_PATH.URL + "archives/",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer'+ticket 
        //     },
        //     data: fd
        // })
        //     .then(response => {
        //         console.log(response)

        //     })
        //     .catch(error => {
        //         console.log('failure:' + JSON.stringify(this.state));
        //         console.log(error)
        //     })

    }

    render() {
        const { project_name,description,start_date,project_deadline,owner,project_status,team_lead,team_member,task_assigned,updates,task_deadline} = this.state
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
                            <h2>Add Project</h2>
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
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Start date:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={start_date} onChange={this.startdatechange} />
                            </div>
                        </div>                  
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Project Deadline:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={project_deadline} onChange={this.projectdeadlinechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Owner:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={owner} onChange={this.ownerchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-1" for="sel1">Project Status:</label>
                            <div class="col-sm-7">
                                <select class="myselect"  value={project_status} onChange={this.projectstatuschange}>
                                <option value="1">Planning</option>                                    
                                <option value="2">Developing</option>
                                <option value="3">Testing</option>
                                <option value="4">Deployement</option>
                                <option value="4">Completed</option>
                                {/* {optionItmesO} */}
                              {/* <option key={Archives.id} value= '1' >{Archives.email}</option> */}
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label  mt-4" for="usr">Team Lead:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={team_lead} onChange={this.teamleadchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-1 " for="usr">Team Member:</label>
                            <div class="col-sm-7">
                                <select class="myselect"  value={team_member} onChange={this.team_memberchange}>
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
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Task Assigned</label>                           
                             <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={task_assigned} onChange={this.taskassignedchange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Updates:</label>
                            <div class="col-sm-7">
                                <input type="text" name="name" class="form-control mt-4" value={updates} onChange={this.updatesdatechange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label mt-4" for="usr">Task Deadline:</label>
                            <div class="col-sm-7">
                                <input type="date" name="name" class="form-control mt-4" value={this.taskdeadline} onChange={this.taskdeadlinechange} />
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


export default ProjectForm;

