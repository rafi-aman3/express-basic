const model = require('../models/scientists.model')

function getScientists (req,res) {
    res.json(model);
}

function getOneScientist (req,res)  {
    const id  = Number(req.params.id);
    const scientist = model[id]

    if(scientist) {
        res.json(scientist)
    } else {
        res.status(404).json({
            error: "Scientist does not exist!"
        })
    }
}

function addOneScientist (req,res) {

    if(!req.body.firstName || !req.body.lastName || !req.body.subject) {
        return res.status(400).json({
            error: "Please give all the value correctly!"
        })

    }
    const newScientist = {
        id: model.length,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        subject: req.body.subject
    }

    model.push(newScientist);
    res.json(newScientist)
}

module.exports ={
    getScientists,
    getOneScientist,
    addOneScientist
}
