
const stateShortForm = (string) => {
    var stringArr = string.split(" ")
    if (stringArr.length == 2) {
        return (stringArr[0][0] + stringArr[1][0])
    }
    else if(string == "Chhattisgarh"){
        return "CG"
    }
    else {
        return string
    }

}

export default stateShortForm