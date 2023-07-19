const express = require("express");
const { People } = require("../db");
const router = express.Router();



router.get("/", async (req, res, next) => {
    try{
        const user = {user} = req.body

        const people = People.findAll(where: user = user)

    }
    catch (err){
        return res.status(501).send(err.message)
    }

})







module.exports = router;