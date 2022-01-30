const express = require('express');
const scientistsController = require('../controllers/scientists.controller')

const scientistRouter = express.Router()

scientistRouter.use((req,res,next) => {
    console.log(`Your IP is : ${req.ip}`)
    next();
})

scientistRouter.get('/', scientistsController.getScientists );
scientistRouter.get('/:id', scientistsController.getOneScientist );
scientistRouter.post('/', scientistsController.addOneScientist );

module.exports = scientistRouter;