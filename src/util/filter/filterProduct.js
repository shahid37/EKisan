

const filterProduct = ({ products = [], filterBy = "State", category, limit = null, except = null, sellerUID = null }) => {
    limit = limit ? limit : products.length - 1
    var localProducts = products;
    if (category) {
        category = category.toLowerCase()
        localProducts = localProducts.filter(item => item.category.toLowerCase().includes(category))
    }
    if (filterBy === "seller") {
        localProducts = localProducts.filter(item => item.sellerUID === sellerUID)
    }
    if (except) {
        localProducts = localProducts.filter(item => item.id != except)
    }
    return localProducts.splice(0, limit)
}

export default filterProduct