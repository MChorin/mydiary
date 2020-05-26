import React, { Component } from 'react';
import './App.css';
import Calendar from './Components/Calendar/Calendar';
import axios from './axios-memos';

import DatePicker from 'react-datepicker';
import { calendarFormat } from 'moment';

const style = {
  position: "relative",
  margin: "50px auto"
}

function App() {
  
  return (
    <div className="App">
      <Calendar />
      
        </div>
  );
}

export default App;
