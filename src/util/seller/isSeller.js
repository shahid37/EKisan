
const isSeller = (user) => {
    return user?.userType === "farmer" || user?.userType === "corporate"
}

export default isSeller