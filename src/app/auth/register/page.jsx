"use client"
import StateDisctrict from '@/components/common/StateDistrict'
import { AuthContext } from '@/providers/AuthProviser'
import registerUser from '@/util/user/registerUser'
import { useContext, useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({})
    const { user } = useContext(AuthContext)
    let name, value;
    const handleFormChanges = (event) => {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const registerUserStatus = await registerUser({ data: formData, uid: user.uid })
            if (registerUserStatus) {
                location.replace("/profile")
            }
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="registration-page">
            <h3 className='heading'>Registration</h3>
            <form onSubmit={handleSubmit}>
                <div className="Form-container">
                    <div className="input-wrapper">
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={handleFormChanges}
                            className="input-box"
                            required
                            type="text"
                            name="name"
                            id="name"
                            placeholder="eg: Ramesh"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="usertype">Who are  you?</label>

                        <select id="usertype" required name="userType">
                            <option value="">User type - उपयोगकर्ता का प्रकार</option>
                            <option value="farmer"> Farmer - किसान</option>
                            <option value="corporate">
                                Company/Organisation - कंपनी/संस्थान
                            </option>
                            <option value="consumer">I want to Buy (Consumer)</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>

                        <input
                            onChange={handleFormChanges}
                            id="email"
                            className="input-box"
                            type="email"
                            name="email"
                            placeholder="Email (optional) - ईमेल (वैकल्पिक)"
                        />
                    </div>
                    <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} />
                    <div className="checkbox-wrapper">
                        <input
                            onChange={handleFormChanges} required type="checkbox" name="agree" />
                        <label htmlFor="agree">
                            <p>
                                I agree to the terms and conditions mentioned in privacy policy and
                                agreement statement.
                            </p>
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            onChange={handleFormChanges} className="button" type="submit" defaultValue="Register" />
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Register