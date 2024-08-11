

const gst = (price) => {
    price = parseFloat(price)
    return price * (5 / 100)
}
const incGST = (item) => {
    var price = parseFloat(item.price)
    if(item.sellerType="farmer"){
        return price + price * (5 / 100)
    }else{
        return price
    }

}
export default gst
export { incGST }