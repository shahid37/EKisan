"use client"
import Input from '@/components/forms/Input'
import Select from '@/components/forms/Select'
import { AuthContext } from '@/providers/AuthProviser'
import editCorporateProfile from '@/util/account/editCorporateProfile'
import editFarmerProfile from '@/util/account/editFarmerProfile'
import { useContext, useState } from 'react'


const EditCorporateProfile = () => {
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        ...user.corporateData
    })

    let name, value;
    const handleFormChanges = (event) => {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const handleFormSubmmit = (e) => {
        e.preventDefault();
        editCorporateProfile({ data: formData, user: user })
    }
    return (
        <>
            <form onSubmit={handleFormSubmmit} className='px-2 py-4'>
                <Select
                    onChange={handleFormChanges}
                    required
                    value={formData.company_type}
                    name="company_type"
                    id="companytype"
                    label={"Company Type"}
                >
                    <option value="">Select Company Type</option>
                    <option value="Manufacturer">Manufacturer</option>
                    <option value="Seller-Vendors-Distributor">Seller/Vendors/Distributor</option>
                    <option value="FPO-SHG">FPO (Farmer Producer Orgnisation)/SHG (Self Help Group)</option>
                </Select>
                <Input
                    onChange={handleFormChanges}
                    label="Contact Person Name"
                    required
                    type="text"
                    defaultValue={formData.contact_person_name}
                    name="contact_person_name"
                    id="contact_person_name"
                    placeholder="Contact Person Name" />
                <Input
                    onChange={handleFormChanges}
                    required
                    type="text"
                    defaultValue={formData.contact_person_email}
                    name="contact_person_email"
                    id="contact_person_email"
                    label="Contact Person Email"
                    placeholder="eg:name@company.com"
                />
                <Input
                    onChange={handleFormChanges}
                    required
                    type="phone" max="9999999999" min="1000000000" maxLength="10" minLength="10"
                    defaultValue={formData.contact_person_phone}
                    name="contact_person_phone"
                    label="Contact Person Phone"
                    id="contact-person-phone" placeholder="97XXXXXXXX" />
                <Input
                    onChange={handleFormChanges}
                    required
                    type="text"
                    defaultValue={formData.address}
                    name="address"
                    id="address"
                    label={"Company Address"}
                    placeholder="eg: 15, Kohinoor Capital, Bandra, Mumbai" />

                <Input
                    onChange={handleFormChanges}
                    maxLength={15}
                    type="text"
                    defaultValue={formData.gst}
                    name="gst"
                    id="gst"
                    label={"GST IN"}
                    placeholder="GST IN (optional)" />
                <Input
                    onChange={handleFormChanges}
                    label={"ISO Certification Number"}
                    type="text"
                    defaultValue={formData.iso}
                    name="iso"
                    id="iso"
                    placeholder="ISO Certification Number (optional)" />
                <Input
                    onChange={handleFormChanges}
                    type="text"
                    defaultValue={formData.website}
                    name="website"
                    id="website"
                    label={"Company Website"}
                    placeholder="Eg: company.com" />
                <button id="submit" className='button'
                    type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}

export default EditCorporateProfile