

const gst = (price) => {
    price = parseFloat(price)
    return price * (5 / 100)
}
const incGST = (price) => {
    price = parseFloat(price)
    return price + price * (5 / 100)
}
export default gst
export { incGST }