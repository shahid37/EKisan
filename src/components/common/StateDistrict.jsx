import { useState } from 'react'
import { IndianDistrict, IndianStates, Blocks } from '@/util/data/geographical-data'
function StateDisctrict(props) {
    const { handleFormChanges } = props
    const [optionBlock, setOptionBlock] = useState(undefined)
    const [optionDistrict, setOptionDistrict] = useState(undefined)
    function changeState(event) {
        var StateSelected = event.target.value;
        setOptionDistrict(IndianDistrict[StateSelected])
        if (StateSelected === "") {
            setOptionDistrict(undefined)
        }
        handleFormChanges(event)
    }


    const districtChange = (event) => {
        var district = event.target.value
        setOptionBlock(Blocks[district])
        handleFormChanges(event)

    }

    return (
        <>
            <div className='input-wrapper'>
                <label htmlFor="inputState">State</label>
                <select required name="state" label="State" onChange={changeState} id="inputState">
                    <option value="">Select a State - राज्य चुनें</option>
                    {
                        IndianStates.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </select>

            </div>
            <div className='input-wrapper'>
                <label htmlFor="inputDistrict">District</label>
                {
                    props.formData.state === undefined || optionDistrict === undefined ?
                        <select required disabled name="district" id="inputDistrict">
                            <option value="">Select a State First</option>

                        </select>
                        : <select required value={props.formData.state} onChange={districtChange} name="district" label="Select a District">
                            {
                                optionDistrict.map((item, i) => {
                                    return <option key={i} value={item}>{item}</option>
                                })
                            }
                        </select>
                }
            </div>

            <div className='input-wrapper'>
                <label htmlFor="inputBlocks">Block/City</label>
                {
                    props.formData.district === undefined || optionBlock === undefined ?
                        <select disabled name="block"
                            id="inputBlocks">
                            <option value="">Select District First</option>
                        </select>
                        : <select onChange={handleFormChanges} required name="block"

                            label="Select Block" id="inputBlocks">
                            {
                                optionBlock.map((item, i) => {
                                    return <option key={i} value={item}>{item}</option>
                                })
                            }
                        </select>
                }
            </div>
        </>
    )
}

export default StateDisctrict