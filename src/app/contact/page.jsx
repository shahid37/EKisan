"use client"
import Layout from "@/components/common/Layout";
import { useState } from "react";
function Page() {
    const [formData, setFromData] = useState()
    const submitContactForn = (e) => {
        e.preventDefault()
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
                    <div className="input-wrapper">
                        <label htmlFor="name">Name</label>
                        <input
                            className="input-box"
                            placeholder="Your Name"
                            onChange={handleFormChanges}
                            type="text"
                            required
                            name="name"
                            id="name"

                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="mail">Email Id</label>

                        <input
                            className="input-box"
                            placeholder="Your email ID (optional) - अपना ईमेल"
                            onChange={handleFormChanges}
                            type="email"
                            name="mail"
                            id="mail"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="text"
                            name="phone"
                            pattern="[0-9]+"
                            onChange={handleFormChanges}
                            maxlength="10"
                            id="mobile"
                            minlength="10"
                            placeholder="Mobile no. - मोबाइल नंबर"
                            className="input-box"
                            required />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="subject">Subject</label>
                        <input
                            className="input-box"
                            placeholder="Subject (optional) - संपर्क का विषय"
                            onChange={handleFormChanges}
                            type="text"
                            name="subject"
                            id="subject"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="message">Message</label>
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
                    <input className="button"
                        type="submit" value="Send" />
                </form>
            </div>
        </Layout>
    );
}

export default Page;
