import isSeller from "./isSeller"

const isRegisterdSeller = (user) => {
    if (isSeller(user)) {
        return user?.farmerData || user?.corporateData
    }
    else {
        return false
    }
}

export default isRegisterdSeller