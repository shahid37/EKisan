"use client"
import { AuthContext } from '@/providers/AuthProviser';
import createFramerProfile from '@/util/create-profile/createFramerProfile';
import fetchCategories from '@/util/product/fetchCategories';
import fetchCrops from '@/util/product/fetchCrops';
import { Delete } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import { useContext, useEffect, useState } from 'react';
import Link from "next/link"
const Farmer = () => {
    const { user } = useContext(AuthContext)
    const [crops, setCrops] = useState([]);
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState([])
    const [farms, setFarms] = useState([{
        cropType: "",
        cropName: "",
        dateOfSowing: "",
        fieldArea: "",
        fieldSizeUnit: ""
    }])
    useEffect(() => {
        const fetchData = async () => {
            setCrops(await fetchCrops())
            setCategories(await fetchCategories({}))
        }
        fetchData();

    }, [])
    const handleFarmChange = (e, index) => {
        var farmArr = [...farms]
        farmArr[index][e.target.name] = e.target.value
        setFarms(farmArr)
    }
    const controlProps = ({ name, value }) => ({
        checked: formData[name] === value,
        onChange: handleFormChanges,
        value: value,
        name: name,
        size: "small"
    });
    let name, value;
    const handleFormChanges = (e) => {
        name = e.target.name
        value = e.target.value
        setFormData({ ...formData, [name]: value })
    }
    const deleteFarm = (index) => {
        return () => {
            var farmsArr = farms.filter((item, i) => i !== index)
            setFarms(farmsArr)
        }
    }
    const handleFormSubmmit = (e) => {
        e.preventDefault();
        createFramerProfile({ data: { ...formData, farms: farms }, user: user })

    }
    if (user.farmerData) {
        return (
            <div className="px-2 create-profile">
                <form onSubmit={handleFormSubmmit}>

                    <div id="wrapper">
                        {
                            farms.map((item, index) => {
                                return (
                                    <FarmForm
                                        deleteFarm={deleteFarm}
                                        index={index}
                                        key={index}
                                        crops={crops}
                                        categories={categories}
                                        farms={farms}
                                        handleFarmChange={handleFarmChange}
                                    />
                                )
                            })
                        }
                        <button onClick={() => { setFarms([...farms, {}]) }} type='button' className="button">Add More</button>

                        <div className='selection-wrapper'>
                            <div className='selection-title'>
                                <span className="en">Do you have....</span>
                            </div>
                            <div className='radio-wrap text-center flex'>
                                <div style={{ width: 38 }}>Yes</div>
                                <div style={{ width: 38 }}>No</div>
                            </div>
                        </div>

                        <div className='selection-wrapper'>
                            <div className='selection-title'>
                                <span className="en">Irrigation Facility?</span>
                            </div>
                            <div className='radio-wrap'>
                                <Radio color='primary' {...controlProps({ name: "irrigation", value: "yes" })} />
                                <Radio color='primary' {...controlProps({ name: "irrigation", value: "no" })} />
                            </div>
                        </div>

                        <div className='selection-wrapper'>
                            <div className='selection-title'>
                                <span className="en">Storage Facility?</span>
                            </div>
                            <div className='radio-wrap'>
                                <Radio color='primary' {...controlProps({ name: "storage", value: "yes" })} />
                                <Radio color='primary' {...controlProps({ name: "storage", value: "no" })} />
                            </div>
                        </div>

                        <div className='selection-wrapper'>
                            <div className='selection-title'>
                                <span className="en">Chemical fertilizers?</span>
                            </div>
                            <div className='radio-wrap'>
                                <Radio color='primary' {...controlProps({ name: "chemicalFertilizers", value: "yes" })} />
                                <Radio color='primary' {...controlProps({ name: "chemicalFertilizers", value: "no" })} />
                            </div>
                        </div>

                        <div className='selection-wrapper'>
                            <div className='selection-title'>
                                <span className="en">Soil tested?</span>
                            </div>
                            <div className='radio-wrap'>
                                <Radio color='primary' {...controlProps({ name: "soilTested", value: "yes" })} />
                                <Radio color='primary' {...controlProps({ name: "soilTested", value: "no" })} />
                            </div>
                        </div>
                        {/* <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} /> */}
                        <br />
                        <button type='submit' className="button">Create Profile</button>
                        <br /><br />
                        <div id="recaptcha-container"></div>

                    </div>
                </form >
            </div >
        )
    }
    else {
        return (
            <div className='seller-info'>
                <img loading='lazy' src="/icons/store_locked.svg" alt="" />
                <div className="heading">You Store is Locked <Lock /></div>
                <Link href="create-profile/farmer">
                    <button className="button">Unlock Store</button>
                </Link>
            </div>
        )
    }
}
const FarmForm = ({ index, deleteFarm, handleFarmChange, categories, crops, farms }) => {
    return (
        <div className="farm mt-10">
            <h5 className='heading'>Farm {index + 1} {index > 0 && <Delete onClick={deleteFarm(index)} color='error' />}</h5>
            <div className="input-wrapper">
                <label htmlFor={`crop-type`}>What kind of crop you grow</label>
                <select
                    id={`crop-type`}
                    required
                    value={farms[index].cropType}
                    name={`cropType`}
                    onChange={(e) => { handleFarmChange(e, index) }}
                >

                    <option value="">Crop Category - फसल का प्रकार</option>
                    {
                        categories.map((item, index) => {
                            if (
                                item.allowedTo === "all"
                            ) {
                                return <option key={index} value={item.categorieName}>{item.categorieName}</option>
                            }
                        })
                    }
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor={`crop-name`}>Crop you grow in this Farm</label>
                <select name={`cropName`}
                    required
                    value={farms[index].cropName}
                    id={`crop-name`}
                    disabled={farms[index].cropType === undefined || farms[index].cropType === "" ? true : false}
                    onChange={(e) => { handleFarmChange(e, index) }}>
                    <option value="">Which Crop you grow</option>
                    {
                        crops.map((item, cropIndex) => {
                            if (item.category === farms[index].cropType) {
                                return <option key={cropIndex} value={item.cropName}>{item.cropName}</option>
                            }
                            return null
                        })
                    }
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor={`date`}>
                    Date of Sowing
                </label>
                <input
                    required
                    value={farms[index].dateOfSowing}
                    onChange={(e) => { handleFarmChange(e, index) }}
                    id={`date`}
                    min={"2023-01-1"}
                    max={"2025-01-1"}
                    type="date"
                    className='input-box'
                    name={`dateOfSowing`}
                    placeholder="Date of sowing" />
            </div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="input-wrapper">
                        <label htmlFor={`fieldArea`}>
                            Area of this farm
                        </label>
                        <input
                            required
                            value={farms[index].fieldArea}
                            onChange={(e) => { handleFarmChange(e, index) }}
                            className='input-box'
                            type="number"
                            name={`fieldArea`}
                            id={`fieldArea`}
                            placeholder="Area of your farm" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="input-wrapper">
                        <label htmlFor={`fieldSizeUnit`}>
                            Unit of Messurement
                        </label>
                        <select name={`fieldSizeUnit`}
                            disabled={farms[index].cropType === undefined || farms[index].cropType === "" ? true : false}
                            onChange={(e) => { handleFarmChange(e, index) }}
                            id={`fieldSizeUnit`}
                            required
                            value={farms[index].fieldSizeUnit}
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
        </div>
    )
}
export default Farmer