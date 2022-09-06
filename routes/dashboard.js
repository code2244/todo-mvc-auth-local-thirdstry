const express = require('express')
const router = express.Router()
const publicDashboard = require('../controllers/dashboard')
const todosController = require('../controllers/todos')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, publicDashboard.getIndex)
router.post('/getTodos', todosController.getTodos)





module.exports = router