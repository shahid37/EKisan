

const fetchReceivedOrders = ({ user }) => {
    return new Promise(async (resolve) => {
        // console.log(user)
        if (user?.store?.received_orders) {
            var ids = Object.keys(user.store.received_orders)
            const received_orders = await Promise.all(
                Object.values(user.store.received_orders).map(async (order, index) => {
                    return {
                        ...order.item,
                        itemId: order.item.id,
                        orderStatus: order.orderStatus,
                        quantity: order.quantity,
                        timeStamp: order.timeStamp,
                        id: ids[index],
                        buyerId: order.buyerId
                    }
                })
            )
            resolve(received_orders)
        }
        else {
            resolve([])
        }
    })
}

export default fetchReceivedOrders