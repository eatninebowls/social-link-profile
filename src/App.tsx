// import { useState } from 'react'
import './App.less'

function App() {
  const btnList=[
    'GitHub','Frontend Mentor','LinkedLn','Twiter','Instagram'
  ]
  return (
      <div className='container'>
        <div className='main'>
            <img className='avatar' src="./src/assets/images/avatar-jessica.jpeg" alt="" />
          <div className='out-desc'>
            <div className='user-name'>
            <h2>Jessica Randall</h2>
          </div>
          <div className='user-message'>
            London, United Kingdom
          </div>
          </div>

          <div className='user-desc'>
            "Front-end develop and avid reader"
          </div>
          <div className='btn-list'>
            {
              btnList.map((name)=>(
                <button className='btn' key={name}>{name}</button>
              ))
            }
          </div>
        </div>

      </div>
  )
}

export default App
