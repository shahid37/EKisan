"use client"
import StateDisctrict from '@/components/common/StateDistrict'
import Select from '@/components/forms/Select'
import Input from '@/components/forms/Input'
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
            const registerUserStatus = await registerUser({ data: formData, user: user })
            if (registerUserStatus) {
                location.replace("/account")
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

                    <Input
                        onChange={handleFormChanges}
                        className="input-box"
                        required
                        type="text"
                        name="name"
                        label={"Name"}
                        id="name"
                        placeholder="eg: Ramesh"
                    />
                    <Select onChange={handleFormChanges} label={"Who are  you?"} id="usertype" required name="userType">
                        <option value="">User type - उपयोगकर्ता का प्रकार</option>
                        <option value="farmer"> Farmer - किसान</option>
                        <option value="corporate">
                            Company/Organisation - कंपनी/संस्थान
                        </option>
                        <option value="consumer">I want to Buy (Consumer)</option>
                    </Select>

                    <Input
                        onChange={handleFormChanges}
                        id="email"
                        className="input-box"
                        type="email"
                        name="email"
                        label={'Email'}
                        placeholder="Email (optional) - ईमेल (वैकल्पिक)"
                    />

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