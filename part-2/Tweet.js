"use strict";

function Tweet({ username, name, date, message }){
  return (
    <div className="Tweet">
      <p>
        <span className="Tweet-name">{ name} </span>
        <span className="Tweet-username"> {username} </span>
        <span className="Tweet-date"> { date } </span>
      </p>
      <p className="Tweet-message">{ message}</p>
    </div>
  )
}