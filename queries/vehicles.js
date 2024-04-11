const db = require("../db/dbConfig.js")


const getAllUserVehicles = async (id) => {
    try {
        const allUserVehicles = await db.any('SELECT * FROM vehicles WHERE user_id=$1', id)
        return allUserVehicles
       } catch (error) {
     return error
  }
}

module.exports = {getAllUserVehicles};