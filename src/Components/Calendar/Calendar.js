import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from '../../axios-memos';
import classes from './Calendar.css';
import logo from '../../images/logo.png';


export default class Calendar extends React.Component {
state = {
    startDate : new Date(),
    textarea : ''
};

handleChange = date => {

    this.setState({
        startDate : date
    });
}
handleTextChange = event => {
    this.setState({ textarea: event.target.value });
  }


sendMemoHandler = () => {
    const sendMemo = {
      date: this.state.startDate,
      Text: this.state.textarea
    }
    axios.post('/memos.json', sendMemo)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  
  
render() {
    return(
        <div className="home">
            <img src={logo} alt="" ></img>
            <br></br>
            Select date: <br></br>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="dd.MM.yyyy"
                className="datepicker"
            />
        <br></br>
        <br></br>
            Write memo: 
        <br></br>
            <textarea placeholder='Write your memo. You can enlarge the textarea from the bottom right corner' 
                style={{ minHeight: 325, minWidth: 600 }} 
                onChange={this.handleTextChange}/>
        <br></br>
        <br></br>
            <form>
                <h3>Upload file:</h3>
                <input type="file" multiple accept="image/*"></input>
                
                
            </form>
        <br></br>
            Save memo: <br></br>
          
              <button onClick={() => this.sendMemoHandler()} >
            Send
              </button>
        <br></br>
              
              
            
        </div>
        
    );
}

}