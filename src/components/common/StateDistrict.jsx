import { useEffect, useState } from 'react'
import { IndianDistrict, IndianStates, Blocks } from '@/util/data/geographical-data'
import Select from '@/components/forms/Select'
function StateDisctrict(props) {
    const { handleFormChanges } = props
    const [optionDistrict, setOptionDistrict] = useState(undefined)
    const [optionBlock, setOptionBlock] = useState(undefined)
    const formData = props.formData
    useEffect(() => {
        setOptionDistrict(IndianDistrict[formData.state])
        setOptionBlock(Blocks[formData.district])
    }, [])
    function changeState(event) {
        var StateSelected = event.target.value;
        setOptionDistrict(IndianDistrict[StateSelected].sort())
        if (StateSelected === "") {
            setOptionDistrict(undefined)
        }
        handleFormChanges(event)
    }


    const districtChange = (event) => {
        var district = event.target.value
        setOptionBlock(Blocks[district].sort())
        handleFormChanges(event)

    }
    return (
        <>
            <Select required value={formData.state} name="state" label="Select a State" onChange={changeState} id="inputState">
                <option value="">Select a State - राज्य चुनें</option>
                {
                    IndianStates.sort().map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </Select>


            {
                formData.state === undefined || optionDistrict === undefined ?
                    <Select required disabled name="district" label="Select a District" id="inputDistrict">
                        <option value="">Select a State First</option>

                    </Select>
                    : <Select required value={formData.district} onChange={districtChange} name="district" label="Select a District">
                        {
                            optionDistrict.map((item, i) => {
                                return <option key={i} value={item}>{item}</option>
                            })
                        }
                    </Select>
            }


            {
                formData.district === undefined || optionBlock === undefined ?
                    <Select disabled name="block"
                        id="inputBlocks"
                        label="Select a Block"
                    >
                        <option value="">Select District First</option>
                    </Select>
                    : <Select onChange={handleFormChanges} value={formData.block} name="block"

                        label="Select a Block" id="inputBlocks">
                        {
                            optionBlock.map((item, i) => {
                                return <option key={i} value={item}>{item}</option>
                            })
                        }
                    </Select>
            }

        </>
    )
}

export default StateDisctrict