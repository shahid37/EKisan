"use client"
import Layout from "@/components/common/Layout";
import Input from "@/components/forms/Input";
import submitContactData from "@/util/contact/submitContactForm";
import { useState } from "react";
import Swal from "sweetalert2"
function Page() {
    const [formData, setFromData] = useState()
    const submitContactForn = async (e) => {
        e.preventDefault()
        var status = await submitContactData(formData)
        if(status){
            Swal.fire("Form submited successfully", "We will replay you soon", "success")
        }
    }

    let name, value
    const handleFormChanges = (e) => {
        name = e.target.name
        value = e.target.value
        setFromData({
            ...formData,
            [name]: value
        })
    }
    return (
        <Layout>
            <div className="contact-us">
                <form onSubmit={submitContactForn} className="p-2 form">
                    <h1 className="heading text-3xl text-center">Contact Us</h1>
                    <Input
                        className="input-box"
                        placeholder="Your Name"
                        onChange={handleFormChanges}
                        type="text"
                        label={'Name'}
                        required
                        name="name"
                        id="name"

                    />
                    <Input
                        className="input-box"
                        placeholder="Your email ID (optional) - अपना ईमेल"
                        onChange={handleFormChanges}
                        label={'Email Id'}
                        type="email"
                        name="mail"
                        id="mail"
                    />
                    <Input
                        type="text"
                        name="phone"
                        pattern="[0-9]+"
                        label={"Mobile Number"}
                        onChange={handleFormChanges}
                        maxlength="10"
                        id="mobile"
                        minlength="10"
                        placeholder="Mobile no. - मोबाइल नंबर"
                        className="input-box"
                        required />

                    <Input
                        className="input-box"
                        placeholder="Subject (optional) - संपर्क का विषय"
                        onChange={handleFormChanges}
                        type="text"
                        label={"Subject"}
                        name="subject"
                        id="subject"
                    />
                    <div className="input-wrapper">
                        <label htmlFor="message">Message <span className="text-red-600">*</span></label>
                        <textarea
                            className="input-box"
                            placeholder="Please describe your issue or message here Properly - विषय का विस्तार"
                            name="message"
                            id="message"
                            cols="30"
                            rows="6"
                            onChange={handleFormChanges}
                            required
                        ></textarea>
                    </div>
                    <button className="button"
                        type="submit" >
                        Contact
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Page;
