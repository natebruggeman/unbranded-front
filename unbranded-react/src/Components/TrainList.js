import React from 'react'
import '../index.css'

function TrainList(props){

  const listItems = props.booty.map((train, i) => {
    //if className is trainlist-li-delayed it gets the red line
    const className = train.delayed ? 'trainlist-li-delayed' : 'trainlist-li-onTime'

    return (// pass a key always, pass a class name sometimes
            <li key={i} className={className} onClick={() => props.waitboy(train)}>
              <strong>{train.stationName}</strong> -
              <span>platform: {train.platform}</span>
            </li>
            )
  });


  return (
    <React.Fragment>
      <h5>Train Schedule</h5>
      <ul>
        {listItems}
      </ul>
    </React.Fragment>
    )
}




export default TrainList;