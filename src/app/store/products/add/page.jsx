"use client"
import Input from '@/components/forms/Input';
import Select from '@/components/forms/Select';
import { AuthContext } from '@/providers/AuthProviser';
import fetchCategories from '@/util/product/fetchCategories';
import fetchCrops from '@/util/product/fetchCrops';
import sendItemToVerification from '@/util/product/sendItemToVerification';
import Backdrop from "@mui/material/Backdrop";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from '@mui/material/CircularProgress';
import { useContext, useEffect, useState } from 'react';
import Swal from "sweetalert2";

const Page = () => {
    const { user } = useContext(AuthContext)
    const [crops, setCrops] = useState([]);
    const [productImage, setProductImage] = useState(null)
    const [loading, setLoading] = useState(false)
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
        if (name == "organic") {
            formValue.organic === "yes" ? setFormValue({ ...formValue, organic: "no" }) : setFormValue({ ...formValue, organic: "yes" })
        } else {

            setFormValue({
                ...formValue,
                [name]: value
            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await sendItemToVerification({ user: user, itemData: formValue, productImage: productImage })
        setLoading(false)
        Swal.fire("Product Submited", "Product will be listed after being verified by our team", "success")
            .then(() => {
                window.location.replace("/store/products")
            })
    }
    const allowedTo = (item) => {
        if (user.userType == "farmer") {
            if (item.allowedTo == "all") return true
        }
        else {
            return true
        }
    }
    return (
        <div className='mx-3 add-product'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <h1 className='heading'>Add Products to your Store</h1>
            <div className="file mx-20">
                <input accept="image/png, image/jpeg, image/jpg" onChange={(e) => { setProductImage(e.target.files[0]) }} id="productImage" className='hidden' type="file" />
                <div className='image-preview'>
                    {
                        productImage ?
                            <img src={URL.createObjectURL(productImage)} alt="" />
                            :
                            <img src="/images/placeholders/product_placeholder.png" alt="" />
                    }
                </div>
                <label htmlFor="productImage">
                    <div className="button text-center button-blue">
                        Add Product Image
                    </div>
                </label>
            </div>


            <form onSubmit={handleSubmit}>
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
                            if (allowedTo(item)) {
                                return <option key={index} value={item.categorieName}>{item.categorieName}</option>
                            }
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
                    {
                        crops.map((item, cropIndex) => {
                            if (item.category === formValue.category) {
                                return <option key={cropIndex} value={item.cropName}>{item.cropName}</option>
                            }
                            return null
                        })
                    }
                </Select>
                <Input
                    placeholder="Enter the availabe quantity to sell"
                    label="Quantity"
                    name="quantity"
                    type="text"
                    onChange={handleFormChanges}
                />
                <Input
                    placeholder="eg: Kesar"
                    label="Variety / Make"
                    name="variety"
                    type="text"
                    onChange={handleFormChanges}
                />
                <div className="input-wrapper">
                    <label htmlFor="description">Description</label>
                    <textarea minLength={50} id='description' name='description' className='input-box' placeholder='About your product (optional) Atleast 50 Charcters'>

                    </textarea>
                </div>
                <Input
                    placeholder="eg: 290"
                    label="Price"
                    name="price"
                    type="number"
                    required
                    onChange={handleFormChanges}
                />

                <Select
                    required
                    label={"Unit"}
                    name="unit"
                    className="form-control"
                    onChange={handleFormChanges}
                >
                    <option value="Not Selected">Unit </option>
                    <option value="kg">per kg</option>
                    <option value="liter">per liter(L)</option>
                    <option value="quintal">per quintal(100 KG)</option>
                    <option value="100grams">per 100grams</option>
                    <option value="250grams">per 250grams</option>
                    <option value="500grams">per 500grams</option>
                    <option value="dozen">per dozen(12 Pieces)</option>
                    <option value="piece">per piece</option>
                </Select>
                <div className='input-wrapper'>
                    <label htmlFor="">Organic?</label> <Checkbox color='primary' name='organic' value="yes" onChange={handleFormChanges} />
                    {
                        formValue.organic == "yes" && <Input
                            placeholder={"Your Organic Certificate No."}
                            label={"Organic Certificate No."}
                            onChange={handleFormChanges}
                            name={"certificateNo"}
                            required
                            type="number"
                        />
                    }
                </div>
                <button className="button">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Page