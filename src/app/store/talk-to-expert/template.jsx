"use client"
const { AuthContext } = require("@/providers/AuthProviser")
const { useContext } = require("react")

const Template = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return children
    }
}
export default Template
