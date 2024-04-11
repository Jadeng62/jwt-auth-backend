const express = require('express')
const vehicles = express.Router()

const {getAllUserVehicles} = require("../queries/vehicles.js")

vehicles.get('/:id',async (req,res) => {

    try {
        const allUserVehicles = await getAllUserVehicles(req.params.id);
        res.status(200).json(allUserVehicles)
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
})

module.exports = vehicles;


