const db = require("../db/dbConfig.js")


const getAllUserVehicles = async (id) => {
    try {
        const allUserVehicles = await db.any('SELECT * FROM vehicles WHERE user_id=$1', id)
        return allUserVehicles
       } catch (error) {
     return error
  }
}

const getOneVehicleDetail = async (vehicle_id) => {
    try {
        const oneVehicle = await db.one('SELECT * FROM vehicles WHERE vehicle_id =$1', vehicle_id)
        return oneVehicle
    } catch (error) {
        return error
    }
}

const createVehicle = async (vehicle) => {
    try {
        const {user_id, make, model, year, vin, engine, horsepower, price, exterior_color, interior_color, custom, torque} = vehicle
        const newVehicle = await db.one('INSERT INTO vehicles (user_id, make, model, year, vin, engine, horsepower, price, exterior_color, interior_color, custom, torque, created_at) VALUES ($1, $2, $3, $4 , $5 ,$6, $7, $8, $9, $10, $11 , $12, $13) RETURNING * ', [user_id, make, model, year, vin, engine, horsepower, price, exterior_color, interior_color, custom, torque, "NOW()"])

        console.log("Query for new Vehicle:",newVehicle)

        return newVehicle

        
    } catch (error) {
        console.error({error: error})
        return error
    }
}

const removeVehicle = async (vehicle_id) => {
    try {
        const deletedCar = await db.one("DELETE FROM vehicles WHERE vehicle_id =$1", vehicle_id)
        return deletedCar
    } catch (error) {
        console.error({error: error})
        return error
    }
}

module.exports = {getAllUserVehicles, getOneVehicleDetail, createVehicle, removeVehicle};