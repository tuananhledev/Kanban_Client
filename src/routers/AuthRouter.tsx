import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Login, SignUp } from '../screens'
import { Typography } from 'antd'

const {Title}=Typography

const AuthRouter = () => {
  return (
    <div className="container-fuild">
      <div className="row">
        <div 
          className="col d-none d-lg-block text-center" 
          style={{marginTop:'15%'}}>
          <div className="mb-4">
            <img 
              style={{
                width:256,
                objectFit:'cover',
              }}
              src={
                'https://firebasestorage.googleapis.com/v0/b/qlkh-6f29a.appspot.com/o/kanban-logo.png?alt=media&token=a479df41-2952-4e09-bd14-40b3981e408b'
              }
              alt=""
              />
          </div>
          <Title className='text-primary'>KANBAN</Title>
        </div>
        <div className="col content-center">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </div>
   
  )
}

export default AuthRouter

//17:00