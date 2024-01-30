import slug from "./slug"
import stateShortForm from "./stateShortForm"
import Link from "next/link"
const productLocation = ({ product, short = true, linked = false }) => {
    const block = product.block ? product.block : product.district
    if (linked) {
        return (<>
            <Link href={`/products/${product.block ? "block" : "district"}/${slug(block)}`}>{block}</Link>,&nbsp;<Link href={`/products/state/${slug(product.state)}`}>{product.state}</Link>
        </>)
    }
    if (product.block && short) {
        return `${block}, ${stateShortForm(product.state)}`
    }
    else if (!short) {
        return `${block}, ${product.state}`
    }
    else {
        return `${product.district}, ${stateShortForm(product.state)}`
    }
}

export default productLocation