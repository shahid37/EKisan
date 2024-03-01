
const fetchOrders = ({ user }) => {
    return new Promise(async (resolve) => {
        if (user?.orders) {
            const orders = await Promise.all(
                Object.values(user?.orders).map(async (order, index) => {
                    return {
                        ...order.item,
                        orderStatus: order.orderStatus,
                        quantity: order.quantity,
                        timeStamp: order.timeStamp,

                    }
                })
            )
            resolve(orders)
        }
        else {
            resolve(null)
        }
    })
}

export default fetchOrders