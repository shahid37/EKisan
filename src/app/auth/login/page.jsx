"use client"
import sendOTP from '@/util/auth/sendOTP';
import verifyOtp from '@/util/auth/verifyOTP';
export default function Login() {
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
  const handleOTP = async () => {
    var response = await sendOTP("9876543210");
    if (response == true) {
      toggleScreen();
    }
  }
  const handleVerification = () => {
    verifyOtp("555555")
  }
  return (

    <div className="login-page">
      <div className="login-box">
        <div className="phone">
          <h3 className="heading">Login</h3>
          <div className="input-box">
            <label htmlFor="">Enter phone number</label>
            <input type="number" placeholder='eg: 97XXXXXXXX' />
          </div>
          <button onClick={handleOTP} className="button">
            Next
          </button>
        </div>
        <div className="otp">
          <h3 className="heading">Verify</h3>
          <div className="input-box">
            <label htmlFor="">An OTP has sent to +91XXXXX5342 <span onClick={toggleScreen} className='link'>Change</span></label>
            <input type="number" placeholder='eg: 97XXXXXXXX' />
          </div>
          <button onClick={handleVerification} className="button">
            Next
          </button>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>

  )
}
