import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SuccessPage = () => {
    const navigate = useNavigate();
    const handleNavHome = () => {
        navigate('/')
    }
    useEffect(()=>{
      setTimeout(() => {
        handleNavHome()
      },2000);
    })
  return (
    <div className='success-page'>
        <div className='success'>
            <h2>Payment Successful!</h2>
        </div>
    </div>
  )
}

export default SuccessPage