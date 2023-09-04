import moment from 'moment';
import React, { useEffect, useState } from 'react'

function Time() {
    const [dateTime,setDateTime] = useState(new Date());
    useEffect(()=>{
        setInterval(() => {
            setDateTime(new Date());
        }, 1000);
    },[dateTime])
  return (
    <div>
      <span>{moment(dateTime).format('MMMM Do YYYY, h:mm:ss a')}</span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Time
