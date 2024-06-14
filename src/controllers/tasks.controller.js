import Task from "../models/tasks.model.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate("user")
    res.json(tasks)
}
export const createTasks = async (req, res) => {
    const { title, description, date } = req.body

    const newTasks = new Task({
        title,
        description,
        date,
        user: req.user.id
    })

    const savedTask = await newTasks.save()
    res.json(savedTask)
}



export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate("user")
    if (!task) return res.status(404).json({ message: "tarea no encontrada" })
    return res.json(task)

}
export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({ message: "tarea no encontrada" })
    res.status(200).json({message : "Tarea eliminada"})
}
export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!task) res.status(404).json({ message: "tarea no encontrada" })
    res.json(task)
}