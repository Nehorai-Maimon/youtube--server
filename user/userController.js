const userModel = require("./userModel")

const create = async (data)=>{
    return await userModel.create(data)
} 
const read = async (filter, proj)=>{
    const result = await userModel.find(filter,proj)
    return result
} 

module.exports = {create,read}