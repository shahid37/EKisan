"use client"
import Select from '@/components/forms/Select';
import Input from '@/components/forms/input';
import { AuthContext } from '@/providers/AuthProviser';
import createFramerProfile from '@/util/create-profile/createFramerProfile';
import fetchCategories from '@/util/product/fetchCategories';
import fetchCrops from '@/util/product/fetchCrops';
import { Delete } from '@mui/icons-material';
import Radio from '@mui/material/Radio';

import { useContext, useEffect, useState } from 'react';

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
        fieldSizeUnit: "",
        irrigation: "",
        storage: "",
        chemicalFertilizers: "",
        soilTested: "",
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
const FarmForm = ({ index, deleteFarm, handleFarmChange, categories, crops, farms }) => {
    const controlProps = ({ name, value }) => ({
        checked: farms[index][name] === value,
        onChange: (e) => handleFarmChange(e, index),
        value: value,
        name: name,
        size: "small"
    });
    return (
        <div className="farm mt-10">
            <h5 className='heading'>Farm {index + 1} {index > 0 && <Delete onClick={deleteFarm(index)} color='error' />}</h5>

            <Select
                id={`crop-type`}
                label="What kind of crop you grow"
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
            </Select>

            <Select name={`cropName`}
                required
                value={farms[index].cropName}
                id={`crop-name`}
                label={"Crop you grow in this Farm"}
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
            </Select>

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

            <Input
                required
                value={farms[index].fieldArea}
                onChange={(e) => { handleFarmChange(e, index) }}
                className='input-box'
                type="number"
                label={"Area of this farm"}
                name={`fieldArea`}
                id={`fieldArea`}
                placeholder="Area of your farm" />



            <Select name={`fieldSizeUnit`}
                disabled={farms[index].cropType === undefined || farms[index].cropType === "" ? true : false}
                onChange={(e) => { handleFarmChange(e, index) }}
                id={`fieldSizeUnit`}
                required
                label={"Unit of Messurement"}
                value={farms[index].fieldSizeUnit}
            >
                <option value="">Unit of Messurement line acre, hactor</option>
                Hectare/acre/Katta
                <option value="hectare">Hectare</option>
                <option value="acre">Acre</option>
                <option value="bigha">Bigha</option>
                <option value="katta">Katta</option>
            </Select>

            <div className='selection-wrapper'>
                <div className='selection-title'>
                    <span className="en">....</span>
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
        </div >
    )
}
export default Farmer