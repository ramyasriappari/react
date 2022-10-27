import React from "react";

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <div>
                <center>
                <h1>Employee List</h1>
                
                <table border={1}>
                             
                    <tr>
                        <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Designation</th>
                        </thead>
                    </tr>
                    
                    <tr>                  
                    {this.props.employees.map((item)=>{
                     return <div>   
                           <tbody>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.designation}</td>
                            </tbody>
                        </div>
                    }
                    )
                    }
        
                 </tr>
                 
                </table>
                </center>

            </div>
        );
    }
}
export default List