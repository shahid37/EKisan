"use client"
import Layout from "@/components/common/Layout";
import StateDisctrict from "@/components/common/StateDistrict";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import { database } from "@/firebase";
import fetchCategories from "@/util/product/fetchCategories";
import fetchCrops from "@/util/product/fetchCrops";
import { push, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function Page() {
    const [crops, setCrops] = useState([]);
    const [formValue, setFormValue] = useState({
        category: "",
        organic: "no"
    })
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            setCrops(await fetchCrops())
            setCategories(await fetchCategories({}))
        }
        fetchData();
    }, [])
    let name, value
    const handleFormChanges = (e) => {
        name = e.target.name
        value = e.target.value
        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    const submitQueryForm = async (e) => {
        e.preventDefault()
        const enquiryRef = ref(database, "enquiry")
        push(enquiryRef, {
            TIMESTAMP: Date.now(),
            ...formValue
        })
        .then(() => {
            Swal.fire("Form submited successfully", "We will replay you soon", "success")
        })
    }
    return (
        <Layout>
            <div className="contact-us">
                <form onSubmit={submitQueryForm} className="p-2 form">
                    <h1 className="heading text-3xl text-center">Bulk Query</h1>
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

                    <StateDisctrict hideBlock formData={formValue} handleFormChanges={handleFormChanges} />
                    <Input
                        className="input-box"
                        placeholder="Addition Message (optional)"
                        onChange={handleFormChanges}
                        type="text"
                        label={"Addition Message"}
                        name="details"
                        id="details"
                    />
                    <Select
                        id={`category`}
                        label="Product Category"
                        required
                        value={formValue.category}
                        name={`category`}
                        onChange={handleFormChanges}
                    >
                        <option value="">Crop Category - फसल का प्रकार</option>
                        {
                            categories.map((item, index) => {
                                return <option key={index} value={item.categorieName}>{item.categorieName}</option>
                            })
                        }
                    </Select>

                    <Select
                        name={`name`}
                        required
                        value={formValue.cropName}
                        id={`crop-name`}
                        label={"Product Name"}
                        disabled={formValue.category === undefined || formValue.category === "" ? true : false}
                        onChange={handleFormChanges}>
                        <option value="">Which Crop you grow</option>
                        <option value={"custom"}>Custom</option>
                        {
                            crops.map((item, cropIndex) => {
                                if (item.category === formValue.category) {
                                    return <option key={cropIndex} value={item.cropName}>{item.cropName}</option>
                                }
                                return null
                            })
                        }
                    </Select>
                    {
                        formValue.name === "custom" &&
                        <Input
                            placeholder="Enter custom name"
                            label="Item Name"
                            name="custom_name"
                            required
                            type="text"
                            onChange={handleFormChanges}
                        />
                    }

                    <Input
                        className="input-box"
                        placeholder="Quantity"
                        onChange={handleFormChanges}
                        type="text"
                        label={"Quantity"}
                        name="quantity"
                        id="subject"
                    />
                    <button className="button"
                        type="submit" >
                        Send Query
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Page;
