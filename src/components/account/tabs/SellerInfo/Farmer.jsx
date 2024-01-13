import { AuthContext } from '@/providers/AuthProviser'
import { Lock } from '@mui/icons-material'
import React, { useContext } from 'react'
import Link from "next/link"
const Farmer = () => {
    const { user } = useContext(AuthContext)
    if (user.farmerData) {
        return (

            <>
                <div className="registration">
                    <form onSubmit={createFarmerAccount}>
                        <div id="wrapper">
                            <h4>Create Farmer Profile</h4>
                            <br />
                            <div className="crops">
                                <h5>Farm 1</h5>
                                <div className="d-flex justify-content-center">
                                    <select required name="cropType" onChange={handleFormChanges} id="inputState">
                                        <option value="">Crop Category - फसल का प्रकार</option>
                                        {
                                            category.map((item, index) => {
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
                            <div className="d-flex justify-content-center">
                                <select name="cropName"
                                    required
                                    disabled={formData.cropType === undefined || formData.cropType === "" ? true : false}
                                    onChange={handleFormChanges} id="inputState">
                                    <option value="">Which Crop you grow - फ़सल का नाम</option>
                                    {
                                        crops.map((item, index) => {
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
                            <h5>
                                Date of Sowing - फसल लगाने की तिथि
                            </h5>
                            <div className="d-flex justify-content-center">
                                <input required onChange={handleFormChanges} type="date" name="dateOfSowing" placeholder="Date of sowing" />
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="d-flex justify-content-center">
                                        <input required onChange={handleFormChanges} type="number" name="fieldArea" placeholder="Area of your farm - कितने जमीन पर लगाए हैं?" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="d-flex justify-content-center">
                                        <select name="fieldSizeUnit"
                                            disabled={formData.cropType === undefined || formData.cropType === "" ? true : false}
                                            onChange={handleFormChanges} id="inputState"
                                            required
                                        >
                                            <option value="">Unit of Messurement line acre, hactor - खेत मापने का नाम ?</option>
                                            Hectare/acre//Katta
                                            <option value="hectare">Hectare - हैक्टर</option>
                                            <option value="acre">Acre - एकड़</option>
                                            <option value="bigha">Bigha - बीघा</option>
                                            <option value="katta">Katta - कट्टा</option>
                                        </select>
                                    </div>
                                </div>
                            </div>




                            <div className='selection-wrap'>
                                <div className='selection-title'>
                                    <span className="en">Irrigation Facility? -</span> सिंचाई सुविधा?
                                </div>
                                <div className='radio-wrap'>
                                    <input onChange={handleFormChanges} type="radio" id="irrigation_yes" name="irrigation" value={"yes"} /><label htmlFor="irrigation_yes">हाँ है</label>
                                    <input onChange={handleFormChanges} type="radio" id="irrigation_no" name="irrigation" value={"no"} /><label htmlFor="irrigation_no">नहीं है</label>
                                </div>
                            </div>

                            <div className='selection-wrap'>
                                <div className='selection-title'>
                                    <span className="en">Storage Facility? -</span> भंडारण सुविधा ?
                                </div>
                                <div className='radio-wrap'>
                                    <input onChange={handleFormChanges} type="radio" id="storage_yes" name="storage" value={"yes"} /><label htmlFor="storage_yes">हाँ है</label>
                                    <input onChange={handleFormChanges} type="radio" id="storage_no" name="storage" value={"no"} /><label htmlFor="storage_no">नहीं है</label>

                                </div>
                            </div>

                            <div className='selection-wrap'>
                                <div className='selection-title'>
                                    <span className="en">Chemical fertilizers? -</span> रासायनिक खाद ?
                                </div>
                                <div className='radio-wrap'>
                                    <input onChange={handleFormChanges} type="radio" id="chemical_fertilizer_yes" name="chemicalFertilizers" value={"yes"} /><label htmlFor="chemical_fertilizer_yes">हाँ है</label>
                                    <input onChange={handleFormChanges} type="radio" id="chemical_fertilizer_no" name="chemicalFertilizers" value={"no"} /><label htmlFor="chemical_fertilizer_no">नहीं है</label>
                                </div>
                            </div>

                            <div className='selection-wrap'>
                                <div className='selection-title'>
                                    <span className="en">Soil tested? -</span> मिट्टी जांच ?
                                </div>
                                <div className='radio-wrap'>
                                    <input onChange={handleFormChanges} type="radio" id="soil_tested_yes" name="soilTested" value={"yes"} /><label htmlFor="soil_tested_yes">हाँ है</label>
                                    <input onChange={handleFormChanges} type="radio" id="soil_tested_no" name="soilTested" value={"no"} /><label htmlFor="soil_tested_no">नहीं है</label>
                                </div>
                            </div>
                            {/* <StateDisctrict formData={formData} handleFormChanges={handleFormChanges} /> */}
                            <br />
                            <input className="theme-btn" value="Submit" id="submit" type="submit" />
                            <br /><br />
                            <div id="recaptcha-container"></div>

                        </div>
                    </form >
                </div >
            </>
        )
    }
    else {
        return (
            <div className='seller-info'>
                <img src="/icons/store_locked.svg" alt="" />
                <div className="heading">You Store is Locked <Lock /></div>
                <Link href="create-profile/farmer">
                    <button className="button">Unlock Store</button>
                </Link>
            </div>
        )
    }
}

export default Farmer