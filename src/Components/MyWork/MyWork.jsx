import React from 'react'
import '../MyWork/MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


function MyWork() {
  return (
    <div className='MyWork'>
        <div className="MyWork-title">
          <h1>My latest work</h1>
        </div>
        <div className="mywork_container">
            {mywork_data.map((work,index) => {
              return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork