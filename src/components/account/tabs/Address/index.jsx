import StateDisctrict from '@/components/common/StateDistrict'
import Input from '@/components/forms/Input'
import { AuthContext } from '@/providers/AuthProviser'
import updateUser from '@/util/user/updateUser'
import React, { useContext, useEffect, useState } from 'react'
import Swal from "sweetalert2"
const Address = () => {
    const [formData, setFormData] = useState(null)
    const { user } = useContext(AuthContext)
    let name, value;
    const handleFormChanges = (event) => {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, address: { ...formData.address, [name]: value } });
    }
    useEffect(
        () => {
            setFormData(user)
        }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const registerUserStatus = await updateUser({
                data: formData, user: user
            })
            if (registerUserStatus) {
                Swal.fire("Detail Update", "", "success")
            }
        }
        catch (e) {
            console.error(e)
        }
    }
    if (formData === null || formData === undefined) { return null }
    else {
        return (
            <form onSubmit={handleSubmit}>
                <Input label={"Address Line 1"} type="text" onChange={handleFormChanges} name="address_line_1" defaultValue={formData.address?.address_line_1} placeholder='House No, Building Name' id="addressline1" className='form-control' />
                <Input label={"Address Line 2"} type="text" onChange={handleFormChanges} name="address_line_2" defaultValue={formData.address?.address_line_2} placeholder='Area, Sector, City' id="addressline2" className='form-control' />
                <Input label={"PIN Code"} type="text" onChange={handleFormChanges} name="pincode" defaultValue={formData.address?.pincode} placeholder='eg: 801110' id="PIN" className='form-control' />
                <button className="button">
                    Update
                </button>
            </form>
        )
    }

}

export default Address