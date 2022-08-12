const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const authMiddleware = require('../middlewares/auth')
const getNameMiddleware = require('../middlewares/getName')

router.get('/', mainController.home)

router.get('/hello', getNameMiddleware, mainController.hello)

router.get('/private', authMiddleware, mainController.private)

module.exports = router