const createUserC = require('./controllers/createUserC')
const deleteC = require('./controllers/deleteC')
const readC = require('./controllers/readC')
const updateC = require('./controllers/updateC')

const router = require('express').Router()

router.post('/create_user',createUserC)
router.get('/read_user',readC)
router.put('/update_user',updateC)
router.delete('/delete_user',deleteC)
module.exports=router