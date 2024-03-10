"use client"
import Input from '@/components/forms/Input'
import Select from '@/components/forms/Select'
import { AuthContext } from '@/providers/AuthProviser'
import createCorporateProfile from '@/util/create-profile/createCorporateProfile'
import React, { useContext, useState } from 'react'

const Corporate = () => {
  const { user } = useContext(AuthContext)
  const [formData, setFormData] = useState([])
  let name, value;
  const handleFormChanges = (event) => {
    name = event.target.name;
    value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }
  const handleFormSubmmit = (e) => {
    e.preventDefault();
    createCorporateProfile({ data: formData, user: user })
  }
  return (
    <>
      <form onSubmit={handleFormSubmmit} className='px-2 py-4'>
        <h4 className='heading'>Complete Your Profile</h4>
        <Input
          onChange={handleFormChanges}
          required
          type="text" name="name"
          id="name"
          label="Company Name"
          placeholder="Company Name" />
        <Select
          onChange={handleFormChanges}
          required
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
          type="text" name="contact_person_name"
          id="contact_person_name"
          placeholder="Contact Person Name" />
        <Input
          onChange={handleFormChanges}
          required
          type="text" name="contact_person_email"
          id="contact_person_email"
          label="Contact Person Email"
          placeholder="eg:name@company.com"
        />
        <Input
          onChange={handleFormChanges}
          required
          type="phone" max="9999999999" min="1000000000" maxLength="10" minLength="10" name="contact_person_phone"
          label="Contact Person Phone"
          id="contact-person-phone" placeholder="97XXXXXXXX" />
        <Input
          onChange={handleFormChanges}
          required
          type="text" name="address"
          id="address"
          label={"Company Address"}
          placeholder="eg: 15, Kohinoor Capital, Bandra, Mumbai" />

        <Input
          onChange={handleFormChanges}
          maxLength={15}
          type="text" name="gst"
          id="gst"
          label={"GST IN"}
          placeholder="GST IN (optional)" />
        <Input
          onChange={handleFormChanges}
          label={"ISO Certification Number"}
          type="text" name="iso"
          id="iso"

          placeholder="ISO Certification Number (optional)" />
        <Input
          onChange={handleFormChanges}
          type="text" name="website"
          id="website"
          label={"Company Website"}
          placeholder="Eg: company.com" />

        <p className='ml-2'>
          <input required type="checkbox" name="agree"
            id="agree"
          /> <label htmlFor="agree"> I agree to the terms and condition mentioned in privacy policy and agreement statement</label>
        </p>




        {/* <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} /> */}
        <button id="submit" className='button'
          type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default Corporate