import React from "react";
import List from "./List";

class Employee extends React.Component{
constructor(){
    super();
    this.state={
        id:"",
        name:"",
        address:"",
        designation:"",
        employees:[]
    
    }
}
saveData(event){
    event.preventDefault();
    let employees=this.state.employees;
     let employee={
        id:this.state.id,
        name:this.state.name,
        address:this.state.address,
        designation:this.state.designation

     }

    employees.push(employee)
    this.setState({employees:employees})
    this.reset();

}
reset(){
    this.setState({id:"",name:"",address:"", designation:""})
}
onIdChange(event){
    console.log(event)
 this.setState({id:event.target.value})
}
onNameChange(event){
    console.log(event)
    this.setState({name:event.target.value})
}


onAddressChange(event){
    console.log(event)
    this.setState({address:event.target.value})
}
onDesignationhange(event){
    console.log(event)
    this.setState({designation:event.target.value})
}
render(){
    return(
        <div>
            <center>
            <h1>Employee Create Form</h1>
            <div>
                <form>
                    <label>id:  </label>
                    <input type="text" name="id" value={this.state.id} onChange={(e)=>this.onIdChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>name:  </label>
                    <input type="text" name="name" value={this.state.name} onChange={(e)=>this.onNameChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>address: </label>
                    <input type="text" name="address" value={this.state.address} onChange={(e)=>this.onAddressChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>designation: </label>
                    <input type="text" name="designation" value={this.state.designation} onChange={(e)=>this.onDesignationhange(e)}/>
                    <br></br>
                    <br></br>
                    <button onClick={(e)=>this.saveData(e)}>Register</button>
                     <List employees={this.state.employees}/>
                </form>
            </div>
            </center>
        </div>
    )
}
}
export default Employee