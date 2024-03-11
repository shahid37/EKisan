"use client"
import sendOTP from '@/util/auth/sendOTP';
import verifyOtp from '@/util/auth/verifyOTP';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function Login() {
  const [authData, setAuthData] = useState({
    phone: "",
    otp: "",
  })
  const [loading, setLoading] = useState(false)
  const toggleScreen = () => {
    const box = document.querySelector(".login-box")
    const phoneBox = document.querySelector(".login-box .phone")

    if (box.scrollLeft < 200) {

      box.scrollTo(phoneBox.clientWidth, 0);
    }
    else {
      box.scrollTo(0, 0);
    }
  }
  let name, value;
  const handleChnage = (event) => {
    name = event.target.name;
    value = event.target.value;
    setAuthData({ ...authData, [name]: value });
  }

  const handleOTP = async (e) => {
    e.preventDefault()
    setLoading(true)
    var response = await sendOTP(authData.phone);
    if (response == true) {
      toggleScreen();
      setLoading(false)
    }
  }
  const handleVerification = async (e) => {
    e.preventDefault()
    setLoading(true)
    var status = await verifyOtp(authData.otp, setLoading)
  }
  return (

    <div className="login-page">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="login-box">
        <form onSubmit={handleOTP} className="phone">
          <h3 className="heading">Login / Sign Up</h3>
          <div className="input-wrapper">
            <label htmlFor="">Enter phone number</label>
            <input required name='phone' onChange={handleChnage} type="number" placeholder='eg: 97XXXXXXXX' />
          </div>
          <button className="button">
            Next
          </button>
        </form>
        <form onSubmit={handleVerification} className="otp">
          <h3 className="heading">Verify</h3>
          <div className="input-wrapper">
            <label htmlFor="">An OTP has sent to +91{authData.phone} <span onClick={toggleScreen} className='link'>Change</span></label>
            <input maxLength={"6"} pattern="[0-9.]+" required name="otp" onChange={handleChnage} type="text" placeholder='XXXXXX' />
          </div>
          <button className="button">
            Next
          </button>
        </form>
      </div>
      <div id="recaptcha-container"></div>
    </div>

  )
}
