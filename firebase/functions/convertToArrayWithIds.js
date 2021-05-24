const convertToArrayWithIds = (firebaseObject) => {
    const ids = Object.keys(firebaseObject)
    const values = Object.values(firebaseObject)
    const array =  values.map((item, index) => {
        const itemWithId = { ...item, id: ids[index]}
        return itemWithId


    })
    return array
}

export default convertToArrayWithIds



//alternatief
// const array = Object.keys(firebaseObject).map(key=> { 
//     return ({ ...firebaseObject[key], uid: key})
// })

