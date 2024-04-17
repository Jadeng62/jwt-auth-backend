const express = require('express')
const vehicles = express.Router()

const {getAllUserVehicles, getOneVehicleDetail, createVehicle, removeVehicle} = require("../queries/vehicles.js")


vehicles.get('/singleVehicle/:vehicle_id' ,async (req, res) => {
    try {
        const oneUserVehicle = await getOneVehicleDetail(req.params.vehicle_id)
        res.status(200).json(oneUserVehicle)
    } catch (error) {
        res.status(500).json({error: 'server error'})
    }
})

vehicles.get('/:id',async (req,res) => {

    try {
        const allUserVehicles = await getAllUserVehicles(req.params.id);
        res.status(200).json(allUserVehicles)
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
})

vehicles.post('/', async (req, res) => {
    try {
        const getNewVehicle = await createVehicle(req.body)
        res.status(200).json(getNewVehicle)
    } catch (error) {
        res.status(400).json({ error: 'Server error' });
    }
})

vehicles.delete("/:vehicle_id", async (req, res) => {
    const {vehicle_id} = req.params
    try {
        const removeOneVehicle = await removeVehicle(vehicle_id)
    res.status(200).json(removeOneVehicle)
    } catch (error) {
        res.status(400).json({ error: 'Server error' });
    }
})


module.exports = vehicles;


