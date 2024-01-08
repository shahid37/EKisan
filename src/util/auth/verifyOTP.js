import fetchUser from "@/util/user/fetchUser"
import Swal from "sweetalert2"
const verifyOtp = (otp) => {
    var confirmationResult = window.confirmationResult
    confirmationResult.confirm(otp).then((result) => {
        var uid = result.user.uid
        Swal.fire("Login Successful", "Thank you for login on eKisandarshan.in", 'success').then(async() => {
            const userData = await fetchUser({ userId: uid });
            if (userData === null) {
                window.location.replace("/register")
            }
            else {
                window.location.replace("/")
            }
        })

    }).catch((error) => {
        if (error.code === "auth/invalid-verification-code") {
            Swal.fire("Invalid OTP", "Enter correct OTP and try again", 'error')
        }
    })
}
export default verifyOtp;