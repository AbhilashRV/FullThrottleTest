import React from 'react';  
import './style.css';  
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Calendar from 'react-calendar';
import TodayIcon from '@material-ui/icons/Today';
import { SvgIcon } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker, { DateUtils } from "react-day-picker"

class Popup extends React.Component{  

    state = {
        date: new Date(),
        showCalender: false,
        
      }

      onChange = date => this.setState({ date });

      handleClick= ()=>{
        this.setState({  
            showCalender: !this.state.showCalender})
       }

       handleChange = date => {
        this.setState({
          startDate: date
          
        });
      };

   render(){
return (  
    <div>
<Modal.Dialog >
  <Modal.Header closeButton onClick={this.props.closePopup}>
    <Modal.Title>Actitiy Period of {this.props.tnames}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>{this.props.text}</p>
    <p>Start Time:-{this.props.start_time}</p>
    <p>End Time:-{this.props.end_time}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={this.props.closePopup}>Close</Button>
    <Button onClick={this.handleClick.bind(this)}><TodayIcon></TodayIcon></Button>   
     {this.state.showCalender ?  <DatePicker selected={this.state.startDate}
        onChange={this.handleChange}></DatePicker>:null}
  </Modal.Footer>
 
</Modal.Dialog> 

</div>
);  
}

}

export default Popup;