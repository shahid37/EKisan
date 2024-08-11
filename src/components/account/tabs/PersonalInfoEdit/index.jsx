
import StateDisctrict from '@/components/common/StateDistrict'
import Input from '@/components/forms/Input'
import { AuthContext } from '@/providers/AuthProviser'
import updateUser from '@/util/user/updateUser'
import { useContext, useEffect, useState } from 'react'
import Swal from "sweetalert2"
const PersonalInfoEdit = () => {
    const [formData, setFormData] = useState(null)
    const { user } = useContext(AuthContext)
    let name, value;
    const handleFormChanges = (event) => {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    useEffect(
        () => {
            setFormData(user)
        }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const registerUserStatus = await updateUser({ data: formData, user: user })
            if (registerUserStatus) {
                Swal.fire("Detail Update", "", "success")
            }
        }
        catch (e) {
            console.error(e)
        }
    }
    if (formData === null) { return null }
    else {
        return (
            <>

                <form onSubmit={handleSubmit}>
                    <Input
                        onChange={handleFormChanges}
                        className="input-box"
                        required
                        type="text"
                        name="name"
                        label={"Name"}
                        id="name"
                        defaultValue={formData.name}
                        placeholder="eg: Ramesh"
                    />
                    <Input
                        onChange={handleFormChanges}
                        className="input-box"
                        type="text"
                        disabled={true}
                        name="phone"
                        label={"Phone Number"}
                        id="phone"
                        defaultValue={formData.phone}
                    />
                    <Input
                        onChange={handleFormChanges}
                        id="email"
                        className="input-box"
                        type="email"
                        name="email"
                        label={'Email'}
                        defaultValue={formData.email}
                        placeholder="Email"
                    />

                    <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} />
                    <button className="button">Update</button>
                </form>
            </>
        )
    }
}

export default PersonalInfoEdit