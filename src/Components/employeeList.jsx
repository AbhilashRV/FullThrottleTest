import React, { Component } from 'react';
import {getUsers} from "../Services/users";
import Popup from './popUp';  

class EmployeeList extends Component {
    state = {  users: getUsers(), showPopup: false, tname:{} ,start_time:[] ,end_time:[]}

    handleClick = es =>
    { 
        if(es != null)
        {       
        var tname = es;
        console.log(tname)
        this.setState({tname:tname})
        }
        this.setState({  
            showPopup: !this.state.showPopup 
           // tname: tname
       }); 
       console.log(this.state.showPopup)
       console.log(this.state.tname)
       if(this.state.showPopup == false)
       {
       this.test(this.state.users[0].members, tname);
       }
    }

    test(data,ds ){
       
       var s = data.filter(a => a.real_name === ds );

      console.log(s)
        
         const a = s.map(a=>a.activity_periods);
         console.log(a)
         const start_time =  a[0].map(b=> b.start_time)
         const end_time = a[0].map(b=> b.end_time)
         const l = start_time[0]
         const k = end_time[0]
         this.setState({start_time:l , end_time:k});
        
    }

    render() { 
       
        return ( 
           <div>
                {this.state.users[0].members.map(u => 
                    <ul key={u.id}>
                        <li onClick={()=>this.handleClick(u.real_name)}>{u.real_name}
                        </li>
                       
                    </ul>
                )}
                {this.state.showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.handleClick.bind(this)}  tnames={this.state.tname} start_time={this.state.start_time} end_time={this.state.end_time}
/>  
: null  
}  
         </div>);
    }
}
 
export default EmployeeList;