const express = require('express')
const router = express.Router();

const {createDriver,getDriverById,verifyDriverCredentials,getAllDrivers} = require('../controllers/driverController');

// Register a driver
// ? Working
router.post('/new-driver', createDriver);

// Get a Driver by ID
// ? working
router.get('/driver/:id', getDriverById);

// ?Working
router.get('/get-drivers',getAllDrivers)

//! 401 Unauthorized The request is unauthenticated.(password error)
router.post('/verify-driver', verifyDriverCredentials);


module.exports=router;