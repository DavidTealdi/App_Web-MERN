const {Router} = require('express')
const {autoRequired} = require('../middlewares/validateToken')
const {getTasks, getTaskById, createTasks, updateTasks, deleteTasks} = require('../controllers/tasks.controllers')

const router = Router()


router.get('/tasks', autoRequired, getTasks)
router.get('/tasks/:id', autoRequired, getTaskById)
router.post('/tasks', autoRequired, createTasks)
router.put('/tasks/:id', autoRequired, updateTasks)
router.delete('/tasks/:id', autoRequired, deleteTasks)

module.exports = router