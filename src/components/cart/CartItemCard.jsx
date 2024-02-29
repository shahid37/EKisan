import { database } from '@/firebase';
import { AuthContext } from '@/providers/AuthProviser';
import fetchCart from '@/util/cart/fetchCart';
import english from '@/util/name/english';
import productLocation from '@/util/name/productLocation';
import slug from '@/util/name/slug';
import fetchUser from '@/util/user/fetchUser';
import { Add, Delete, Remove } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ref, set } from 'firebase/database';
import Link from "next/link";
import { useContext, useState } from 'react';
import Swal from "sweetalert2"
const CartItemCard = ({ item, setGrandTotal }) => {
    const { user } = useContext(AuthContext)
    const [currentQuantity, setCurrentQuantity] = useState(parseInt(item.quantity))
    const cartRef = ref(database, `users/${user.uid}/cart/${item.cartId}`)
    const updateSubtotal = async () => {
        const newUser = await fetchUser({ user })
        const userCart = await fetchCart({ user: newUser })
        setGrandTotal(userCart.total)
    }
    const increase = async () => {
        setCurrentQuantity(currentQuantity + 1)
        await set(cartRef, { itemId: item.itemId, quantity: currentQuantity + 1 })
        updateSubtotal()
    }
    const decrease = async () => {
        if (item.category === "Farm Machinery - कृषि मशीनरी" || item.category === "Fertilizers & Pesticides - उर्वरक & कीटनाशक") {
            if (currentQuantity > 1) {
                setCurrentQuantity(currentQuantity - 1)
                await set(cartRef, { itemId: item.itemId, quantity: currentQuantity - 1 })
                updateSubtotal()

            }
        }
        else {
            if (currentQuantity > 100) {
                setCurrentQuantity(currentQuantity - 1)
                await set(cartRef, { itemId: item.itemId, quantity: currentQuantity - 1 })
                updateSubtotal()
            }
            else {
                Swal.fire("Minimum order quantity is 100")
            }
        }
    }
    return (
        <div className="cart-item">
            <div className='card'>
                <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                    <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                </Link>
                <div className="detail">
                    <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                    <div className='price-wrap'><span className="price">&#8377;{item.price.toLocaleString('en-IN')}</span> / {item.unit}</div>
                    <div className="location"><LocationOnIcon />{productLocation({ product: item })}</div>
                    <div className="quantity-control">
                        <button onClick={decrease} className="button button-red">
                            {currentQuantity == 1 ?
                                <Delete />
                                :
                                <Remove />
                            }
                        </button>
                        <div className="box">
                            {currentQuantity}
                        </div>
                        <button onClick={increase} className="button">
                            <Add />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard