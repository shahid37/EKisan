import fetchProductData from "../product/fetchProductData";

const fetchCart = ({ user }) => {
    var total = 0
    return new Promise(
        async resolve => {
            const userCartArr = await Promise.all(
                user.cart &&
                Object.values(user?.cart).map(async (cartItem, index) => {
                    var cartItemsArry = Object.keys(user?.cart)
                    const productDetail = await fetchProductData(cartItem.itemId);
                    total += parseFloat(cartItem.quantity) * parseFloat(productDetail.price);
                    const item = { ...productDetail, ...cartItem, cartId: cartItemsArry[index] };
                    return item;
                })
            )
            resolve({ userCartArr, total })
        }
    );
}

export default fetchCart