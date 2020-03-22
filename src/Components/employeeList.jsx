import React, { Component } from 'react';
import {getUsers} from "../Services/users";

class EmployeeList extends Component {
    state = {  users: getUsers() }
    render() { 
        return ( 
           <div>
                {this.state.users[0].user.map(u => 
                    <ul key={u.id}>
                        <td >{u.name}</td>
                       
                    </ul>
                )}
         </div>);
    }
}
 
export default EmployeeList;