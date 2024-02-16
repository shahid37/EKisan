import { auth } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Swal from "sweetalert2"
const sendOTP = (number) => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // signIn();
        }
    });

    return new Promise(resolve => {
        const phoneNumber = `+91${number}`;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier).catch((error) => {
            if (error.code === "auth/invalid-phone-number") {
                Swal.fire("Invalid phone number", "Enter correct phone number and try again", 'error').then(() => {
                    window.location.reload()
                })
            }
        })
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                resolve(true)
            }).catch((error) => {
                console.error(error)
            });
    })
}

export default sendOTP