const Task = require('../models/task.model')

const getTasks = async (req, res) => {
    
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user')

    return res.json(tasks)
}

const getTaskById = async (req, res) => {
    
    const task = await Task.findById(req.params.id).populate('user')

    if (!task)  return res.status(404).json({message: "Tarea no encontrada"})

    return res.json(task)
}


const createTasks = async (req, res) => {
    
    const {title, description, date} = req.body

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })

    const savedTask = await newTask.save()

    return res.json(savedTask)
}

const updateTasks = async (req, res) => {
    
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    if (!task)  return res.status(404).json({message: "Tarea no encontrada"})

    res.json(task)
}

const deleteTasks = async (req, res) => {
    
    const task = await Task.findByIdAndDelete(req.params.id)

    if (!task)  return res.status(404).json({message: "Tarea no encontrada"})

    return res.sendStatus(204)
}


module.exports = {
    getTasks, 
    getTaskById,
    createTasks,
    updateTasks,
    deleteTasks
}