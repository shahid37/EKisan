import stateShortForm from "./stateShortForm"

const productLocation = ({ product, short = true }) => {
    if (product.block && short) {
        return `${product.block}, ${stateShortForm(product.state)}`
    }
    else if (!short) {
        return `${product.block}, ${product.state}`
    }
    else {
        return `${product.district}, ${stateShortForm(product.state)}`
    }
}

export default productLocation