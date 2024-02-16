import english from '@/util/name/english';
import productLocation from '@/util/name/productLocation';
import slug from '@/util/name/slug';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
const ProductCard = ({ item = {
    price: "100",
    quantity: "200",
    sellerName: "Sangeeta ",
    sellerUID: "DHI55tOX6SQ0CpvqFr8q9i3oiom2",
    state: "Madhya Pradesh",
    timeStamp: 1658316258885,
    unit: "kg",
    block: "Sagar",
    category: "Vegetables - सब्जियां",
    certificateNo: "200",
    district: "Sagar",
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/kisaandarshan-test.appspot.com/o/items%2F1658316258885.jpg?alt=media&token=140964f5-45ee-4c8c-be33-6ff86239ffa5",
    name: "Drumstick - मोरंगा - मुनगा",
    organic: "yes",

} }) => {
    return (
        <div className="product-card">
            <div className='card'>
                <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                    <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                </Link>
                <div className="detail">
                    <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                    <div className="location"><LocationOnIcon />{productLocation({ product: item })}</div>
                    <div className="heading text-center">
                        <div className="price">	&#8377;{item.price.toLocaleString('en-IN')}/ {item.unit}</div>
                    </div>
                    <div className="action-wrap">
                        <button className="button button-blue">
                            <EditNoteIcon />
                        </button>
                        <button className="button button-red">
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard