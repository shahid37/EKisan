
const fetchNotifications = ({ user }) => {
    return new Promise(async (resolve) => {
        if (user?.notifications) {
            var notificationsItemsArry = Object.keys(user?.notifications)
            const notifications = await Promise.all(
                Object.values(user?.notifications).map(async (item, index) => {
                    return { ...item, id: notificationsItemsArry[index] }
                })
            )
            notifications.sort((a,b)=>b.timestamp-a.timestamp)
            resolve(notifications)
        }
        else {
            resolve([])
        }
    })
}

export default fetchNotifications