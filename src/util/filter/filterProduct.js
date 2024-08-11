

const filterProduct = ({
    products = [],
    filterBy = null,
    category, limit = null,
    except = null,
    sellerUID = null,
    state = null,
    district = null,
    block = null,
}) => {
    limit = limit ? limit : products.length - 1
    var localProducts = products;
    if (category) {
        category = category.toLowerCase()
        localProducts = localProducts.filter(item => item.category.toLowerCase().includes(category))
    }
    if (filterBy === "seller") {
        localProducts = localProducts.filter(item => item.sellerUID === sellerUID)
    }
    if (filterBy === "state") {
        localProducts = localProducts.filter(item => item.state.toLowerCase() === state.toLowerCase())
    }
    if (filterBy === "district") {
        localProducts = localProducts.filter(item => item.district.toLowerCase() === district.toLowerCase())
    }
    if (filterBy === "block") {
        localProducts = localProducts.filter(item => item.block?.toLowerCase() === block.toLowerCase())
    }
    if (except) {
        localProducts = localProducts.filter(item => item.id != except)
    }
    return localProducts.splice(0, limit)
}

export default filterProduct