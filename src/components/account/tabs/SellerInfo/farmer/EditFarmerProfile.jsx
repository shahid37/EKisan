"use client"
import FarmForm from '@/components/common/FarmDetailForm';
import { AuthContext } from '@/providers/AuthProviser';
import editFarmerProfile from '@/util/account/editFarmerProfile';
import createFramerProfile from '@/util/create-profile/createFramerProfile';
import fetchCategories from '@/util/product/fetchCategories';
import fetchCrops from '@/util/product/fetchCrops';
import Swal from "sweetalert2"
import { useContext, useEffect, useState } from 'react';

const EditFarmerProfile = () => {
    const { user } = useContext(AuthContext)

    const [crops, setCrops] = useState([]);
    const [categories, setCategories] = useState([])
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
            setCategories(await fetchCategories({}));
            setFarms(user.farmerData.farms)
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
    const handleFormSubmmit = async (e) => {
        e.preventDefault();
        if (await editFarmerProfile({ data: { farms: farms }, user: user })) {
            Swal.fire("Detail Update", "Your Profile has been updated", "success")
        }
    }
    return (
        <div className="px-2 create-profile">
            <form onSubmit={handleFormSubmmit}>

                <div id="wrapper">
                    {
                        farms?.map((item, index) => {
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
                    <br />
                    <button type='submit' className="button">Submit</button>

                </div>
            </form >
        </div >
    )
}

export default EditFarmerProfile