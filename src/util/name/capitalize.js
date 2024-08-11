
const capitalize = (string = "") => {
    if (string.includes("-")) {
        var words = string.split("-")
        var newList = []
        for (let i in words) {
            var word = words[i]
            newList.push(word.charAt(0).toUpperCase() + word.slice(1))
        }
        return newList.join(" ")
    }
    else {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
}

export default capitalize