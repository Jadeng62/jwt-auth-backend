const express = require('express')
const vehicles = express.Router()

const {getAllUserVehicles, getOneVehicleDetail, createVehicle} = require("../queries/vehicles.js")


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
    console.log(req.body)
    try {
        const getNewVehicle = await createVehicle(req.body)
        res.status(200).json(getNewVehicle)
    } catch (error) {
        res.status(400).json({ error: 'Server error' });
    }
})


module.exports = vehicles;


