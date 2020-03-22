import React, { Component } from 'react';  
import { getUsers} from "../Services/users";

class Dashboard extends Component {
    state = { 
        users: getUsers()
     }
    render() { 
       
        return ( 

            <table className='table' striped bordered hover>
                <thead>
                    <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>phoneNo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users[0].user.map(u => 
                        <tr key={u.id}>
                            <td >{u.name}</td>
                            <td >{u.age}</td>
                            <td >{u.gender}</td>
                            <td >{u.email}</td>
                            <td >{u.phoneNo}</td>
                        </tr>
                    )}
                </tbody>
            </table>
         );
    }
}
 
export default Dashboard;