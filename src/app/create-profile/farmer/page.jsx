"use client"
import fetchCategories from '@/util/product/fetchCategories';
import fetchProducts from '@/util/product/fetchProducts';
import Radio from '@mui/material/Radio';

import React, { useEffect, useState } from 'react'

const Farmer = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchProducts({})
            setProducts(productsList)
            setCategories(await fetchCategories({}))
        }
        fetchData();

    }, [])
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: true,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
        size: "small"
    });
    const handleFormChanges = () => {

    }
    const createFarmerAccount = () => {

    }
    return (
        <div className="registration px-2">
            <form onSubmit={createFarmerAccount}>
                <div id="wrapper">

                    <div className="crops">
                        {/* <h5>1<sup>st</sup> Farm</h5> */}
                        <div className="input-wrapper">
                            <label htmlFor={`crop-type`}>What kind of crop you grow</label>
                            <select id={`crop-type`} required name="cropType" onChange={handleFormChanges}>
                                <option value="">Crop Category - फसल का प्रकार</option>
                                {
                                    categories.map((item, index) => {
                                        if (
                                            item.allowedTo === "all"
                                        ) {
                                            return <>
                                                <option value={item.categorieName}>{item.categorieName}</option>
                                            </>
                                        }
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor={`crop-name`}>Crop you grow in this Farm</label>
                        <select name="cropName"
                            required
                            id={`crop-name`}
                            disabled={formData.cropType === undefined || formData.cropType === "" ? true : false}
                            onChange={handleFormChanges}>
                            <option value="">Which Crop you grow</option>
                            {
                                [].map((item, index) => {
                                    if (item.category === formData.cropType) {
                                        return <>
                                            <option value={item.cropName}>{item.cropName}</option>
                                        </>
                                    }
                                    return null
                                })
                            }
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <label>
                            Date of Sowing
                        </label>
                        <input required onChange={handleFormChanges} type="date" className='input-box' name="dateOfSowing" placeholder="Date of sowing" />
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="input-wrapper">
                                <label>
                                    Area of this farm
                                </label>
                                <input required onChange={handleFormChanges} className='input-box' type="number" name="fieldArea" placeholder="Area of your farm" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-wrapper">
                                <label>
                                    Unit of Messurement
                                </label>
                                <select name="fieldSizeUnit"
                                    disabled={formData.cropType === undefined || formData.cropType === "" ? true : false}
                                    onChange={handleFormChanges}
                                    required
                                >
                                    <option value="">Unit of Messurement line acre, hactor</option>
                                    Hectare/acre/Katta
                                    <option value="hectare">Hectare</option>
                                    <option value="acre">Acre</option>
                                    <option value="bigha">Bigha</option>
                                    <option value="katta">Katta</option>
                                </select>
                            </div>
                        </div>
                    </div>




                    <div className='selection-wrapper'>
                        <div className='selection-title'>
                            <span className="en">Irrigation Facility?</span>
                        </div>
                        <div className='radio-wrap'>
                            <Radio color='primary' {...controlProps("irrigation")} />
                            <Radio color='primary' {...controlProps("irrigation")} />
                        </div>
                    </div>

                    <div className='selection-wrapper'>
                        <div className='selection-title'>
                            <span className="en">Storage Facility?</span>
                        </div>
                        <div className='radio-wrap'>
                            <Radio color='primary' {...controlProps("storage")} />
                            <Radio color='primary' {...controlProps("storage")} />
                        </div>
                    </div>

                    <div className='selection-wrapper'>
                        <div className='selection-title'>
                            <span className="en">Chemical fertilizers?</span>
                        </div>
                        <div className='radio-wrap'>
                            <Radio color='primary' {...controlProps("chemicalFertilizers")} />
                            <Radio color='primary' {...controlProps("chemicalFertilizers")} />
                        </div>
                    </div>

                    <div className='selection-wrapper'>
                        <div className='selection-title'>
                            <span className="en">Soil tested?</span>
                        </div>
                        <div className='radio-wrap'>
                            <Radio color='primary' {...controlProps("soilTested")} />
                            <Radio color='primary' {...controlProps("soilTested")} />
                        </div>
                    </div>
                    {/* <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} /> */}
                    <br />
                    <button className="button">Create Profile</button>
                    <br /><br />
                    <div id="recaptcha-container"></div>

                </div>
            </form >
        </div >
    )
}

export default Farmer