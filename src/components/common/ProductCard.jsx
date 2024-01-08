import english from '@/util/name/english';
import productLocation from '@/util/name/productLocation';
import slug from '@/util/name/slug';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";

const ProductCard = ({ item }) => {
    return (
        <div className="product-card">
            <div className='card'>
                <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                    <img src={item.imgUrl} alt={english(item.name)} />
                </Link>
                <div className="detail">
                    <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                    <div className='unit'>{item.unit}</div>
                    <div className="location"><LocationOnIcon />{productLocation({ product: item })}</div>
                    <div className="price-wrap">
                        <div className="price">	&#8377;{item.price.toLocaleString('en-IN')}</div>
                        <div className="add-btn">
                            <AddShoppingCartIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard